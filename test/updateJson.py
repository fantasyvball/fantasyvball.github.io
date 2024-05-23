from datetime import datetime, timedelta, timezone
import re
import time

import requests

def extract_source(url):
    headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:50.0) Gecko/20100101 Firefox/50.0'}
    source=requests.get(url, headers=headers).text
    return source


url = f"https://stats.ncaa.org/season_divisions/18200/scoreboards?utf8=%E2%9C%93&season_division_id=&game_date={(datetime.now(timezone.utc) - timedelta(days=1)).strftime('%m %d %Y')}&conference_id=0&tournament_id=&commit=Submit".replace(' ', '%2F')


url = "https://stats.ncaa.org/season_divisions/18200/scoreboards?utf8=%E2%9C%93&season_division_id=&game_date=08%2F25%2F2023&conference_id=0&tournament_id=&commit=Submit"


source = extract_source(url)

team_id_pair = re.findall(r'href="/teams/(.*)"> (.*) \(', source)


game_ids = re.findall(r'class="skipMask" href="/contests/([0-9]+)/box_score">Box Score</a>', source)


for i, id_ in enumerate(game_ids):
    team1_id, team1 = team_id_pair.pop(0)
    team2_id, team2 = team_id_pair.pop(0)
    print(id_,team1,team2,team1_id,team2_id)
    source = extract_source(f"https://stats.ncaa.org/contests/{id_}/box_score")
    play_by_play_id = re.findall(r'href="/game/play_by_play/(.*)"',source)[0]
    
    
    mytables = source.split('class="mytable"')
    
    team1_players = {" ".join(reversed(player.split(", "))):id for id, player in re.findall(r'stats_player_seq=(.*)">(.*)</a>',mytables[-2])}
    
    team2_players = {" ".join(reversed(player.split(", "))):id for id, player in re.findall(r'stats_player_seq=(.*)">(.*)</a>',mytables[-1])}

    source = extract_source(f"https://stats.ncaa.org/game/play_by_play/{play_by_play_id}")

    
    play_by_play = source[source.index("Match started"):source.index("Match ended")]
    score = ""
    col = 0
    for play in play_by_play.split("\n"):
        play = play.strip()
        
        if play.startswith("<tr"):
            col = 0
        elif play.startswith("<td"):
            col+= 1

        if play.startswith('<span class="short_play_text">'):
            col = 5
            play = play[play.index(">")+1:play.rindex("<")]
        elif play.startswith('<td colspan="3" align="center">'):
            col = -1
            play = play[play.index(">")+1:play.rindex("<")]

        if not play or play[0] == "<" or play.startswith("&nbsp"):
            continue
        
        print(col, play)
        
    
    print(team1_players)
    print(team2_players)
    break
