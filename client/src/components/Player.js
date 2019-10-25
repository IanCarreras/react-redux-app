import React from 'react'
import { connect } from 'react-redux'

const Player = ({ player }) => {
    if (!player.hand[0]) return <h1>Loading...</h1>
    return (
        <div>
            <h2>{player.score}</h2>
            <img src={player.hand[0].image} />
            <img src={player.hand[1].image} />
        </div>
    )
}

const mapStateToProps = ({ player }) => {
    return { player }
  }
  
  export default connect(mapStateToProps)(Player);