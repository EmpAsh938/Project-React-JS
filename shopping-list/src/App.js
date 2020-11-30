import { useEffect, useState } from 'react';
import { FaPlus, FaLessThan, FaGreaterThan, FaCheckCircle, FaCircle } from 'react-icons/fa'

function App() {
  const [input, setInput] = useState('')
  const [items, setItems] = useState([])
  const [totalQuantity, setTotalQuantity] = useState(0)


  useEffect(() => {
    const totalItems = () => {
      const total = items.reduce((acc, next) => {
        return next.quantity + acc
      },0)
      setTotalQuantity(total) 
    }
    totalItems()
  }, [items,totalQuantity])

  const handleSubmit = e => {
    e.preventDefault()

    if (input) {
      setItems([...items, {value:input.trim(), id:new Date().getTime().toString(), quantity: 1, isCompleted:false}])
      setInput('')
    }
  }
// Checking CheckBoxes
  const handleCheck = id  => {
    setItems(items.map(item => {
      if (item.id === id) {
        return { ...item, isCompleted: !item.isCompleted}
      } return item
    }))
  }

  const incQuantity = id => {
    setItems(items.map(item => {
      if (item.id === id) {
        // console.log('clicked')
        return {...item, quantity: item.quantity+1}
      } return item
    }))
  }
  
  const decQuantity = id => {
    let temp = items.map(item => {
      if (item.id === id) {
        // console.log('clicked')
        return {...item, quantity: item.quantity-1}
      } return item
    }).filter(item => item.quantity !==0)
    // console.log(temp)
    setItems(temp)
  }

  
  return (
    <div className="App">
      <div className="App-container">
        <form onSubmit={handleSubmit}>
          <input 
          type="text"
          onChange={(e)=>setInput(e.target.value)}
          value={input} 
          placeholder='Add items...'
          />
          {/* <button>+</button> */}
          <FaPlus onClick={handleSubmit}/>
        </form>
        <div className='items-container'>
          {/* items-list goes here */}
          {items.map(item => {
            const {value, id, isCompleted, quantity} = item
            return (
              <div className='items-list' key={id}>
                <div 
                className='check'
                onClick={()=>handleCheck(id)} 
                >
                {isCompleted ? <FaCheckCircle />:<FaCircle />}
                </div>
                <p className={isCompleted ? 'strike text' : 'text'}>{value}</p>
                <div className='btn-container'>
                  <FaLessThan onClick={()=>decQuantity(id)}/>
                  <span>{quantity}</span>
                  <FaGreaterThan onClick={()=>incQuantity(id)}/>
                </div>
              </div>
            )
          })}
        </div>
        {items.length === 0 || <div className='total-items'>
          <p>Total Size: <span>{totalQuantity}</span></p>
        </div>}
      </div>
    </div>
  );
}

export default App;
