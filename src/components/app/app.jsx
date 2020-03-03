import React from "react";
import Main from "../main/main";

const App = (props) => {
  return <Main
    // eslint-disable-next-line react/prop-types
    placesCount = {props.placesCount}
  />;
};

export default App;
