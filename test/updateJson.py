from datetime import datetime, timedelta, timezone
import re
import time

import requests
from fake_useragent import UserAgent

import parser

UA = UserAgent()

input("THE SCRAPPER IS READY. PRESS ENTER TO CONTINUE.")


def extract_source(url):
    headers = {"User-Agent": str(UA.random)}
    source = requests.get(url, headers=headers).text
    return source


url = (
    "https://stats.ncaa.org/season_divisions/18200/"
    "scoreboards?utf8=%E2%9C%93&season_division_id="
    f"&game_date={(datetime.now(timezone.utc) - timedelta(days=1)).strftime('%m %d%Y')}"
    "&conference_id=0&tournament_id=&commit=Submit".replace(" ", "%2F")
)


url = (
    "https://stats.ncaa.org/season_divisions/18200/"
    "scoreboards?utf8=%E2%9C%93&season_division_id"
    "=&game_date=08%2F25%2F2023&conference_id=0&tournament_id=&commit=Submit"
)


source = extract_source(url)

team_id_pair = re.findall(r'href="/teams/(.*)"> (.*) \(', source)


game_ids = re.findall(
    r'class="skipMask" href="/contests/([0-9]+)/box_score">Box Score</a>', source
)


def scrape(l: list, game_ids: list):
    for i, id_ in enumerate(game_ids):
        team1_id, team1 = team_id_pair.pop(0)
        team2_id, team2 = team_id_pair.pop(0)
        team1_id = int(team1_id)
        team2_id = int(team2_id)
        print("processing", team1, "vs", team2, "(", id_, ")")
        source = extract_source(f"https://stats.ncaa.org/contests/{id_}/box_score")
        play_by_play_id = re.findall(r'href="/game/play_by_play/(.*)"', source)[0]

        mytables = source.split('class="mytable"')

        team1_players = {
            " ".join(reversed(player.split(", "))): id
            for id, player in re.findall(
                r'stats_player_seq=(.*)">(.*)</a>', mytables[-2]
            )
        }
        team1_players["Team"] = team1_id
        team2_players = {
            " ".join(reversed(player.split(", "))): id
            for id, player in re.findall(
                r'stats_player_seq=(.*)">(.*)</a>', mytables[-1]
            )
        }
        team2_players["Team"] = team2_id
        source = extract_source(
            f"https://stats.ncaa.org/game/play_by_play/{play_by_play_id}"
        )
        l.extend(parser.parse(source, int(id_), team1_players, team2_players))


l = []
try:
    scrape(l, game_ids)
except Exception as e:
    with open("scraper.log", "a+") as f:
        print(l, file=f)
    raise e

with open("scraper.log", "a+") as f:
    print(l, file=f)
