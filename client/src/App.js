import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actionCreators } from './actions/actions'

import Table from './components/Table'

import './App.css';

const App = props => {
  const { actions, deck, isDeck } = props
  useEffect(() => {
    actions.getDeck()
  }, [actions])

  useEffect(() => {
    if(isDeck) actions.dealHand(deck.deck_id)
  }, [isDeck])

  if (!deck) return <h1>Loading...</h1>
    return (
    <div className="App">
      <Table />
    </div>
  );
}

const mapStateToProps = ({ deck, isLoading, error, player, computer, isDeck }) => {
  return { deck, isLoading, error, player, computer, isDeck }
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(actionCreators, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);