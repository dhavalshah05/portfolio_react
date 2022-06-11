import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import Header from "./components/header/Header";
import About from "./components/about/About";

const App = () => {
    return (
        <div>
            <Header />
            <About />
        </div>
    );
};

ReactDOM.render(
    <App />,
    document.querySelector("#root")
);