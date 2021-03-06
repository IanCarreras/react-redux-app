import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actionCreators } from '../actions/actions'
import styled from 'styled-components'
import { cardValue } from '../assets/evaluate'

import card from '../assets/playing-card-back.jpg'

const Image = styled.img`
    height: 15rem;
    margin-left: 1rem;
`
const Back = styled.img`
    transform: rotate(90deg); 
    height: 10rem;
    position: relative;
    top: -2.5rem;
    left: -1rem;
    border-radius: .5rem;
`

const Computer = ({ deck, computer, player, actions, winner }) => {
    useEffect(() => {
        if(player.stand && computer.score < 17) actions.hit(deck.deck_id, 'computer') 
    }, [player.stand, computer.score])

    if (!computer.hand[0]) return <h1>Loading...</h1>

    if (player.stand || winner) return (
        <div>
            {
                computer.hand.map((card, indx) => {
                    return <Image
                            key={indx}
                            src={card.image} />
                })
            }
        </div>
    )

    return (
        <div>
            <Image src={computer.hand[0].image} />
            <Back src={card} alt='card face down' />
        </div>
    )
}

const mapStateToProps = ({ deck, computer, player, winner }) => {
    return { deck, computer, player, winner }
}
  
const mapDispatchToProps = (dispatch) => {
    return {
      actions: bindActionCreators(actionCreators, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Computer);