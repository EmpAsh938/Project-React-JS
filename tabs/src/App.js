import { useEffect, useState } from "react";
import Title from "./Title";
import Tabs from "./Tabs";
import Content from "./Content";

const url = "https://course-api.com/react-tabs-project";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  const [index, setIndex] = useState(0);

  const fetchReq = async () => {
    const reponse = await fetch(url);
    const res = await reponse.json();
    setData(res);
    setIsLoading(false);
  };
  useEffect(async () => {
    fetchReq();
  }, []);
  if (isLoading) {
    return (
      <div className="loading">
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <main>
      <section>
        <Title />
        <article>
          <Tabs newdata={data} setIndex={setIndex} i={index} />
          <Content newdata={data[index]} />
        </article>
      </section>
    </main>
  );
}

export default App;
