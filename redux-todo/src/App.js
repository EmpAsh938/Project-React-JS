import { useEffect, useState } from "react";
import { connect } from "react-redux";
import {
  handleDelete,
  handleEdit,
  handleSubmit,
  handleClear,
  handleAlertTimer,
  getLocalStorage,
} from "./redux/actionCreator";

const Local_Storage_Key = "react-todo-app";
function App(props) {
  const {
    handleSubmit,
    handleEdit,
    handleDelete,
    handleClear,
    handleAlertTimer,
    getLocalStorage,
    edit,
    todos,
    alert,
  } = props;
  const [input, setInput] = useState("");

  // Getting Item from Local Storage
  useEffect(() => {
    const storageTodos = JSON.parse(localStorage.getItem(Local_Storage_Key));
    if (storageTodos) {
      getLocalStorage(storageTodos);
    }
  }, []);

  // Setting todos into Local Storage
  useEffect(() => {
    localStorage.setItem(Local_Storage_Key, JSON.stringify(todos));
  }, [todos]);

  // Alert Message Timer
  useEffect(() => {
    let startInterval = setTimeout(() => {
      handleAlertTimer();
    }, 2000);
    return () => {
      clearTimeout(startInterval);
    };
  }, [todos]);
  const handleForm = (e) => {
    e.preventDefault();
    handleSubmit(input);
    setInput("");
  };
  const handleEditFirst = (id) => {
    const newTodos = todos.filter((item) => item.id === id);
    setInput(newTodos[0].item);
    handleEdit(id);
  };
  return (
    <main>
      <section>
        {alert.prompt && <p className={`msg ${alert.msgColor}`}>{alert.msg}</p>}
        <h3>Grocery Bud</h3>
        <form onSubmit={handleForm}>
          <input
            type="text"
            placeholder="Add Todos..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button className="add-btn" onClick={handleForm}>
            {edit ? "Edit" : "Submit"}
          </button>
        </form>
        {todos.length < 1 || (
          <article>
            {todos.map((i) => {
              const { id, item } = i;
              return (
                <div className="todos" key={id}>
                  <p>{item}</p>
                  <div className="btn">
                    <button
                      className="edit-btn"
                      onClick={() => handleEditFirst(id)}
                    >
                      Edit
                    </button>
                    <button
                      className="delete-btn"
                      onClick={() => handleDelete(id)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              );
            })}
            <button className="delete-btn" onClick={handleClear}>
              Clear Items
            </button>
          </article>
        )}
      </section>
    </main>
  );
}

export const mapStateToProps = (state) => {
  return {
    todos: state.todos,
    edit: state.isEditing,
    alert: state.alert,
  };
};

export const mapDispatchToProps = (dispatch) => {
  return {
    handleEdit: (id) => dispatch(handleEdit(id)),
    handleDelete: (id) => dispatch(handleDelete(id)),
    handleSubmit: (input) => dispatch(handleSubmit(input)),
    handleClear: () => dispatch(handleClear()),
    handleAlertTimer: () => dispatch(handleAlertTimer()),
    getLocalStorage: (storageTodos) => dispatch(getLocalStorage(storageTodos)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
