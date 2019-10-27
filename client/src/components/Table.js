import React from 'react'
import Player from './Player'
import Computer from './Computer'
import styled from 'styled-components'

const Wrapper = styled(Player)`
    margin-top: 5rem;
`

const Table = ({actions}) => {
    return (
      <div className="Table">
        <Computer />
        <Wrapper />
      </div>
    );
}

export default Table