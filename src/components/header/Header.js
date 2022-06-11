import React from "react";

class Header extends React.Component {
    render() {
        return (
            <section className="section-container !py-[30px] md:!pr-[10px]">
                <ul className="flex flex-row justify-center md:justify-end gap-[15px] md:gap-[30px]">
                    <NavItem title={"About"} selected={true}/>
                    <NavItem title={"Projects"} selected={false} />
                    <NavItem title={"Contact"} selected={false} />
                </ul>
            </section>
        );
    }
}

const NavItem = (props) => {
    const selectedClass = props.selected ? "nav-item__selected" : "nav-item__normal"
    return (
        <li className={`nav-item ${selectedClass}`}>
            {props.title}
        </li>
    );
}

export default Header;