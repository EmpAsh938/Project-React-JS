import React, { useState, useEffect } from 'react'
import './App.css';

const Local_STORAGE_KEY = 'react-todo-app'

function App() {
  const [edit, setEdit] = useState(false)
  const [editID, setEditID] = useState(null)
  const [todos, setTodos] = useState([])
  const [input, setInput] = useState('')
  const [alert, setAlert] = useState({
    show: false, message: '', type: ''
  })

  useEffect(() => {
    const storageTodos = JSON.parse(localStorage.getItem(Local_STORAGE_KEY))
    // console.log(storageTodos)
    if (storageTodos) {
      setTodos(storageTodos)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem(Local_STORAGE_KEY, JSON.stringify(todos))
  }, [todos])

  const handleSubmit = e => {
    e.preventDefault()

    if (!input) {
      setAlert({ show: true, message: 'Empty Field', type: 'danger' })
      // console.log('Fields Empty!')
    } else if (input && edit) {
      setTodos(todos.map(item => {
        if (item.id === editID) {
          setAlert({ show: true, message: 'Items Edited', type: 'active' })
          return { ...item, value: input }
        }
        return item
      }))
      setEdit(false)
      setEditID(null)
      setInput('')

    } else {
      setAlert({ show: true, message: 'Items Added', type: 'active' })
      setTodos([...todos, { value: input, id: new Date().getTime().toString(), complete: false }])
      setInput('')
    }

  }

  const handleLineClick = (id) => {
    setTodos(todos.map(item => {

      if (item.id === id) {
        return { ...item, complete: !item.complete }
      } return item
    })

    )
  }

  const handleEdit = id => {
    const filterItem = todos.filter(item => item.id === id)
    // console.log(filterItem)
    setEdit(true)
    setEditID(id)
    setInput(filterItem[0].value)
  }

  const handleRemove = id => {
    const filterItems = todos.filter(item => item.id !== id)
    setAlert({ show: true, message: 'Item Removed', type: 'danger' })
    setTodos(filterItems)
  }

  const handleClear = () => {
    setTodos([])
    setAlert({ show: true, message: 'Item Removed', type: 'danger' })
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setAlert({show: false, message: '', type: ''})
    }, 2000);
    return () => clearTimeout(timer)
  }, [todos])


  return (
    <div className="App">
      {alert && <p className={`msg ${alert.type}`}>{alert.message}</p>}
      <h1 className='header'>React Todo App</h1>
      <div className="main-container">
        <form className='form-container' onSubmit={handleSubmit}>
          <input
            onChange={e => setInput(e.target.value)}
            value={input}
            type="text"
          />
          <button className={edit ? 'btn editBtn' : 'btn'}>{edit ? 'Edit' : 'Submit'}</button>
        </form>
        {todos.length === 0 ||
          <div className='list-container'>
            {todos.map(item => {
              const { value, id, complete } = item
              return (
                <div className='list-items' key={id}>
                  <input
                    onChange={() => handleLineClick(id)}
                    type="checkbox"
                    checked={complete}
                  />
                  <p className={complete ? 'text strike' : 'text'}>{value}</p>
                  <div className='btn-container'>
                    <button
                      onClick={() => handleEdit(id)}
                      className='btn edit-btn'
                    >edit</button>
                    <button
                      onClick={() => handleRemove(id)}
                      className='btn remove-btn'
                    >remove</button>
                  </div>
                </div>
              )
            })}
            <button
              className='btn clear-btn'
              onClick={handleClear}
            >Clear All</button>
          </div>}
      </div>
    </div>
  );
}

export default App;
