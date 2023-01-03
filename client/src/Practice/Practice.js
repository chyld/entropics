import "./Practice.css";
import Question from "../Question/Question";
import { useState } from "react";

function Practice() {
  const [random, setRandom] = useState();

  function nextQuestion() {
    setRandom(Math.random());
  }

  return (
    <div className="Practice">
      <div id="header">
        <h1>Practice</h1>
        <button onClick={nextQuestion}>Next</button>
      </div>
      <Question random={random}></Question>
    </div>
  );
}

export default Practice;
