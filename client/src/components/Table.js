import React from 'react'
import Player from './Player'
import Computer from './Computer'

const Table = ({actions}) => {
    return (
      <div className="Table">
        <Player />
        <Computer />
      </div>
    );
}

export default Table