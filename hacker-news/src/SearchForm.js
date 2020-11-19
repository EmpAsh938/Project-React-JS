import React, { useRef, useEffect } from 'react'
import { useGlobalContext } from './context'


const SearchForm = () => {
    const { query, handleSearch } = useGlobalContext()

    
    // using useRef Hooks
    const refInput = useRef(null)
    useEffect(() => {
        // console.log(refInput.current)
        refInput.current.focus()
    }, [])


    return (
        <form className='form-container' onSubmit={(e) => e.preventDefault()}>
            <h1 className='form-container__header' >Search hacker news</h1>
            <input
                type='text'
                className='form-container__input'
                value={query}
                ref={refInput}
                onChange={(e) => handleSearch(e.target.value)}
            />
        </form>
    )
}

export default SearchForm
