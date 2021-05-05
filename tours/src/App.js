import { useEffect, useState } from "react";
import Header from "./Header";
import Content from "./Content";

const url = "https://course-api.com/react-tours-project";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((req) => {
        return req.json();
      })
      .then((resp) => {
        setData([...resp]);
      });
    setIsLoading(false);
  }, [isLoading]);
  if (isLoading) {
    return (
      <div className="loading">
        <h1>Loading...</h1>
      </div>
    );
  }
  const handleButton = (id) => {
    const newData = data.filter((item) => item.id !== id);
    setData(newData);
  };
  return (
    <main>
      <section>
        <Header />
        {data.length < 1 ? (
          <button className="btn" onClick={() => setIsLoading(true)}>
            Refresh
          </button>
        ) : (
          <Content tourData={data} handleButton={handleButton} />
        )}
      </section>
    </main>
  );
}

export default App;
