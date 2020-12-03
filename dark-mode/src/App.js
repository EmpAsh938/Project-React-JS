import { useEffect, useState } from 'react'
import articles from "./data";
import Article from "./Article";

// initiating LSK
const LOCAL_STORAGE_KEY =  "react-toggle-theme"

function App() {
  
  const [theme, setTheme] = useState()

  useEffect(() => {
    const storage = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if (storage) {
      setTheme(storage)
    }
  },[])

  useEffect(() => {
    document.documentElement.className = theme
  }, [theme])

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(theme))
  }, [theme])
  const handleClick = () => {
    if (theme === 'light-theme') {
      setTheme('dark-theme')
    } else if (!theme){
      setTheme('dark-theme')
    } else {
      setTheme('light-theme')
    }
  }
  return (
    <main>
      <nav>
        <div className="navbar">
          <h1 className='navbar-header'>Overreacted</h1>
          <button 
          onClick={handleClick}
          className='btn btn-toggle'
          >Toggle</button>
        </div>
      </nav>
      <section className='section-main'>
        {articles.map((article) => {
          return <Article key={article.id} {...article} />;
        })}
      </section>
    </main>
  );
}

export default App;
