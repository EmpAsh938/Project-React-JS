import { useEffect, useState } from "react";

const url = 'https://api.github.com/users/john-smilga/followers?per_page=100'

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [person, setPerson] = useState([]);
  const [index, setIndex] = useState(1)
  const [newPerson, setNewPerson] = useState([])
  // const [isClicked, setIsClicked] = useState(false)

  const fetchReq = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(url);
      const data = await response.json();
      setIsLoading(false)
      setPerson([...data]);
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchReq();
  }, []);

  useEffect(() => {
    // console.log(index)
    if (index > 10) {
      setIndex(1)
    } else if (index < 1) {
      setIndex(10)
    }
    setNewPerson([...person.slice(index*10-10, index*10)])
  }, [person, index])

  const handleClick = e => {
    if (e.target.classList.contains('btn')) {
      if (e.target.classList.contains('btn-count')) {
        setIndex(parseInt(e.target.textContent))
      } else if (e.target.classList.contains('btn-next')) {
          setIndex(index+1)
      } else if (e.target.classList.contains('btn-prev')) {
        setIndex(index-1)
      }
    }
  }

  if (isLoading) {
    return (
    <section className="box-top">
        <article className="top-wrapper">
          <div className="top-head">
            <h1 className="head-title">
              Loading...
            </h1>
            <div className="underline"></div>
          </div>
        </article>
      </section>
    )
  }

  return (
    <main className="box">
      <section className="box-top">
        <article className="top-wrapper">
          <div className="top-head">
            <h1 className="head-title">
              Pagination
            </h1>
            <div className="underline"></div>
          </div>
        </article>
      </section>
      <section className="box-bottom">
        <article className="profile">
          <div className="profile-container">
            {newPerson.map((item) => {
              const { login, id, avatar_url, html_url } = item;
              return (
                <div className="profile-person" key={id}>
                  <img src={avatar_url} alt={login} />
                  <h4>{login}</h4>
                  <a href={html_url} target="_blank" className="btn btn-view" rel="noreferrer">view profile</a>
                </div>
              )
            })}
          </div>
          <div 
          onClick={handleClick}
          className="btn-container"
          >
            <button className="btn btn-move btn-prev">prev</button>
            <button className="btn btn-count">1</button>
            <button className="btn btn-count">2</button>
            <button className="btn btn-count">3</button>
            <button className="btn btn-count">4</button>
            <button className="btn btn-count">5</button>
            <button className="btn btn-count">6</button>
            <button className="btn btn-count">7</button>
            <button className="btn btn-count">8</button>
            <button className="btn btn-count">9</button>
            <button className="btn btn-count">10</button>
            <button className="btn btn-move btn-next">next</button>
          </div>
        </article>
      </section>
    </main>
  );
}

export default App;
