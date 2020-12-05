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

export default App;
