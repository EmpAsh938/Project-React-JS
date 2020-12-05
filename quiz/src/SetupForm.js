import React from "react";
import { useGlobalContext } from './context'

const SetupForm = () => {
  const { error, index, subject, level, handleChange, handleStart } = useGlobalContext()
  return (
    <>
      <section className="modal">
        <div className="modal-box">
            <h2 className="header">setup quiz</h2>
          <form className="modal-form" onSubmit={handleStart}>
            {/* number of questions */}
            <div className="form-input">
              <label htmlFor="questions" number of questions>
                Number of Questions
              </label>
              <input type="number" name="number" id="questions" min="1" max="50" value={index} onChange={handleChange}/>
            </div>
            {/* category */}
            <div className="form-input">
              <label htmlFor="category">category</label>
              <select name="category" id="category" value={subject} onChange={handleChange}>
                <option value="sports">sports</option>
                <option value="history">history</option>
                <option value="politics">politics</option>
              </select>
            </div>
            {/* difficulty */}
            <div className="form-input">
              <label htmlFor="difficulty">select difficulty</label>
              <select name="difficulty" id="difficulty" value={level} onChange={handleChange}>
                <option value="easy">easy</option>
                <option value="medium">medium</option>
                <option value="hard">hard</option>
              </select>
            </div>
            <div className="modal-btn">
              {error && (
                <p className="error">
                  can't generate questions, please try different options
                </p>
              )}
              <button className="btn btn-next" onClick={handleStart}>start</button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default SetupForm;
