import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actionCreators } from '../actions/actions'

import { Image, Button } from '../assets/styled-components'

const Player = ({ deck, player, actions, winner }) => {
    if (!player.hand[0]) return <h1>Loading...</h1>
    return (
        <div>
            {
                player.hand.map((card, indx) => {
                    return <Image
                            key={indx}
                            src={card.image} />
                })
            }
            <div>
                <Button disabled={player.stand || winner} onClick={() => actions.hit(deck.deck_id, 'player')}>Hit</Button>
                <Button disabled={player.stand || winner} onClick={() => actions.stand()}>Stand</Button>
            </div>
        </div>
    )
}

const mapStateToProps = ({ deck, player, winner }) => {
    return { deck, player, winner }
}
  
const mapDispatchToProps = (dispatch) => {
    return {
      actions: bindActionCreators(actionCreators, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Player);