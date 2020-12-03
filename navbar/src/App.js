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
  );
}

export default App;
