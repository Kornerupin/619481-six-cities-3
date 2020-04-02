import React from "react";
import Main from "../main/main";
import PropTypes from "prop-types";
import {card} from "../../propTypes/card";
import {connect} from "react-redux";
import {ActionTypes} from "../../reducer";

const App = ({currentOffers, currentTown, setTown}) => {

  return <Main
    currentOffers={currentOffers}
    currentTown={currentTown}
    setTown={setTown}
  />;
};

App.propTypes = {
  currentOffers: PropTypes.arrayOf(card).isRequired,
};

const mapStateToProps = (state) => ({
  currentTown: state.currentTown,
  currentOffers: state.currentOffers,
});

const mapDispatchToProps = (dispatch) => ({
  setTown(value) {
    dispatch({type: ActionTypes.SET_TOWN, payload: value});
  },
});

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
