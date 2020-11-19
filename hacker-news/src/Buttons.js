import React from 'react'
import { useGlobalContext } from './context'

const Buttons = () => {
    const { handleClick, page, nbPages } = useGlobalContext()
    return (
        <div className='button-container'>
            <button
            className='button-container__btn' 
            onClick={ () => handleClick('DECREMENT')}
            >
                prev
            </button>
            <p className='button-container__text'> {page} of {nbPages}</p>
            <button
            className='button-container__btn' 
            onClick={ () => handleClick('INCREMENT')}
            >
                next
            </button>
        </div>
    )
}

export default Buttons
