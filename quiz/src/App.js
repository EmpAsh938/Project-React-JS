<<<<<<< HEAD
import Modal from "./Modal";
import SetupForm from "./SetupForm";
import Loading from "./Loading";
import Questions from "./Questions";

import { useGlobalContext } from './context'


function App() {
  const {showQuestion, showResult} = useGlobalContext()
  return (
    <main>
      {/* setup */}
      <SetupForm />

      {/* loader */}
      <Loading />

      {/* Questions */}
     {showQuestion && <Questions />}
     
      {/* Result */}
      {showResult && <Modal />}
    </main>
  );
}
=======
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
>>>>>>> f364450 (updated projects)

export default App;
