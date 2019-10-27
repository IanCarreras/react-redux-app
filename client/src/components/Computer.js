import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { cardValue } from '../assets/evaluate'

import card from '../assets/playing-card-back.jpg'

const Image = styled.img`
    height: 15rem;
`
const Back = styled.img`
    transform: rotate(90deg); 
    height: 10rem;
`

const Computer = ({ computer }) => {
    if (!computer.hand[0]) return <h1>Loading...</h1>
    return (
        <div>
            <h2>Computer score: {cardValue(computer.hand[0].value)}</h2>
            <Image src={computer.hand[0].image} />
            <Back src={card} alt='card face down' />
        </div>
    )
}

const mapStateToProps = ({ computer }) => {
    return { computer }
  }
  
  export default connect(mapStateToProps)(Computer);