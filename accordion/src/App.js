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
  );
}

export default App;
