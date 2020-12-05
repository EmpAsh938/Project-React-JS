import React from "react";
import { useGlobalContext } from './context'

const Modal = () => {
  const {handleScore, answerCorrectness} = useGlobalContext()
  return (
    <section className='final'>
      <article className='final-box'>
        <h2 className='header'>congrats!</h2>
  <p className='final-header'>You answered {answerCorrectness}% of questions correctly</p>
        <button 
        onClick={handleScore}
        className='btn btn-replay'
        >play again</button>
      </article>
    </section>
  );
};

export default Modal;
