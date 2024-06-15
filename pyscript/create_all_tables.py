"""
Create all necessary table for volleyballdb to work
"""
import sqlite3
con = sqlite3.connect("volley.db")

cur = con.cursor()


CREATE_CONFERENCE_TABLE = "CREATE TABLE IF NOT EXISTS Conferences("\
                            "conferenceid INTEGER PRIMARY KEY AUTOINCREMENT,"\
                            "cname VARCHAR(50)"\
                          ");"

# date should be in YYYY-MM-DD
CREATE_DATES_TABLE = "CREATE TABLE IF NOT EXISTS Conferences("\
                        "dateid INTEGER PRIMARY KEY AUTOINCREMENT,"\
                        "date CHAR(10)"\
                     ");"

CREATE_TEAMS_TABLE = "CREATE TABLE IF NOT EXISTS Teams("\
                        "teamid INTEGER PRIMARY KEY AUTOINCREMENT,"\
                        "conferenceid INTEGER,"\
                        "tname VARCHAR(50) UNIQUE,"\
                        "sname VARCHAR(6),"\
                        "officialtid INTEGER UNITQUE,"\
                        "FOREIGN KEY(conferenceid) REFERENCES Conferences(conferenceid)"\
                     ");"

CREATE_GAMES_TABLE = "CREATE TABLE IF NOT EXISTS Games("\
                        "gameid INTEGER PRIMARY KEY AUTOINCREMENT,"\
                        "dateid INTEGER,"\
                        "team1id INTEGER,"\
                        "team2id INTEGER,"\
                        "officialgid INTEGER UNITQUE,"\
                        "neutralsite VARCHAR(50),"\
                        "FOREIGN KEY(dateid) REFERENCES Dates(dateid),"\
                        "FOREIGN KEY(team1id) REFERENCES Teams(teamid),"\
                        "FOREIGN KEY(team2id) REFERENCES Teams(teamid)"\
                     ");"

CREATE_PLAYERS_TABLE = "CREATE TABLE IF NOT EXISTS Players("\
                            "playerid INTEGER PRIMARY KEY AUTOINCREMENT,"\
                            "teamid INTEGER,"\
                            "pname VARCHAR(6),"\
                            "officialpid INTEGER UNITQUE,"\
                            "FOREIGN KEY(teamid) REFERENCES Teams(teamid)"\
                       ");"


CREATE_RESULTTYPES_TABLE = "CREATE TABLE IF NOT EXISTS ResultTypes("\
                                "resultid INTEGER PRIMARY KEY AUTOINCREMENT,"\
                                "result VARCHAR(50)"\
                           ");"

CREATE_ACTIONTYPES_TABLE = "CREATE TABLE IF NOT EXISTS EventTypes("\
                                "actionid INTEGER PRIMARY KEY AUTOINCREMENT,"\
                                "event VARCHAR(50)"\
                           ");"

CREATE_EVENTS_TABLE = "CREATE TABLE IF NOT EXISTS Events("\
                        "eventid INTEGER PRIMARY KEY AUTOINCREMENT,"\
                        "gameid INTEGER,"\
                        "setid INTEGER,"\
                        "reallyid INTEGER,"\
                        "teamid INTEGER,"\
                        "playerid INTEGER,"\
                        "actionid INTEGER,"\
                        "resultid INTEGER,"\
                        "FOREIGN KEY(gameid) REFERENCES Games(gameid),"\
                        "FOREIGN KEY(teamid) REFERENCES Teams(teamid),"\
                        "FOREIGN KEY(playerid) REFERENCES Players(playerid),"\
                        "FOREIGN KEY(actionid) REFERENCES Actions(actionid),"\
                        "FOREIGN KEY(resultid) REFERENCES Results(resultid),"\
                        "CHECK(teamid is not NULL OR playerid is not NULL)"\
                      ");"


cur.execute(CREATE_CONFERENCE_TABLE)
cur.execute(CREATE_DATES_TABLE)
cur.execute(CREATE_TEAMS_TABLE)
cur.execute(CREATE_GAMES_TABLE)
cur.execute(CREATE_PLAYERS_TABLE)
cur.execute(CREATE_RESULTTYPES_TABLE)
cur.execute(CREATE_ACTIONTYPES_TABLE)
cur.execute(CREATE_EVENTS_TABLE)
con.close()
