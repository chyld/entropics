import { useState, useEffect } from "react";
import "./Question.css";

function Question({ random, done }) {
  const [html, setHtml] = useState();
  const [answer, setAnswer] = useState();

  const displayQuestion = async () => {
    await fetchQuestion();
    const guess = document.getElementById("guess");
    guess.value = "";
    guess.focus();
  };

  const fetchQuestion = async () => {
    const response = await fetch(`http://${process.env.REACT_APP_IP_ADDRESS}:8000/question`);
    const obj = await response.json();
    let html = window.MathJax.tex2svg(obj.problem);
    setHtml(html.outerHTML);
    setAnswer(obj.answer);
  };

  const checkAnswer = (event) => {
    const guess = event.target.value;
    if (guess === answer.toString() || guess === "skip") {
      done();
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
