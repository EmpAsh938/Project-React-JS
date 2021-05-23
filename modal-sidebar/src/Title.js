import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { links, social } from "./data";

const Title = () => {
  const [menu, setMenu] = useState(false);
  return (
    <header>
      <nav>
        <button className="menu-btn" onClick={() => setMenu(true)}>
          <FaBars />
        </button>
      </nav>
      <aside className={menu && "active-menu"}>
        <div className="aside-menu">
          <h2 className="menu-header">
            Emp<span>Ash</span>
          </h2>
          <button className="close-btn" onClick={() => setMenu(false)}>
            <FaTimes />
          </button>
        </div>
        <ul className="links">
          {links.map((item) => {
            const { id, url, text, icon } = item;
            return (
              <li key={id}>
                <a href={url}>
                  {icon} {text}
                </a>
              </li>
            );
          })}
        </ul>
        <ul className="social">
          {social.map((item) => {
            const { id, url, icon } = item;
            return (
              <li key={id}>
                <a href={url}>{icon}</a>
              </li>
            );
          })}
        </ul>
      </aside>
    </header>
  );
};

export default Title;
