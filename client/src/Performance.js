import { useState } from "react";
import "./Performance.css";

function Performance() {
  const [html, setHtml] = useState();
  const [answer, setAnswer] = useState();

  async function start() {
    const name = document.getElementById("name").value;
    const amount = document.getElementById("amount").value;
    const response = await fetch("http://localhost:8000/start", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, amount }),
    });
    const { iid } = await response.json();
    localStorage.iid = iid;
  }

  async function proceed() {
    const iid = localStorage.iid;
    const response = await fetch("http://localhost:8000/proceed", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ iid }),
    });
    const { done, problem, answer, seconds, score } = await response.json();

    if (done) {
      console.log(seconds, score);
      localStorage.iid = null;
    } else {
      let html = window.MathJax.tex2svg(problem);
      setHtml(html.outerHTML);
      setAnswer(answer);
    }
  }

  const checkAnswer = (event) => {
    const guess = event.target.value;
    if (guess === answer.toString()) {
      event.target.value = "";
      proceed();
    }
  };

  return (
    <div className="Performance">
      <input id="name" type="text" />
      <input id="amount" type="text" />
      <button onClick={start}>register</button>
      <button onClick={proceed}>proceed</button>
      <div id="content">
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </div>
      <input id="guess" type="text" onChange={checkAnswer} />
    </div>
  );
}

export default Performance;
