import random
import re
from types import MappingProxyType

PLAYER = "player"
EVENT = "events"
GAME = "game"
SET = "set"
RALLY = "rally"
ID = "id"
RESULT = "result"


END_OF_RALLY = "end of rally"
TIMEOUT = "timeout"
CHALLENGE = "challenge"

SERVE = "Serve"
BLOCK = "Attack Error/Block"
BLOCK_ERROR = "Block Error/Kill"
RECEPTION = "Reception"
ATTACK = "Attack"

TEAM = "Team"


def parse(source: str, game_id: int, team1_player: dict, team2_player: dict) -> list:
    """
    Parse the data.

    Args:
        source (str): The source of the page
        game_id (int): The game id
        team1_player (dict): The players of team 1
        team2_player (dict): The players of team 2

    Returns:

        events (list): A list of events in the game.
            - event (dict): A dictionary containing the event information.
                - player (int): The player who participate in the event (empty if not applicable)
                - event (str): The type of the event.
                - game (int): The game_id
                - set (int): The set number
                - rally (int): The rally number
                - id (int): The event id (not unique)
                - result (str): The result of the event (empty if not applicable)
    """
    START = source.find("Match started")
    END = source.find("Match ended")
    if START < 0 or END < 0:
        print("PARSING FAILURE")
        return []

    titled_team1 = {k.title(): v for k, v in team1_player.items()}
    titled_team2 = {k.title(): v for k, v in team2_player.items()}



    def getPlayerId(player, column, broken={}):
        if player in broken:
            return broken[player]
        find = player in team1_player if column == 1 else player in team2_player
        if find:
            return team1_player[player] if column == 1 else team2_player[player]

        # maybe they accidentally used the title version of the player name.
        find = player in titled_team1 if column == 1 else player in titled_team2
        if find:
            return titled_team1[player] if column == 1 else titled_team2[player]

        # maybe we are checking the wrong team!
        find = player in team2_player if column == 1 else player in team1_player
        if find:
            print("WRONG TEAM WARNING, (", player, ")")
            return team2_player[player] if column == 1 else team1_player[player]

        # maybe we are checking the wrong team!
        find = player in titled_team2 if column == 1 else player in titled_team1
        if find:
            print("WRONG TEAM WARNING, (", player, ")")
            return titled_team2[player] if column == 1 else titled_team1[player]

        # okay we gave up.
        broken[player] = random.randint(1, 9999)
        print("PLAYER NOT FOUND WARNING, (", player, ")")

        return broken[player]


    play_by_play = source[START:END].split("\n")

    events = []

    base = {
        PLAYER: 0,
        EVENT: "",
        GAME: game_id,
        SET: 1,
        RALLY: 1,
        ID: 1,
        RESULT: "",
    }

    view = MappingProxyType(base)
    previous_scored = 1

    previous_serve = {}

    previous_attack = {}

    column = 0

    ignore = False

    for play in play_by_play:
        play = play.strip()

        if play.startswith("<tr"):
            column = 0
        elif play.startswith("<td"):
            column += 1

        if not play or play.startswith("&nbsp;"):
            pass
        elif play == "Set ended":
            base[SET] += 1
            base[RALLY] = 1
            ignore = True
        elif play.endswith("started"):
            ignore = False
        elif ignore:
            pass
        elif play.startswith('<span class="short_play_text">'):
            if "kill" in play.lower():
                previous_attack[RESULT] = "Kill"
            elif play.endswith("service error"):
                previous_serve[RESULT] = "Service Error"
            elif play.endswith(" serves an ace"):
                previous_serve[RESULT] = "Ace"
        elif play.startswith('<td colspan="3" align="center">'):
            events.append(view | {ID: 0, EVENT: TIMEOUT})
        elif play[0] == "<":
            pass
        elif column in (2, 6):  # "-" in play
            events.append(view | {EVENT: END_OF_RALLY, RESULT: play})
            previous_scored = 1 if column == 2 else 0
            base[ID] = 0
            base[RALLY] += 1
        elif "challengeRequest" in play:
            team = team1_player[TEAM] if column == 1 else team2_player[TEAM]
            result = "success" if previous_scored == column == 1 else ""
            end_of_rally = events.pop()
            events.append(
                end_of_rally | {PLAYER: team, EVENT: CHALLENGE, RESULT: result}
            )
            end_of_rally[ID] += 1
            events.append(end_of_rally)
        elif "challengeOutcome" in play:
            pass
        elif play == "Facultative timeout":
            team = team1_player[TEAM] if column == 1 else team2_player[TEAM]
            events.append(view | {ID: 0, PLAYER: team, EVENT: TIMEOUT})
        elif play.startswith("Sub in "):
            player = play.split("Sub in ")[1]
            player_id = getPlayerId(player, column)
            events.append(
                view | {ID: 0, PLAYER: player_id, EVENT: "subsitution", RESULT: "in"}
            )

        elif play.startswith("Sub out "):
            player = play.split("Sub out ")[1]
            player_id = getPlayerId(player, column)
            events.append(
                view | {ID: 0, PLAYER: player_id, EVENT: "subsitution", RESULT: "out"}
            )
        else:
            startswith = play.startswith
            player = TEAM
            result = ""
            if play.endswith(" serves"):
                player = play.split(" serves")[0]
                play = SERVE
            elif startswith("Block  by "):
                player = play.split("Block  by ")[1]
                play = "Block"
                result = BLOCK
                previous_attack[RESULT] = BLOCK
            elif startswith("Block error by "):
                player = play.split("Block error by ")[1]
                play = "Block"
                result = BLOCK_ERROR
                previous_attack[RESULT] = BLOCK_ERROR
            elif startswith("Reception  by "):
                player = play.split("Reception  by ")[1]
                play = RECEPTION
            elif startswith("Attack  by "):
                player = play.split("Attack  by ")[1]
                play = ATTACK
            elif startswith("Ball handling error  by "):
                player = play.split("Ball handling error  by ")[1]
                play = "Set"
                result = "Ball handling error"
            elif startswith("Set error by "):
                player = play.split("Set error by ")[1]
                play = "Set"
                result = "Set error"
            elif startswith("Set  by "):
                player = play.split("Set  by ")[1]
                play = "Set"
            elif startswith("Dig  by "):
                player = play.split("Dig  by ")[1]
                play = RECEPTION
                result = "Dig"
            player_id = getPlayerId(player, column)
            events.append(view | {PLAYER: player_id, EVENT: play, RESULT: result})
            if play == ATTACK:
                previous_attack = events[-1]
            if play == SERVE:
                previous_serve = events[-1]
            base[ID] += 1

    return events


if __name__ == "__main__":
    t1 = {
        "Team": "558928",
        "Autumn Perry": "2862828",
        "Jhayla Bolden": "2475735",
        "Kendall Battistella": "2726203",
        "Mackenzie Pryor": "2724742",
        "Paris Dixon": "2724741",
        "Trinity Vinzant": "2558383",
        "Addison Phares": "2862817",
        "Berra Soyler": "2868366",
        "Gabrielle Barth": "2724740",
        "Rae Leano": "2862819",
        "Shelby McGee": "2862856",
        "Tierney Terrell": "2862825",
    }
    t2 = {
        "Team": "559198",
        "Alyssa Fielder": "2544871",
        "Avery Fowler": "2698976",
        "Hailey Heider": "2698975",
        "Jaylibeth Garcia-Rosa": "2199752",
        "Marina Ognibene": "2544868",
        "McKenzie Morvant": "2385622",
        "Camryn Weldon": "2866696",
        "Ella Folse": "2866697",
        "Hannah Baker": "2385620",
        "Kenedi Miller": "2544866",
        "Payton Woods": "2866702",
    }

    table = {v: i for i, v in t1.items()} | {v: i for i, v in t2.items()} | {0: 0}

    with open("5498228.htm") as f:
        for d in parse(f.read(), 5498228, t1, t2):
            print(d[SET], d[ID], d[EVENT], table[d[PLAYER]], d[RESULT])
