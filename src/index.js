import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";

const rootNode = document.querySelector(`#root`);
const titles = [
  `Beautiful & luxurious apartment at great location`,
  `Wood and stone place`,
  `No name`,
  `Very big title by the best hotel`
];

ReactDOM.render(
    <App
      placesCount={329}
      titles={titles}
    />,
    rootNode
);
