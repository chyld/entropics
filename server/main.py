from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from mathematics import randomizer
from evaluate import register, results

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
def question():
    p, a = randomizer()()
    return {"problem": p, "answer": a}


@app.post("/register")
def registration(body: dict):
    iid = register(**body)
    return {"iid": iid}


@app.post("/score")
def score(body: dict):
    iid = body["iid"]
    seconds, result = results(iid)
    return {"seconds": seconds, "result": result}
