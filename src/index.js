import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

const App = () => {
    return <h1 className={"font-lato"}>Hello World</h1>
};

ReactDOM.render(
    <App />,
    document.querySelector("#root")
);