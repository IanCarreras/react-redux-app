import axios from 'axios'

export const FETCH_DECK_START = 'FETCH_DECK_START'
export const FETCH_DECK_SUCCESS = 'FETCH_DECK_SUCCESS'
export const FETCH_DECK_ERROR = 'FETCH_DECK_ERROR'

const getDeck = () => {
    return (dispatch) => {
        dispatch({ type: FETCH_DECK_START })

        axios.get('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
            .then(res => {
                dispatch({ type: FETCH_DECK_SUCCESS, payload: res.data })
            })
            .catch(err => {
                dispatch({ type: FETCH_DECK_ERROR, payload: err })
            })
    }
}; 

export const actionCreators = {
    getDeck,
}