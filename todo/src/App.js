import { useEffect, useState } from "react";

const Local_Storage_Key = "react-todo-app";
function App() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);
  const [edit, setEdit] = useState(false);
  const [editID, setEditID] = useState();
  const [alert, setAlert] = useState({ prompt: false, msg: "", msgColor: "" });

  // Getting Item from Local Storage
  useEffect(() => {
    const storageTodos = JSON.parse(localStorage.getItem(Local_Storage_Key));
    if (storageTodos) {
      setTodos(storageTodos);
    }
  }, []);

  // Setting todos into Local Storage
  useEffect(() => {
    localStorage.setItem(Local_Storage_Key, JSON.stringify(todos));
  }, [todos]);

  // Setting Todos and Editing
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input) {
      // for empty or unset input
      setAlert({
        ...alert,
        prompt: true,
        msg: "Input is empty!",
        msgColor: "red",
      });
    } else if (edit && input) {
      /// Editing
      setTodos(
        todos.map((i) => {
          if (i.id === editID) {
            return { ...i, item: input };
          }
          return i;
        })
      );
      setAlert({
        ...alert,
        prompt: true,
        msg: "Item Edited",
        msgColor: "green",
      });
      setEdit(false);
      setInput("");
    } else {
      // Normal Submit
      setTodos([
        ...todos,
        { id: new Date().getTime().toString(), item: input },
      ]);
      setInput("");
      setAlert({
        ...alert,
        prompt: true,
        msg: "Item Added",
        msgColor: "green",
      });
    }
  };

  // Getting id and value for editing
  const handleEdit = (id) => {
    const filteredItem = todos.filter((i) => i.id === id);
    setEdit(true);
    setEditID(filteredItem[0].id);
    setInput(filteredItem[0].item);
  };

  // Removing specific item
  const handleDelete = (id) => {
    const newTodos = todos.filter((i) => i.id !== id);
    setTodos(newTodos);
    setAlert({ ...alert, prompt: true, msg: "Item removed", msgColor: "red" });
  };

  // Alert Message Timer
  useEffect(() => {
    let startInterval = setInterval(() => {
      setAlert({ ...alert, prompt: false, msg: "", msgColor: "" });
    }, 2000);
    return () => {
      clearInterval(startInterval);
    };
  }, [alert]);
  return (
    <main>
      <section>
        {alert.prompt && <p className={`msg ${alert.msgColor}`}>{alert.msg}</p>}
        <h3>Grocery Bud</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Add Todos..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button className="add-btn" onClick={handleSubmit}>
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
                    <button className="edit-btn" onClick={() => handleEdit(id)}>
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
            <button
              className="delete-btn"
              onClick={() => {
                setAlert({
                  ...alert,
                  prompt: true,
                  msg: "All items removed!",
                  msgColor: "red",
                });
                setTodos([]);
              }}
            >
              Clear Items
            </button>
          </article>
        )}
      </section>
    </main>
  );
}

export default App;
