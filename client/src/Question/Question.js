import "./Question.css";
import { useState, useEffect } from "react";

function Question({ random }) {
  const [html, setHtml] = useState();
  const [answer, setAnswer] = useState();

  const displayQuestion = async () => {
    await fetchQuestion();
    const guess = document.getElementById("guess");
    guess.value = "";
    guess.focus();
  };

  const fetchQuestion = async () => {
    const response = await fetch("http://localhost:8000/");
    const obj = await response.json();
    let html = window.MathJax.tex2svg(obj.problem);
    setHtml(html.outerHTML);
    setAnswer(obj.answer);
  };

  const checkAnswer = (event) => {
    const guess = event.target.value;
    if (guess === answer.toString() || guess === "skip") {
      displayQuestion();
    }
  };

  useEffect(() => {
    displayQuestion();
  }, [random]);

  return (
    <div className="Question">
      <div id="content">
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </div>
      <input id="guess" type="text" onChange={checkAnswer} />
    </div>
  );
}

export default Question;
