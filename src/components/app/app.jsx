import React from "react";
import Main from "../main/main";
import PropTypes from "prop-types";
import {card} from "../../propTypes/card";
import {connect} from "react-redux";

const App = ({currentOffers, currentTown, setTown}) => {

  return <Main
    currentOffers={currentOffers}
    currentTown={currentTown}
    setTown={setTown}
  />;
};

App.propTypes = {
  currentTown: PropTypes.number.isRequired,
  currentOffers: PropTypes.arrayOf(card).isRequired,
  setTown: PropTypes.func,
};

const mapStateToProps = (state) => ({
  currentTown: state.currentTown,
  currentOffers: state.currentOffers,
});

export {App};
export default connect(mapStateToProps, null)(App);
