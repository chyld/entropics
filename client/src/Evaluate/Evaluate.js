import { useState } from "react";
import Registration from "../Registration/Registration";
import Question from "../Question/Question";
import Score from "../Score/Score";

function Evaluate() {
  const [iid, setIid] = useState();
  const [name, setName] = useState();
  const [amount, setAmount] = useState(0);
  const [count, setCount] = useState(1);
  const [random, setRandom] = useState(Math.PI);
  const [seconds, setSeconds] = useState(0);
  const [result, setResult] = useState(0);
  const [finished, setFinished] = useState(false);

  function registrationComplete(iid, name, amount) {
    setIid(iid);
    setName(name);
    setAmount(amount);
  }

  function next() {
    setCount(count + 1);
    setRandom(Math.random());
  }

  function done() {
    if (count !== amount) next();
    else score();
  }

  async function score() {
    const response = await fetch("http://localhost:8000/score", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ iid }),
    });

    const { seconds, result } = await response.json();
    setSeconds(seconds);
    setResult(result);
    setFinished(true);
  }

  return (
    <div>
      <div>evaluate</div>

      <div>
        {iid} <br /> {name} <br /> {amount} <br /> {count}
      </div>

      {!iid && (
        <Registration
          registrationComplete={registrationComplete}
        ></Registration>
      )}

      {iid && !finished && <Question random={random} done={done}></Question>}

      {finished && <Score seconds={seconds} result={result}></Score>}
    </div>
  );
}

export default Evaluate;
