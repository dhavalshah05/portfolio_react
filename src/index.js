import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import Header from "./components/header/Header";

const App = () => {
    return (
        <Header />
    );
};

ReactDOM.render(
    <App />,
    document.querySelector("#root")
);