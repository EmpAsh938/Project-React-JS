import React, {useState} from 'react'
import './Rev.css'
const Rev = ({title, info}) => {
    const [show,setShow] = useState(false)
    const handleClick = () => {
        setShow(!show)
    }
    return (
        <div className='box'>
            <div className='box-text'>
            <h3>{title}</h3>
    <button onClick={handleClick}>{show ? '-' : '+'}</button>
            </div>
    {show && <p>{info}</p>}
        </div>
    )
}

export default Rev
