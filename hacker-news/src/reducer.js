import {
    SET_LOADING,
    SET_STORIES,
    REMOVE_STORY,
    HANDLE_PAGE,
    HANDLE_SEARCH,
} from './actions'

const reducer = (state, action) => {
    switch (action.type) {
        case SET_LOADING:
            return { ...state, isLoading: true }
            
        case SET_STORIES:
            return {
                ...state,
                isLoading: false,
                hits: action.payload.hits,
                nbPages: action.payload.nbPages,
            }
        
        case HANDLE_PAGE:
            if (action.payload.behaviour === 'INCREMENT') {
                let currentPage = state.page + 1
                if (currentPage > state.nbPages){
                    currentPage =  0
                }
                return {
                    ...state,
                    page: currentPage
                }
            }
            if (action.payload.behaviour === 'DECREMENT') {
                let currentPage = state.page - 1
                if (currentPage < 0 ) {
                    currentPage = 50
                }
                return {
                    ...state,
                    page: currentPage
                }
            }
            break
        case REMOVE_STORY:
            let newObj = state.hits.filter(item=>item.objectID !== action.payload)
            return {
                ...state,
                hits: newObj 
            }

        case HANDLE_SEARCH:
            return {
                ...state,
                query: action.payload
            }
        default:
            throw new Error('no matching type action')
    }
}


export default reducer