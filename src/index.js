import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import Header from "./components/header/Header";
import About from "./components/about/About";
import Projects from "./components/projects/Projects";
import Footer from "./components/footer/Footer";

class AppComponent extends React.Component {

    state = {
        selectedItem: 'About'
    }

    bindNavItem(navItem) {
        document.querySelector(`#${navItem}`)
            .scrollIntoView({ behavior: "smooth" });

        this.setState({
            selectedItem: navItem
        })
    }

    render() {
        return (
            <div>
                <Header selectedItem={this.state.selectedItem} onNavItemClick={(navItem) => this.bindNavItem(navItem)} />
                <About />
                <Projects />
                <Footer />
            </div>
        );
    }
};

ReactDOM.render(
    <AppComponent />,
    document.querySelector("#root")
);