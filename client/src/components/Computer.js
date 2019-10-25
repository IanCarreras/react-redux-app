import React from 'react'
import { connect } from 'react-redux'

const Computer = ({ computer }) => {
    if (!computer.hand[0]) return <h1>Loading...</h1>
    return (
        <div>
            <h2>{computer.score}</h2>
            <img src={computer.hand[0].image} />
            <img src={computer.hand[1].image} />
        </div>
    )
}

const mapStateToProps = ({ computer }) => {
    return { computer }
  }
  
  export default connect(mapStateToProps)(Computer);