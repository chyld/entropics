import "./Score.css";

function Score({ seconds, result, amount }) {
  return (
    <div className="Score">
      <div>{seconds} seconds</div>
      <div>{amount} questions</div>
      <div>{result} seconds/question</div>
    </div>
  );
}

export default Score;
