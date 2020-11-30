import { useState } from "react";
import { questions } from "./data";

function App() {
  const [index, setIndex] = useState(0);
  // const [quiz, setQuiz] = useState(questions[index]);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false)


  
  const handleClick = (check) => {
    const position = index + 1
    setIndex(position)
    
    if (index === questions.length - 1) {
      setShowScore(true)
      
    }
    if (check) {
      setScore(score+1)
    }
    
    
    
    // console.log(index)
    // setQuiz(questions[index])
    // quiz.answerOptions.map((item, id) => {
      //   if (item.id === id)
      // })
    }
    
    const handleReset = () => {
      setShowScore(false)
      setScore(0)
      setIndex(0)
    }

  return (
    <div className="App">
          <div className={showScore ? "App__container show" : "App__container"}>
  {index > questions.length - 1 ? (<div><h2>You scored <span>{score}</span> out of <span>{questions.length}</span></h2><button onClick={handleReset}>Play Again</button></div>) :
            (<>
            <div className="App__container__box--one">
              <h1 className="App__container__box--one__header">
  Question: <span>{index+1}</span>/<span>{questions.length}</span>
              </h1>
              <h3 className="App__container__box--one__text">
                {questions[index].questionText}
              </h3>
            </div>
            <div className="App__container__box--two">
              <div className="App__container__box--two__options">
                {questions[index].answerOptions.map((item, id) =>
                  <div className="App__container__box--two__options__option" key={id}>
                  <p
                  onClick={() => handleClick(item.isCorrect)}
                  className="options-text circle"
                  >{item.answerText}
                  </p>
                </div>
                  )}
              </div>
            </div>
            </>)}
          </div>
    </div>
  );
}

export default App;
