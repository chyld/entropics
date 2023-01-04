import sqlite3
from uuid import uuid4
from datetime import datetime


def register(name, amount):
    iid = uuid4()
    start_time = datetime.now()
    con = sqlite3.connect("data.db")
    cur = con.cursor()
    cur.execute(
        "INSERT INTO scores (iid, name, amount, start) VALUES (?, ?, ?, ?)",
        [str(iid), name, amount, str(start_time)],
    )
    con.commit()
    con.close()
    return iid


def results(iid):
    seconds, score = 0, 0
    con = sqlite3.connect("data.db")
    cur = con.cursor()
    res = cur.execute("SELECT amount, start FROM scores WHERE iid = ?", [iid])

    amount, start = res.fetchone()
    start = datetime.fromisoformat(start)
    stop = datetime.now()
    seconds = (stop - start).seconds
    score = seconds / amount

    cur.execute(
        "UPDATE scores SET stop = ?, seconds = ?, score = ? WHERE iid = ?",
        [str(stop), seconds, score, iid],
    )

    con.commit()
    con.close()
    return seconds, score
