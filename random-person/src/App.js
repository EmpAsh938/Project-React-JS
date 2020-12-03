import { useEffect, useState } from "react";
import {
  FaEnvelopeOpen,
  FaUser,
  FaCalendarTimes,
  FaMap,
  FaPhone,
  FaLock,
} from "react-icons/fa";

const url ='https://randomuser.me/api'  

function App() {
  const [isLoading, setIsLoading] = useState(false)
  const [results, setResults] = useState(null)
  const [isClicked, setIsClicked] = useState(false)
  const [isData, setIsData] = useState(false)
  const [title, setTitle] = useState('name')

  const fetchReq = async () => {
    setIsLoading(true)
    try {
      const response = await fetch(url)
      const data = await response.json()
      // console.log(data.results[0])
      const person = data.results[0]
      const {first, last} = person.name
      const {email, phone} = person
      const {age} = person.dob
      const {number, name} = person.location.street
      const {password} = person.login
      const {large} = person.picture

      const newPerson = {
        name: `${first} ${last}`,
        email,
        age,
        street: `${number} ${name}`,
        phone,
        password,
        image: `${large}`
      }
      setResults(newPerson)
      setIsData(true)

    } catch (error) {
      console.log(error)
    }
    setIsLoading(false)
  }
  
  useEffect(() => {
    fetchReq()
  },[isClicked])


  const handleIcon = e => {
    if (e.target.classList.contains('icons')) {
      setTitle(e.target.dataset.label)
      // console.log(title)

    }
  }

  const handleClick = () => {
    setIsClicked(!isClicked)
    setTitle('name')
  }

  return (
    <main className='main-box'>
      {/* first block */}
      <section className='box-top'></section>
      {/* hero block */}
      <section className='box-mid'>
        <article className='mid-below'>
          <img
          className='mid-image' 
          src={isData ? `${results.image}` : "https://randomuser.me/api/portraits/men/83.jpg"} 
          alt="gentleman" 
          />
          <div className='mid-info'>
          <p className='mid-par'>My {isData ? `${title}` : 'name'} is</p>
          <h2 className='mid-head'>{isData ? `${results.[title]}` : 'Harrison Wells'}</h2>
          <div className='mid-icons' >
            <FaUser 
            data-label='name'
            className="icons"
            onMouseOver={handleIcon}
            />
            <FaEnvelopeOpen 
            data-label='email'
            className="icons"
            onMouseOver={handleIcon}
            />
            <FaCalendarTimes 
            data-label='age'
            className="icons"
            onMouseOver={handleIcon}
            />
            <FaMap 
            data-label='street'
            className="icons"
            onMouseOver={handleIcon}
            />
            <FaPhone 
            data-label='phone'
            className="icons"
            onMouseOver={handleIcon}
            />
            <FaLock 
            data-label='password'
            className="icons"
            onMouseOver={handleIcon}
            />
          </div>
          <button 
          onClick={handleClick}
          className='btn btn-toggle'>{isLoading ? "Loading...": "Random User"}</button>
          </div>
        </article>
      </section>
    </main>
  );
}

export default App;
