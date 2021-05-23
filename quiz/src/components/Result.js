import "./Result.css";
import { useGlobalContext } from "../context";

const Result = () => {
  const { question, score, handleNext } = useGlobalContext();
  let comments = "";
  const scorePercentage = Math.floor(
    (score / (Number(question.amount) * 10)) * 100
  );
  if (scorePercentage === 100) {
    comments = "Excellent! You answered all questions correctly.";
  } else if (scorePercentage < 100 && scorePercentage > 50) {
    comments = "Awesome! You answered more than 50% correctlt.";
  } else if (scorePercentage < 50 && scorePercentage > 0) {
    comments = "Try harder next time.";
  } else {
    comments = "Failed to answer a single question.";
  }
  return (
    <article className="result">
      <div className="result__wrapper">
        <p>{comments}</p>
        <h2>Your scored {score}.</h2>
        <button onClick={handleNext}>Play Again</button>
      </div>
    </article>
  );
};

export default Result;
