import { 
    FETCH_DECK_START,
    FETCH_DECK_SUCCESS,
    FETCH_DECK_ERROR,
    DEAL_INITIAL_HAND,
    INITIAL_HAND_SUCCESS,
    INITIAL_HAND_ERROR
} from '../actions/actions'

const initialState = {
    deck: null,
    isDeck: false,
    isLoading: false,
    error: null,
    player: {
        score: 0,
        hand: []
    },
    computer: {
        score: 0,
        hand: []
    } 
}

const reducer = (state = initialState, action) => {
    const { payload } = action
    switch (action.type) {
        case FETCH_DECK_START:
            return {
                ...state,
                isLoading: true
            }
        case FETCH_DECK_ERROR:
            return {
                ...state,
                error: payload,
                isLoading: false
            }
        case FETCH_DECK_SUCCESS:
            return {
                ...state,
                deck: payload,
                isDeck: true,
                isLoading: false
            }
        case DEAL_INITIAL_HAND:
            return {
                ...state,
                isLoading: true
            }
        case INITIAL_HAND_ERROR:
            return {
                ...state,
                error: payload
            }
        case INITIAL_HAND_SUCCESS:
            return {
                ...state,
                deck: {
                    ...state.deck,
                    remaining: payload.remaining
                }, 
                player: {
                    score: parseInt(payload.cards[0].value, 10) + parseInt(payload.cards[2].value, 10),
                    hand: [payload.cards[0], payload.cards[2]]
                },
                computer: {
                    score: parseInt(payload.cards[1].value, 10) + parseInt(payload.cards[3].value, 10),
                    hand: [payload.cards[1], payload.cards[3]]
                } 
            }
        default: 
            return state
    }
}

export default reducer