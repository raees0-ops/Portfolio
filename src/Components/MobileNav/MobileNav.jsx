import React from 'react'
import './MobileNav.css'
const MobileNav = ({ openMenu, toggleMenu }) => {
    return (
        <>
            <div className={`mobile-menu ${openMenu ? "active" : ""}`} onClick={toggleMenu}>
                <div className="mobile-menu-container">
                    <img className="logo" src="./assets/images/logo.svg" alt="Logo" />
                    <ul>
                        <li>
                            <a className="menu-item" href="#home">Home</a>
                        </li>
                        <li>
                            <a className="menu-item" href="#skills">Skills</a>
                        </li>
                        <li>
                            <a className="menu-item" href="#work-experience">Work Experience</a>
                        </li>
                        <li>
                            <a className="menu-item" href="#contact">Contact Me</a>
                        </li>

                       import React from 'react'



                    </ul>
                </div>
            </div>
        </>
    )
}

export default MobileNav
