import "./Practice.css";
import Question from "../Question/Question";
import { useState } from "react";

function Practice() {
  const [random, setRandom] = useState();

  function done() {
    next();
  }

  function next() {
    setRandom(Math.random());
  }

  return (
    <div className="Practice">
      <div id="header">
        <h1>Practice</h1>
        <button onClick={next}>Next</button>
      </div>
      <Question random={random} done={done}></Question>
    </div>
  );
}

export default Practice;
