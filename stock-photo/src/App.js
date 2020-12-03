import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import Photos from "./Photos";

const mainUrl = `https://api.unsplash.com/photos/`
const clientID = `?client_id=${process.env.REACT_APP_ACCESS_KEY}`
const searchUrl =  `https://api.unsplash.com/search/photos/`


function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [photos, setPhotos] = useState([])
  const [text, setText] = useState('')
  const [input, setInput] = useState('')
  const [page, setPage] = useState(1)

  let url;
  const urlPage = `&page=${page}`
  const urlQuery = `&query=${input}`

  if (input) {
    url = `${searchUrl}${clientID}${urlPage}${urlQuery}`
  } else {
    url = `${mainUrl}${clientID}${urlPage}`
  }
  const fetchReq = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setPhotos((oldPhotos) => {
        if (input) {
          return [...data.results]
        } else {
          return [...oldPhotos, ...data]
        }
      });
    } catch (error) {
      console.log(error);
      setIsLoading(false)
    }
  };

  useEffect(() => {
    fetchReq();
  }, [page,text]);

  const handleSubmit = e => {
    e.preventDefault()
    setText(input)
    setInput('')
  }
  
  useEffect(() => {
    const event = window.addEventListener('scroll', () => {
      // console.log(window.scrollY + window.innerHeight)
      // console.log(document.body.scrollHeight )
      if (window.scrollY + window.innerHeight >= document.body.scrollHeight - 2) {
        // console.log('Yah')
        setPage((oldPage) => {
         return oldPage + 1
        })
      }
    })
    return () => window.removeEventListener('scroll', event)
  }, [])
  return (
    <main className="main-box">
      <section className="box-container">
        <form className="form-box" onSubmit={handleSubmit}>
          <div className="form-search">
            <input
            value={input}
            onChange={(e)=>setInput(e.target.value)} 
            type="text" className="form-input" placeholder="Search" />
            <FaSearch  onClick={handleSubmit}/>
          </div>
        </form>
      </section>
      <section className="photo-container">
        <div className="photos-center">
          {photos.map((photo, index) => {
            return <Photos key={index} {...photo} />;
          })}
        </div>
        {isLoading && <h1 className="loader">Loading...</h1>}
      </section>
    </main>
  );
}

export default App;
