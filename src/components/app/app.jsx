import React from "react";
import Main from "../main/main";
import PropTypes from "prop-types";

const App = ({titles}) => {
  return <Main
    titles={titles}
  />;
};

App.propTypes = {
  titles: PropTypes.array.isRequired
};

export default App;
