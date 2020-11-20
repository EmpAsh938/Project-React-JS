import React, { useState } from 'react';
import './App.css';

// const getLocalStorage = () => {
//   let items = localStorage.getItem('items');
//   if (items) {
//     return (items = JSON.parse(localStorage.getItem('items')));
//   } else {
//     return []
//   }
// }

function App() {
  const [itemList, setItemList] = useState('')
  const [items, setItems] = useState([])
  const [alert, setAlert] = useState(false)
  const [isEditing, setIsEditing] = useState(false)


  // Submitting Form
  const handleSubmit = (e) => {
    e.preventDefault();
    if (itemList === '') {
      // alert will be displayed
      setAlert(true)
    }
    

    if (itemList.length >= 1) {
      setAlert(false)
      const list = {id: new Date().getTime().toString() ,title: itemList}
      setItems([...items, list])
    }
    setItemList('')
  }

  const removeBtn = (id) => {
    setItems(items.filter(val=>val.id !== id))
  }

  const editBtn = (id) => {
    const newItem = items.find(val=> id === val.id)
    setItemList(newItem.title)
    setIsEditing(true)
  }

  return (
    <div className="App">
      {alert && <p>Please input some text!!!!</p>}
      <h1>Grocery Bud</h1>
      <form>
        <input onChange={(e) => setItemList(e.target.value)} type='text' name='itemList' placeholder='e.g. eggs' value={itemList}/>
        <input onClick={handleSubmit} type='submit' value='submit' />
      </form>
        {items.map(val=>{
          const {id, title} = val
          return (
            <div key={id}>
            <p>{title}</p>
            <div>
              <button onClick={()=>editBtn(id)} type='button'>edit</button>
              <button onClick={()=>removeBtn(id)} type='button'>remove</button>
            </div>
            </div>
          )
        })}
      <button onClick={()=>setItems([])} type='button'>clear items</button>
    </div>
  );
}

export default App