from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from mathematics import randomizer
from evaluate import start, proceed

app = FastAPI()

origins = ["*"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/question")
def read_root():
    p, a = randomizer()()
    return {"problem": p, "answer": a}


@app.post("/start")
def read_lol(body: dict):
    iid = start(**body)
    return {"iid": iid}


@app.post("/proceed")
def read_keul(body: dict):
    iid = body["iid"]
    should_continue, seconds, score = proceed(iid)
    if should_continue:
        p, a = randomizer()()
        return {"done": False, "problem": p, "answer": a}
    return {"done": True, "seconds": seconds, "score": score}
