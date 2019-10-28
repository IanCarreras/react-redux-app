import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actionCreators } from '../actions/actions'
import styled from 'styled-components'

const Image = styled.img`
    height: 15rem;
    margin-left: 1rem;
`
const Button = styled.button`
    margin: 1rem 0 0 1rem;
    height: 3rem;
    width: 5rem;
    border-radius: .3rem;
    font-size: 1rem;
    :hover {
        cursor: pointer;
        background: black;
        color: white;
    }
`

const Player = ({ deck, player, actions }) => {
    if (!player.hand[0]) return <h1>Loading...</h1>
    return (
        <div>
            <h2>Player: {player.score}</h2>
            {
                player.hand.map((card, indx) => {
                    return <Image
                            key={indx}
                            src={card.image} />
                })
            }
            <div>
                <Button disabled={player.stand} onClick={() => actions.hit(deck.deck_id, 'player')}>Hit</Button>
                <Button onClick={() => actions.stand()}>Stand</Button>
            </div>
        </div>
    )
}

const mapStateToProps = ({ deck, player }) => {
    return { deck, player }
}
  
const mapDispatchToProps = (dispatch) => {
    return {
      actions: bindActionCreators(actionCreators, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Player);