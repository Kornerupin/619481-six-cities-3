import React from "react";
import Main from "../main/main";
import PropTypes from "prop-types";
import {card} from "../../propTypes/card";
import {town} from "../../propTypes/town";
import {connect} from "react-redux";
import {ActionTypes} from "../../reducer";

const App = ({offers, towns, currentTown, setTown}) => {
  return <Main
    offers={offers}
    towns={towns}
    setTown={setTown}
    currentTown={currentTown}
  />;
};

App.propTypes = {
  offers: PropTypes.arrayOf(card).isRequired,
  towns: PropTypes.arrayOf(town).isRequired,
};

const mapStateToProps = (state) => ({
  currentTown: state.currentTown,
  offers: state.offers,
});

const mapDispatchToProps = (dispatch) => ({
  setTown(value) {
    dispatch({type: ActionTypes.SET_TOWN, payload: value});
  },
});

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
