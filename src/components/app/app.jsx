import React from "react";
import Main from "../main/main";
import PropTypes from "prop-types";

const App = ({placesCount, titles}) => {
  return <Main
    placesCount={placesCount}
    titles={titles}
  />;
};

App.propTypes = {
  placesCount: PropTypes.number.isRequired,
  titles: PropTypes.array.isRequired
};

export default App;
