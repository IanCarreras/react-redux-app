import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actionCreators } from './actions/actions'

import Table from './components/Table'

import './App.css';

const App = props => {
  const { actions, deck, isDeck, player, computer, winner } = props
  useEffect(() => {
    actions.getDeck()
  }, [actions])

  useEffect(() => {
    if(isDeck) actions.dealHand(deck.deck_id)
  }, [isDeck])

  useEffect(() => {
    if(player.score > 21) actions.endGame()
    if(player.stand && computer.score > 17) actions.endGame()
  }, [player.score, computer.score, player.stand])

  if (!deck) return <h1>Loading...</h1>
    return (
    <div className="App">
      <h1>Winner: {winner}</h1>
      <Table />
    </div>
  );
}

const mapStateToProps = ({ deck, isLoading, error, player, computer, isDeck, winner }) => {
  return { deck, isLoading, error, player, computer, isDeck, winner }
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(actionCreators, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);