import React, { useContext, useReducer, useEffect } from 'react'
import reducer from './reducer'

// importing action creators
import {
    SET_LOADING,
    SET_STORIES,
    REMOVE_STORY,
    HANDLE_PAGE,
    HANDLE_SEARCH
} from './actions'

const initialState = {
    isLoading: false,
    hits: [],
    nbPages: 0,
    page: 0,
    query: '',
}

const APIENDPOINT = 'https://hn.algolia.com/api/v1/search?'

const AppContext = React.createContext()

const AppProvider = ({children}) => {
    const [state,dispatch] = useReducer(reducer,initialState)

    const fetchReq = async (url) => {
        dispatch({type: SET_LOADING})
        try {
            const response = await fetch(url)
            const data = await response.json()
            // console.log(data)
            dispatch({
                type: SET_STORIES, 
                payload: {hits: data.hits, nbPages: data.nbPages}
            })
        } catch (error) {
            console.log(error)
            // dispatch({type: 'LOADING', payload: false})
        }
    }

    useEffect(() => {
        fetchReq(`${APIENDPOINT}query=${state.query}&page=${state.page}`)
    },[state.page, state.query])

    // Buttons
    const handleClick = (nature) => {
        dispatch({
            type: HANDLE_PAGE,
            payload: {behaviour: nature}
        })
    }

    const handleRemove = (id) => {
        dispatch({
            type: REMOVE_STORY,
            payload: id
        })
    }

    const handleSearch = (random) => {
        dispatch({
            type: HANDLE_SEARCH,
            payload: random
        })
    }

    return (
        <AppContext.Provider value={{
            ...state,
            handleClick,
            handleRemove,
            handleSearch,
        }}>
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(AppContext)
}

export  { AppProvider, AppContext }
