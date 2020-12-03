import { useRef, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import sublinks from "./data";

function App() {
  // console.log(sublinks)
  const [openMenu, setOpenMenu] = useState(false);
  const [subMenu, setSubMenu] = useState(false);
  const [subMenuLinks, setSubMenuLinks] = useState({ page: "", links: [] });
  
  const refLinks = useRef(null)
  const refMenu = useRef(null)
  
  
  const displaySubMenu = e => {
    setSubMenu(true)
    const title = e.target.textContent
    let filter = sublinks.filter(link => link.page === title)
    // console.log(...filter)
    setSubMenuLinks({page: filter[0].page, links:[...filter[0].links]})
    // console.log(subMenuLinks)
    
    // let position = "col-2"
    // if (subMenuLinks.links.length === 3) {
      //   position = "col-3"
      //   console.log('3')
      // } else if (subMenuLinks.links.length >=4) {
        //   position = "col-4"
        //   console.log('4')
        // }


        
        const newArr = [...refLinks.current.childNodes]
        
        let link = newArr.find(link => link.textContent === title)
        
        const top = link.getBoundingClientRect().bottom + 5

        let width = refMenu.current.getBoundingClientRect().width

        const center = (link.getBoundingClientRect().left + link.getBoundingClientRect().right ) / 2 - (width) / 2
        
        
        // console.log(top)
        // console.log(center)

        refMenu.current.style.top = `${top}px`
        refMenu.current.style.left = `${center}px`
        
      }
      
      
      return (
        <div className="App">
      <div className="navbar">
        <div className="navbar-header">
          <div className="logo">
            <img src="/images/logo.svg" alt="stripe logo" />
          </div>
          <div className="btn-container-menu">
            <button
              onClick={() => setOpenMenu(!openMenu)}
              className="btn btn-menu"
            >
              <FaBars />
            </button>
          </div>
        </div>
        <div className="navbar-header-rest">
          <ul 
          ref={refLinks}
          className="navbar-items">
            {/* data  */}
            {sublinks.map((link, id) => {
              const { page } = link;
              return (
                <li
                  onMouseOver={displaySubMenu}
                  onMouseOut={() => setSubMenu(false)}
                  key={id}
                  className="items-link"
                >
                  {page}
                </li>
              );
            })}
          </ul>
          <div>
            <button className="btn btn-home btn-signin">Sign In</button>
          </div>
        </div>
      </div>
      <div className="hero">
        <div className="hero-side-left">
          <h1 className="side-head">
            Payments infrastructure for the internet
          </h1>
          <p className="side-text">
            Millions of companies of all sizes—from startups to Fortune 500s—use
            Stripe’s software and APIs to accept payments, send payouts, and
            manage their businesses online.
          </p>
          <button className="btn btn-home">Start Now</button>
        </div>
        <div className="hero-side-right">
          <img src="/images/phone.svg" alt="phone" />
        </div>
      </div>

      {/* menu */}
      <div className={openMenu ? "menu show-menu" : "menu"}>
        <div className="menu-container">
          <div className="menu-btn">
            <button
              onClick={() => setOpenMenu(false)}
              className="btn btn-close"
            >
              <FaTimes />
            </button>
          </div>
          <div className="menuSub">
            {sublinks.map((link, id) => {
              const { links, page } = link;
              return (
                <div className="menu-links" key={id}>
                  <h3 className="links-title">{page}</h3>
                  <ul className="links-container">
                    {links.map((item) => {
                      const { label, icon, url } = item;
                      return (
                        <li key={label} className="links-item">
                          <span className="links-icon">{icon}</span>
                          <a href={url} className="links-inner">
                            {label}
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* submenu */}
      <div 
      ref={refMenu}
      className={subMenu ? "submenu show-submenu" : "submenu"}>
          <div className="submenu-links">
            <h3 className="sublinks">{subMenuLinks.page}</h3>
            <ul className="sublinks-container">
              {subMenuLinks.links.map((item, id) => {
                const { label, icon, url } = item;
                return (
                  <li key={id} className="sub-links">
                    <span className="sub-icon">{icon}</span>
                    <a href={url}>{label}</a>
                  </li>
                );
              })}
            </ul>
          </div>
      </div>
    </div>
  );
}

export default App;
