import Title from "./Title";
import Cart from "./Cart";
import { useContext } from "react";
import { AppContext } from "./context";

function App() {
  const { isLoading } = useContext(AppContext);
  if (isLoading) {
    return (
      <div className="loader">
        <h1>Loading...</h1>
      </div>
    );
  }
  return (
    <section>
      <Title />
      <Cart />
    </section>
  );
}

export default App;
