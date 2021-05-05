import { useState } from "react";
import text from "./data";

function App() {
  const [lines, setLines] = useState(1);
  const [lorem, setLorem] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedText = text.slice(0, lines);
    setLorem(updatedText);
  };
  return (
    <main>
      <section>
        <h2>Tired of Bored lorem ipsum?</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="lines">Paragraphs:</label>
          <input
            type="number"
            name="lines"
            id="lines"
            min="1"
            max="9"
            value={lines}
            onChange={(e) => setLines(e.target.value)}
          />
          <button onClick={handleSubmit}>Generate</button>
        </form>
        <div className="lorem-text">
          {lorem &&
            lorem.map((item, index) => {
              return <p key={index}>{item}</p>;
            })}
        </div>
      </section>
    </main>
  );
}

export default App;
