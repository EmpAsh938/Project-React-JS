<<<<<<< HEAD
import { useRef, useState } from "react";
import { FaHtml5, FaBars } from "react-icons/fa";
import { social, links } from "./data";

function App() {
  const [menuToggle, setMenuToggle] = useState(false)

  const refContainer = useRef(null)

  
  if (refContainer.current) {
    if (menuToggle) {
      refContainer.current.style.height = '250px' // hardcoded height (bad practice)
    } else {
      refContainer.current.style.height = '0px'
    }
  }
  

  return (
    <div className="App">
      <div className="app-nav">
        <div className="app-logo">
          <FaHtml5 />
          <button className='app-bars'>
          <FaBars 
          onClick={()=>setMenuToggle(!menuToggle)}
          />
          </button>
        </div>
        <ul className="app-links">
          {links.map((link) => {
            const { id, url, text } = link;
            return (
              <li className="links-list" key={id}>
                <a href={url}>{text}</a>
              </li>
            );
          })}
        </ul>
        <ul className="app-social">
          {social.map((item) => {
            const { id, url, icon } = item;
            return (
              <li className="social-list" key={id}>
                <a href={url}>{icon}</a>
              </li>
            );
          })}
        </ul>
      </div>
      <ul className='app-menu' ref={refContainer}>
      {links.map((link) => {
            const { id, url, icon, text } = link;
            return (
              <li className="menu-list" key={id}>
                <span>{icon}</span><a href={url}>{text}</a>
              </li>
            );
          })}
      </ul>
    </div>
=======
import { useState } from "react";

function App() {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <header>
      <nav>
        <div className="header-title">
          <h2>
            Emp<span>Ash</span>
          </h2>
          <button onClick={() => setToggleMenu(!toggleMenu)}>Menu</button>
        </div>
        <ul className={toggleMenu ? "list show" : "list"}>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Projects</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
          <li>
            <a href="#">Profile</a>
          </li>
        </ul>
      </nav>
    </header>
>>>>>>> f364450 (updated projects)
  );
}

export default App;
