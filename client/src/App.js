import "./App.css";
import { useState } from "react";

function App() {
  const [html, setHtml] = useState();
  const [answer, setAnswer] = useState();

  const fetchData = async () => {
    const response = await fetch("http://localhost:4444/");
    const obj = await response.json();
    let html = window.MathJax.tex2svg(obj.problem);
    setHtml(html.outerHTML);
    setAnswer(obj.answer);
    console.log(obj);
    document.getElementById("guess").focus();
  };

  const checkAnswer = (event) => {
    const guess = parseInt(event.target.value);
    if (guess === answer) {
      event.target.value = "";
      fetchData();
    }
  };

  return (
    <div className="App">
      <button id="start" onClick={fetchData}>
        Start
      </button>
      <div id="content">
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </div>
      <input id="guess" type="text" onChange={checkAnswer} />
    </div>
  );
}

export default App;
