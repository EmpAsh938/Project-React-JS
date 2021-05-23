import { useState } from "react";
export default function Query({ question, answer }) {
  const [toggleAnswer, setToggleAnswer] = useState(false);
  return (
    <div className="content-wrapper">
      <div className="question">
        <h3>{question}</h3>
        <button onClick={() => setToggleAnswer(!toggleAnswer)}>
          {toggleAnswer ? "-" : "+"}
        </button>
      </div>
      {toggleAnswer && (
        <div className="answer">
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
}
