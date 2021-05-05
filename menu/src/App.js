import { useState } from "react";
import Header from "./Header";
import Menu from "./Menu";
import { menu } from "./data";

function App() {
  const [newMenu, setNewMenu] = useState([...menu]);
  const handleClick = (param) => {
    if (param === "all") {
      setNewMenu(menu);
      return;
    }
    const filteredMenu = menu.filter((item) => item.category === param);
    setNewMenu(filteredMenu);
  };
  return (
    <main>
      <Header menu={menu} handleClick={handleClick} />
      <Menu menu={newMenu} />
    </main>
  );
}

export default App;
