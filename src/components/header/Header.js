import React, {useState, useEffect} from "react";
import PropTypes from 'prop-types';

const Header = (props) => {
    const [topMargin, setTopMargin] = useState({});

    // For top margin
    useEffect(() => {
        const headerHeight = document.getElementById("nav-header").clientHeight;
        setTopMargin({marginTop: `${headerHeight}px`})
    }, []);

    return (
        <div id={"About"}>
            <section id={"nav-header"} className="bg-white fixed top-0 left-0 right-0 z-10">
                <div className={"py-[20px] md:py-[30px] max-w-[1100px] mx-auto md:pr-[20px]"}>
                    <ul className="flex flex-row justify-center md:justify-end gap-[15px] md:gap-[30px]">
                        <NavItem title={"About"}
                                 selected={props.selectedItem === 'About'}
                                 onClick={() => props.onNavItemClick('About')}/>
                        <NavItem title={"Projects"}
                                 selected={props.selectedItem === 'Projects'}
                                 onClick={() => props.onNavItemClick('Projects')}/>
                        <NavItem title={"Contact"}
                                 selected={props.selectedItem === 'Contact'}
                                 onClick={() => props.onNavItemClick('Contact')}/>
                    </ul>
                </div>
            </section>
            <section className={`section-container relative`} style={topMargin}>
                <div className="flex flex-col items-center md:items-start">
                    <h1 className="font-lato font-black text-center md:text-left text-[#132C47] text-[40px] md:text-[70px] leading-[1.10]">I'm<br/><span
                        className="text-[#616AF2]">Dhaval Shah</span></h1>
                    <p className="mt-[12px] font-lato font-regular text-[16px] md:text-[20px] text-[#132C47]/80">I
                        build
                        Android applications.</p>
                    <button
                        className="px-[17px] py-[6px] mt-[40px] font-lato font-regular text-[14px] text-[#8495A0]/80 border border-[#8495A0] rounded-[4px]">
                        Download CV
                    </button>
                </div>
                <img src="/images/background.svg"
                     alt={"background image"}
                     className="absolute bottom-0 right-0 object-cover w-[300px] lg:w-[350px] md:visible invisible -z-10"/>
            </section>
        </div>
    );
};

Header.propTypes = {
    selectedItem: PropTypes.string,
    onNavItemClick: PropTypes.func,
}

const NavItem = (props) => {
    const selectedClass = props.selected ? "nav-item__selected" : "nav-item__normal"
    return (
        <li className={`nav-item ${selectedClass}`} onClick={props.onClick}>
            {props.title}
        </li>
    );
}

NavItem.propTypes = {
    onClick: PropTypes.func,
    selected: PropTypes.bool,
    title: PropTypes.string
}

export default Header;
