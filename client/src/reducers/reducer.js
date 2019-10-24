import { 
    FETCH_DECK_START,
    FETCH_DECK_SUCCESS,
    FETCH_DECK_ERROR
} from '../actions/actions'

const initialState = {
    deck: null,
    isLoading: false,
    error: null
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_DECK_START:
            return {
                ...state,
                isLoading: true
            }
        case FETCH_DECK_ERROR:
            return {
                ...state,
                error: action.payload,
                isLoading: false
            }
        case FETCH_DECK_SUCCESS:
            return {
                ...state,
                deck: action.payload,
                isLoading: false
            }
        default: 
            return state
    }
}

export default reducer