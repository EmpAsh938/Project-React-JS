import Starter from "./components/Starter";
import Quiz from "./components/Quiz";
import Result from "./components/Result";
import { useGlobalContext } from "./context";

const App = () => {
  const { toggleComponent } = useGlobalContext();

  return (
    <main>
      <Starter />
      {toggleComponent.showQuiz && <Quiz />}
      {toggleComponent.showModal && <Result />}
    </main>
  );
};

export default App;
