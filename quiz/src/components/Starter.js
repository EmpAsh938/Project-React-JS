import "./Starter.css";
import { useGlobalContext } from "../context";

const Starter = () => {
  const {
    toggleComponent,
    question,
    handleCategory,
    handleDifficulty,
    handleAmount,
    handleSubmitStarter,
  } = useGlobalContext();
  const { amount } = question;
  const { showQuiz } = toggleComponent;
  return (
    <section className={showQuiz ? "starter hide" : "starter"}>
      <form className="starter__form" onSubmit={handleSubmitStarter}>
        <h2 className="starter__title">Quiz</h2>
        <div className="starter__amount">
          <label htmlFor="">Number of questions:</label>
          <input
            type="number"
            name=""
            id=""
            value={amount}
            onChange={handleAmount}
            min="1"
            max="10"
          />
        </div>
        <div className="starter__category">
          <label htmlFor="">Choose category:</label>
          <select name="" id="" onChange={handleCategory}>
            <option value="mythology">mythology</option>
            <option value="sports">sports</option>
            <option value="geography">geography</option>
            <option value="history">history</option>
            <option value="politics">politics</option>
            <option value="art">art</option>
            <option value="celebrities">celebrities</option>
            <option value="animals">animals</option>
            <option value="vehicles">vehicles</option>
          </select>
        </div>
        <div className="starter__difficulty">
          <label htmlFor="">Choose difficulty level:</label>
          <select name="" id="" onChange={handleDifficulty}>
            <option value="easy">easy</option>
            <option value="medium">medium</option>
            <option value="hard">hard</option>
          </select>
        </div>
        <button className="starter__btn" onClick={handleSubmitStarter}>
          Start
        </button>
      </form>
    </section>
  );
};

export default Starter;
