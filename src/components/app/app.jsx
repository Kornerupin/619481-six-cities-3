import React from "react";
import Main from "../main/main";
import PropTypes from "prop-types";

const App = (props) => {
  return <Main
    placesCount={props.placesCount}
    titles={props.titles}
  />;
};

App.PropTypes = {
  placesCount: PropTypes.integer.isRequired,
  titles: PropTypes.array.isRequired
};

export default App;
