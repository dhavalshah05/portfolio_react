import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import Header from "./components/header/Header";
import About from "./components/about/About";
import Projects from "./components/projects/Projects";
import Footer from "./components/footer/Footer";

const AppComponent = () => {
    const [selectedItem, setSelectedItem] = React.useState('About');

    const bindNavItem = (navItem) => {
        const elementToScroll = document.getElementById(navItem);
        const elementHeader = document.getElementById("nav-header");
        window.scroll({
            top: elementToScroll.offsetTop - elementHeader.clientHeight,
            behavior: "smooth"
        });
        setSelectedItem(navItem);
    };

    return (
        <div>
            <Header selectedItem={selectedItem} onNavItemClick={(navItem) => bindNavItem(navItem)} />
            <About />
            <Projects />
            <Footer />
        </div>
    );
}

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);
root.render(<AppComponent />)
