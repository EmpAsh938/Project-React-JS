import "./Quiz.css";
import { useGlobalContext } from "../context";

const Quiz = () => {
  const { quiz, index, loading, score, updateAnswer } = useGlobalContext();
  if (loading) {
    return (
      <div className="loader">
        <h1>Loading...</h1>
      </div>
    );
  }
  const { question, correct_answer, incorrect_answers } = quiz[index];
  const answers = [...incorrect_answers];
  const randomPosition = Math.floor(Math.random() * answers.length);
  answers.splice(randomPosition, 0, correct_answer);

  return (
    <section className="quiz">
      <article className="quiz__wrapper">
        <p className="quiz__score">score: {score}</p>
        <h2
          className="quiz__question"
          dangerouslySetInnerHTML={{ __html: question }}
        ></h2>
        <div className="quiz__answers">
          {answers.map((item) => {
            return (
              <p key={item} onClick={updateAnswer}>
                {item}
              </p>
            );
          })}
        </div>
        {/* {index === answers.length - 1 && (
          <button className="quiz__finish" onClick={handleNext}>
            Show Result
          </button>
        )} */}
      </article>
    </section>
  );
};

export default Quiz;
