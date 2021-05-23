<<<<<<< HEAD
import React from 'react';
import './App.css';
import Rev from './Rev'
import questions from './data'


function App() {
  return (
    <div className="App">
      <h1>questions and answers about login</h1>
      <div className='container'>
      {questions.map(value => {
        console.log(value)
        return (
          <Rev  key={value.id} {...value} />
        )
      })}
      </div>
    </div>
=======
import Title from "./Title";
import Content from "./Content";

function App() {
  return (
    <section>
      <Title />
      <Content />
    </section>
>>>>>>> f364450 (updated projects)
  );
}

export default App;
