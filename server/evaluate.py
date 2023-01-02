import sqlite3
from uuid import uuid4
from datetime import datetime


def start(name, amount):
    iid = uuid4()
    start_time = datetime.now()
    con = sqlite3.connect("data.db")
    cur = con.cursor()
    cur.execute(
        "INSERT INTO scores (iid, name, amount, count, start) VALUES (?, ?, ?, ?, ?)",
        [str(iid), name, amount, 0, str(start_time)],
    )
    con.commit()
    con.close()
    return iid


def proceed(iid):
    seconds, score = 0, 0
    con = sqlite3.connect("data.db")
    cur = con.cursor()
    res = cur.execute("SELECT amount, count, start FROM scores WHERE iid = ?", [iid])
    amount, count, start = res.fetchone()
    count += 1

    if count > amount:
        start = datetime.fromisoformat(start)
        stop = datetime.now()
        seconds = (stop - start).seconds
        score = seconds / amount
        cur.execute(
            "UPDATE scores SET count = ?, stop = ?, seconds = ?, score = ? WHERE iid = ?",
            [count, str(stop), seconds, score, iid],
        )
    else:
        cur.execute("UPDATE scores SET count = ? WHERE iid = ?", [count, iid])

    con.commit()
    con.close()
    return count <= amount, seconds, score
