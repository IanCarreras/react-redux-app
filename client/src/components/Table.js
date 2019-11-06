import React from 'react'
import Player from './Player'
import Computer from './Computer'
import styled from 'styled-components'

const CardTable = styled.div`
  
`
const PlayerHand = styled(Player)`
  margin-top: 5rem;
`
const ComputerHand = styled(Computer)`

`

const Table = ({actions}) => {
    return (
      <CardTable>
        <ComputerHand />
        <PlayerHand />
      </CardTable>
    );
}

export default Table