import React from 'react'
import { DisplayDiv, Score, Button } from '../assets/styled-components'

const Display = ({player, computer, winner, actions, deckId}) => {
    return (
        <DisplayDiv>
            { winner && 
                <>
                    <Score>{winner}</Score>
                    <Button onClick={() => actions.dealHand(deckId)}>Next Hand</Button>
                </>
            }
            <Score>Computer: {computer.score}</Score>
            <Score>Player: {player.score}</Score>
        </DisplayDiv>
    )
}

export default Display