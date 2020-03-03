import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";

const rootNode = document.querySelector(`#root`);

ReactDOM.render(
    <App
      placesCount={329}
    />,
    rootNode
);
