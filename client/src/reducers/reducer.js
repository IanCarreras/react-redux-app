import { handValue, winner } from '../assets/evaluate'
import { 
    FETCH_DECK_START,
    FETCH_DECK_SUCCESS,
    FETCH_DECK_ERROR,
    DEAL_INITIAL_HAND,
    INITIAL_HAND_SUCCESS,
    INITIAL_HAND_ERROR,
    PLAYER_HIT_SUCCESS,
    PLAYER_HIT_ERROR,
    PLAYER_STAND,
    COMPUTER_HIT_SUCCESS,
    COMPUTER_HIT_ERROR,
    END_GAME
} from '../actions/actions'

const initialState = {
    deck: null,
    isDeck: false,
    isLoading: false,
    error: null,
    winner: null,
    player: {
        stand: false,
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
                winner: null,
                deck: {
                    ...state.deck,
                    remaining: payload.remaining
                }, 
                player: {
                    stand: false,
                    score: handValue([payload.cards[0], payload.cards[2]]),
                    hand: [payload.cards[0], payload.cards[2]]
                },
                computer: {
                    score: handValue([payload.cards[1], payload.cards[3]]),
                    hand: [payload.cards[1], payload.cards[3]]
                } 
            }


        case PLAYER_HIT_SUCCESS:
            return {
                ...state,
                player: {
                    ...state.player,
                    score: handValue([...state.player.hand, payload.cards[0]]),
                    hand: [...state.player.hand, payload.cards[0]]
                }
            }
        case PLAYER_HIT_ERROR:
            return {
                ...state,
                error: payload
            }


        case PLAYER_STAND:
            return {
                ...state,
                player: {
                    ...state.player,
                    stand: true
                }
            }


        case COMPUTER_HIT_ERROR:
            return {
                ...state,
                error: payload
            }
        case COMPUTER_HIT_SUCCESS:
            return {
                ...state,
                computer: {
                    ...state.computer,
                    score: handValue([...state.computer.hand, payload.cards[0]]),
                    hand: [...state.computer.hand, payload.cards[0]]
                }
            }
        case END_GAME:
            return {
                ...state,
                winner: winner(state.player.score, state.computer.score) 
            }
        default: 
            return state
    }
}

export default reducer