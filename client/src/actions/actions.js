import axios from 'axios'

export const FETCH_DECK_START = 'FETCH_DECK_START'
export const FETCH_DECK_SUCCESS = 'FETCH_DECK_SUCCESS'
export const FETCH_DECK_ERROR = 'FETCH_DECK_ERROR'
export const DEAL_INITIAL_HAND = 'DEAL_INITIAL_HAND'
export const INITIAL_HAND_SUCCESS = 'INITIAL_HAND_SUCCESS'
export const INITIAL_HAND_ERROR = 'INITIAL_HAND_ERROR'

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

const dealHand = (deckId) => {
    return (dispatch) => {
        dispatch({ type: DEAL_INITIAL_HAND })

        axios.get(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=4`)
            .then(res => {
                dispatch({ type: INITIAL_HAND_SUCCESS, payload: res.data })
            })
            .catch(err => {
                dispatch({ type: INITIAL_HAND_ERROR, payload: err })
            })
    }
}

export const actionCreators = {
    getDeck,
    dealHand
}