from datetime import datetime, timedelta, timezone
import json
import re
import requests
from fake_useragent import UserAgent
import parser

UA = UserAgent()


def extract_source(url, timeout=(5,10)):
    headers = {"User-Agent": str(UA.random)}
    response = requests.get(url, headers=headers, timeout=timeout)
    response.raise_for_status()  # Raise an exception for 4xx or 5xx status codes
    return response.text


def get_yesterday_date():
    return (
        (datetime.now(timezone.utc) - timedelta(days=1))
        .strftime("%m %d %Y")
        .replace(" ", "%2F")
    )


def build_url(season_id, date):
    return f"https://stats.ncaa.org/season_divisions/{season_id}/scoreboards?game_date={date}"


def get_team_id_pairs(source):
    return re.findall(r'href="/teams/(\d+)">(?:#\s*\d+\s*)?(.*?)\s+\(\d+-\d+\)</a>', source)

def get_game_ids(source):
    return re.findall(
        r'class="skipMask" href="/contests/([0-9]+)/box_score">Box Score</a>', source
    )


def extract_players(source, card_id):
    cards = source.split('class="card-body"')
    print(len(cards))
    players = {
        id: player
        for id, player in re.findall(r'stats_player_seq=(\d+)">([^<]+)</a>', cards[card_id])
    }
    return players


def scrape(game_id, team1_id_pair, team2_id_pair):
    team1_id, team1 = team1_id_pair
    team2_id, team2 = team2_id_pair
    team1_id, team2_id = int(team1_id), int(team2_id)
    print("Processing", team1, "vs", team2, "(", game_id, ")")

    # Extract players for team 1
    source = extract_source(f"https://stats.ncaa.org/contests/{game_id}/individual_stats")
    print(source)
    team1_players = extract_players(source, 0)
    team1_players["Team"] = team1_id

    # Extract players for team 2
    team2_players = extract_players(source, 1)
    team2_players["Team"] = team2_id
    print(team1_players)
    print(team2_players)
    # Fetch play-by-play data
    source = extract_source(f"https://stats.ncaa.org/contests/{game_id}/play_by_play")
    game_data = parser.parse(source, int(game_id), team1_players, team2_players)

    print(game_data)
    return game_data


def main():
    SEASON_ID = "18200"

    with open("log.json", encoding="utf8") as f:
        logs = json.load(f)
    error_log = {}

    input("THE SCRAPPER IS READY. PRESS ENTER TO CONTINUE.")

    try:
        date = get_yesterday_date()
        print(date)
        # overriding date for testing purpose. delete following line on production.
        # date = "08%2F25%2F2023"
        print(date)
        url = build_url(SEASON_ID, date)
        print(url)
        source = extract_source(url)
        team_id_pairs = get_team_id_pairs(source)
        game_ids = get_game_ids(source)

        print(game_ids)
        print(team_id_pairs)
    except Exception as e:
        error_log["exception"] = str(e)
        error_log["note"] = "Major Error: Fail on start"
        with open("log.json", "w", encoding="utf8") as f:
            logs.append(error_log)
            json.dump(logs, f)
        raise e

    print(game_ids)

    for game_id in game_ids:
        try:
            scrape(game_ids, team_id_pairs.pop(0), team_id_pairs.pop(0))
        except Exception as e:
            raise e
            error_log["exception"] = str(e)
            error_log["note"] = "Minor Error: Game Skipped"
            if "skip" in error_log:
                error_log["skip"].append(game_id)
            else:
                error_log["skip"] = [game_id]
        break
    with open("log.json", "w", encoding="utf8") as f:
        logs.append(error_log)
        json.dump(logs, f)


if __name__ == "__main__":
    main()
