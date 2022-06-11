import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import Header from "./components/header/Header";
import About from "./components/about/About";
import Projects from "./components/projects/Projects";
import Footer from "./components/footer/Footer";

const App = () => {
    return (
        <div>
            <Header />
            <About />
            <Projects />
            <Footer />
        </div>
    );
};

ReactDOM.render(
    <App />,
    document.querySelector("#root")
);