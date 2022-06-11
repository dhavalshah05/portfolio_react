import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import Header from "./components/header/Header";
import About from "./components/about/About";
import Projects from "./components/projects/Projects";

const App = () => {
    return (
        <div>
            <Header />
            <About />
            <Projects />
        </div>
    );
};

ReactDOM.render(
    <App />,
    document.querySelector("#root")
);