import React from "react";
import { useGlobalContext } from './context'

const Questions = () => {
  const { questions, checkAnswer, score, total, count} = useGlobalContext()

  // console.log(questions.length)
  // const tempIndex = total
  const ques = questions[total].question
  const options = [...questions[total].incorrect_answers]
  const randomPos = Math.floor(Math.random() * options.length)
  // console.log(randomPos)
  options.splice(randomPos,0,questions[total].correct_answer)
  // console.log(options)


  return (
    <div className='question-cont'>
    <section className="question">
      <p className="check-answer">correct answers: {score}/{count}</p>
      <article className="question-box">
        <h2 className="header question-header" dangerouslySetInnerHTML={{__html: ques}}>
          {/* {ques} */}
        </h2>
        <div className="question-btn">
          {options.map((item,index) => {
            return (
              <button
              onClick={()=>checkAnswer(item)} 
              className="btn btn-options" 
              key={index}
              >{item}</button>
            )
          })}
        </div>
      </article>
      <button 
      onClick={checkAnswer}
      className="btn btn-next btn-question">next question</button>
    </section>
    </div>
  );
};

export default Questions;
