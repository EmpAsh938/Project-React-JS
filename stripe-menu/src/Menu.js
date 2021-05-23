import React from "react";
import { FaTimes } from "react-icons/fa";
import sublinks from "./data";

const Menu = ({ sideMenu, setSideMenu }) => {
  return (
    <aside
      className={sideMenu ? "aside-container show-menu" : "aside-container"}
    >
      <article className="aside-menu">
        <button className="btn-close" onClick={() => setSideMenu(false)}>
          <FaTimes />
        </button>
        <div className="aside-links">
          {sublinks.map((item) => {
            const { id, page, links } = item;
            return (
              <div key={id}>
                <h4>{page}</h4>
                <ul>
                  {" "}
                  {links.map((i) => {
                    const { label, icon, url } = i;
                    return (
                      <li key={label}>
                        <a href={url}>
                          {icon} {label}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>
      </article>
    </aside>
  );
};

export default Menu;
