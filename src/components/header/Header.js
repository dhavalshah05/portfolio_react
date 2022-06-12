import React from "react";
import PropTypes from 'prop-types';

class Header extends React.Component {
    render() {
        return (
            <div>
                <section className="section-container !py-[30px] md:!pr-[10px]">
                    <ul className="flex flex-row justify-center md:justify-end gap-[15px] md:gap-[30px]">
                        <NavItem title={"About"}
                                 selected={this.props.selectedItem === 'About'}
                                 onClick={() => this.props.onNavItemClick('About')} />
                        <NavItem title={"Projects"}
                                 selected={this.props.selectedItem === 'Projects'}
                                 onClick={() => this.props.onNavItemClick('Projects')} />
                        <NavItem title={"Contact"}
                                 selected={this.props.selectedItem === 'Contact'}
                                 onClick={() => this.props.onNavItemClick('Contact')}/>
                    </ul>
                </section>
                <section className="section-container relative">
                    <div className="flex flex-col items-center md:items-start">
                        <h1 className="font-lato font-black text-center md:text-left text-[#132C47] text-[40px] md:text-[70px] leading-[1.10]">I'm<br/><span
                            className="text-[#616AF2]">Dhaval Shah</span></h1>
                        <p className="mt-[12px] font-lato font-regular text-[16px] md:text-[20px] text-[#132C47]/80">I build
                            Android applications.</p>
                        <button
                            className="px-[17px] py-[6px] mt-[40px] font-lato font-regular text-[14px] text-[#8495A0]/80 border border-[#8495A0] rounded-[4px]">
                            Download CV
                        </button>
                    </div>
                    <img src="/images/background.svg"
                         className="absolute bottom-0 right-0 object-cover w-[300px] lg:w-[350px] md:visible invisible -z-10" />
                </section>
            </div>
        );
    }
}

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