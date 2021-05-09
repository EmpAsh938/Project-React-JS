import { useContext } from "react";
import Title from "./Title";
import Profile from "./Profile";
import { AppContext } from "./context";

const App = () => {
  const { isLoading } = useContext(AppContext);
  if (isLoading) {
    return (
      <div className="title-container">
        <h2>Loading...</h2>
        <div className="underline"></div>
      </div>
    );
  }
  return (
    <main>
      <section>
        <Title />
        <Profile />
      </section>
    </main>
  );
};

export default App;
