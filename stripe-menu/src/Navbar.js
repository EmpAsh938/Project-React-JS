import { useRef, useState } from "react";
import { FaBars } from "react-icons/fa";
import sublinks from "./data";

const Navbar = ({ setSideMenu }) => {
  const [showSubMenu, setShowSubMenu] = useState(false);
  const [subMenuLinks, setSubMenuLinks] = useState([
    { label: "", icon: "", url: "" },
  ]);
  const refLinks = useRef(null);
  const refMenu = useRef(null);

  const handleSublinks = (e) => {
    setShowSubMenu(true);
    const navLinks = refLinks.current;
    const navMenu = refMenu.current;

    const newLinks = sublinks.filter(
      (item) => item.page === e.target.textContent.toLowerCase()
    );
    setSubMenuLinks(newLinks[0].links);
    const topPosition = navLinks.getBoundingClientRect().bottom;
    const leftPosition =
      e.target.getBoundingClientRect().left -
      e.target.getBoundingClientRect().width;
    navMenu.style.top = `${topPosition}px`;
    navMenu.style.left = `${leftPosition}px`;
    navMenu.style.height = `${4 * navLinks.getBoundingClientRect().height}px`;
  };
  return (
    <header>
      <nav>
        <div className="icon">
          <svg
            width="112"
            height="49"
            viewBox="0 0 112 49"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#filter0_d)">
              <path
                d="M21.6699 27.7441C21.6699 27.123 21.3594 26.6367 20.7383 26.2852C20.1289 25.9219 19.1445 25.5996 17.7852 25.3184C13.2617 24.3691 11 22.4473 11 19.5527C11 17.8652 11.6973 16.459 13.0918 15.334C14.498 14.1973 16.332 13.6289 18.5938 13.6289C21.0078 13.6289 22.9355 14.1973 24.377 15.334C25.8301 16.4707 26.5566 17.9473 26.5566 19.7637H21.4766C21.4766 19.0371 21.2422 18.4395 20.7734 17.9707C20.3047 17.4902 19.5723 17.25 18.5762 17.25C17.7207 17.25 17.0586 17.4434 16.5898 17.8301C16.1211 18.2168 15.8867 18.709 15.8867 19.3066C15.8867 19.8691 16.1504 20.3262 16.6777 20.6777C17.2168 21.0176 18.1191 21.3164 19.3848 21.5742C20.6504 21.8203 21.7168 22.1016 22.584 22.418C25.2676 23.4023 26.6094 25.1074 26.6094 27.5332C26.6094 29.2676 25.8652 30.6738 24.377 31.752C22.8887 32.8184 20.9668 33.3516 18.6113 33.3516C17.0176 33.3516 15.5996 33.0703 14.3574 32.5078C13.127 31.9336 12.1602 31.1543 11.457 30.1699C10.7539 29.1738 10.4023 28.1016 10.4023 26.9531H15.2188C15.2656 27.8555 15.5996 28.5469 16.2207 29.0273C16.8418 29.5078 17.6738 29.748 18.7168 29.748C19.6895 29.748 20.4219 29.5664 20.9141 29.2031C21.418 28.8281 21.6699 28.3418 21.6699 27.7441ZM35.9785 9.30469V13.9805H39.2305V17.707H35.9785V27.1992C35.9785 27.9023 36.1133 28.4062 36.3828 28.7109C36.6523 29.0156 37.168 29.168 37.9297 29.168C38.4922 29.168 38.9902 29.127 39.4238 29.0449V32.8945C38.4277 33.1992 37.4023 33.3516 36.3477 33.3516C32.7852 33.3516 30.9688 31.5527 30.8984 27.9551V17.707H28.1211V13.9805H30.8984V9.30469H35.9785ZM52.748 18.7441C52.0566 18.6504 51.4473 18.6035 50.9199 18.6035C48.998 18.6035 47.7383 19.2539 47.1406 20.5547V33H42.0605V13.9805H46.8594L47 16.248C48.0195 14.502 49.4316 13.6289 51.2363 13.6289C51.7988 13.6289 52.3262 13.7051 52.8184 13.8574L52.748 18.7441ZM60.5703 33H55.4727V13.9805H60.5703V33ZM55.1738 9.05859C55.1738 8.29688 55.4258 7.66992 55.9297 7.17773C56.4453 6.68555 57.1426 6.43945 58.0215 6.43945C58.8887 6.43945 59.5801 6.68555 60.0957 7.17773C60.6113 7.66992 60.8691 8.29688 60.8691 9.05859C60.8691 9.83203 60.6055 10.4648 60.0781 10.957C59.5625 11.4492 58.877 11.6953 58.0215 11.6953C57.166 11.6953 56.4746 11.4492 55.9473 10.957C55.4316 10.4648 55.1738 9.83203 55.1738 9.05859ZM81.8926 23.666C81.8926 26.5957 81.2246 28.9453 79.8887 30.7148C78.5645 32.4727 76.7715 33.3516 74.5098 33.3516C72.5879 33.3516 71.0352 32.6836 69.8516 31.3477V40.3125H64.7715V13.9805H69.4824L69.6582 15.8438C70.8887 14.3672 72.4941 13.6289 74.4746 13.6289C76.8184 13.6289 78.6406 14.4961 79.9414 16.2305C81.2422 17.9648 81.8926 20.3555 81.8926 23.4023V23.666ZM76.8125 23.2969C76.8125 21.5273 76.4961 20.1621 75.8633 19.2012C75.2422 18.2402 74.334 17.7598 73.1387 17.7598C71.5449 17.7598 70.4492 18.3691 69.8516 19.5879V27.375C70.4727 28.6289 71.5801 29.2559 73.1738 29.2559C75.5996 29.2559 76.8125 27.2695 76.8125 23.2969ZM93.8105 33.3516C91.0215 33.3516 88.748 32.4961 86.9902 30.7852C85.2441 29.0742 84.3711 26.7949 84.3711 23.9473V23.4551C84.3711 21.5449 84.7402 19.8398 85.4785 18.3398C86.2168 16.8281 87.2598 15.668 88.6074 14.8594C89.9668 14.0391 91.5137 13.6289 93.248 13.6289C95.8496 13.6289 97.8945 14.4492 99.3828 16.0898C100.883 17.7305 101.633 20.0566 101.633 23.0684V25.1426H89.5215C89.6855 26.3848 90.1777 27.3809 90.998 28.1309C91.8301 28.8809 92.8789 29.2559 94.1445 29.2559C96.1016 29.2559 97.6309 28.5469 98.7324 27.1289L101.229 29.9238C100.467 31.002 99.4355 31.8457 98.1348 32.4551C96.834 33.0527 95.3926 33.3516 93.8105 33.3516ZM93.2305 17.7422C92.2227 17.7422 91.4023 18.082 90.7695 18.7617C90.1484 19.4414 89.75 20.4141 89.5742 21.6797H96.6406V21.2754C96.6172 20.1504 96.3125 19.2832 95.7266 18.6738C95.1406 18.0527 94.3086 17.7422 93.2305 17.7422Z"
                fill="white"
              />
            </g>
            <defs>
              <filter
                id="filter0_d"
                x="6.40234"
                y="6.43945"
                width="99.2305"
                height="41.873"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                />
                <feOffset dy="4" />
                <feGaussianBlur stdDeviation="2" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>
        </div>
        <ul className="nav-links" ref={refLinks}>
          {sublinks.map((item) => {
            const { id, page } = item;
            return (
              <li
                key={id}
                onMouseEnter={handleSublinks}
                onMouseOut={() => setShowSubMenu(false)}
              >
                <p>{page}</p>
              </li>
            );
          })}
        </ul>

        {/* sublinks  */}

        <ul
          className={showSubMenu ? "sublinks show-sublinks" : "sublinks"}
          ref={refMenu}
        >
          {subMenuLinks.map((item) => {
            const { label, icon, url } = item;
            return (
              <li key={label}>
                <a href={url}>
                  {icon} {label}
                </a>
              </li>
            );
          })}
        </ul>

        <div className="nav-btn">
          <button className="btn btn-signin">Sign In</button>
          <button className="btn btn-menu" onClick={() => setSideMenu(true)}>
            <FaBars />
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
