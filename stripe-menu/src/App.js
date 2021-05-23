import { useState } from "react";
import Navbar from "./Navbar";
import Menu from "./Menu";
import Hero from "./Hero";

function App() {
  const [sideMenu, setSideMenu] = useState(false);

  return (
    <>
      <Navbar setSideMenu={setSideMenu} />
      <Menu sideMenu={sideMenu} setSideMenu={setSideMenu} />
      <Hero />
    </>
  );
}

export default App;
