import { useState } from "react";
function App() {
  const [counter, setCounter] = useState(0);
  return (
    <div className="App">
      <h1>Counter</h1>
      <p>{counter}</p>
      <div className="btn-container">
        <button
          className="btn-decrease"
          onClick={() => setCounter(counter - 1)}
        >
          Decrease
        </button>
        <button className="btn-reset" onClick={() => setCounter(0)}>
          Reset
        </button>
        <button
          className="btn-increase"
          onClick={() => setCounter(counter + 1)}
        >
          Increase
        </button>
      </div>
    </div>
  );
}

export default App;
