import React from "react";
import Main from "../main/main";
import PropTypes from "prop-types";
import card from "../../propTypes/card";

const App = ({offers}) => {
  return <Main
    offers={offers}
  />;
};

App.propTypes = {
  offers: PropTypes.arrayOf(card).isRequired
};

export default App;
