
import React, { useState } from 'react'
import './Navbar.css'
import MobileNav from '../MobileNav/MobileNav';

const Navbar = () => {

    const [openMenu, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen( !openMenu);
  };

    return (
        <>
        <MobileNav openMenu={openMenu} toggleMenu={toggleMenu} />
            <nav className="nav-wrapper">
                <div className="nav-content">
                    <img className='logo' src='logo512.png' />
                    <ul>
                        <li>
                            <a href="" className="menu-item">Home</a>
                        </li>
                        <li>
                            <a href="" className="menu-item">Skills</a>
                        </li>
                        <li>
                            <a href="" className="menu-item">Work Exparience</a>
                        </li>
                        <li>
                            <a href="" className="menu-item">Contact Me</a>
                        </li>

                        <button className="contact-btn" onClick={() => {
    const link = document.createElement('a');
    link.href = 'Raees Resume.pdf';  // Path to your PDF
    link.download = 'Raees_Resume.pdf';     // Download filename
    link.click();
  }}>Hire Me</button>
                    </ul>

                    <button className="menu-btn"  onClick={toggleMenu}  >

                        <span className={"material-symbols-outlined"}
                            style={{ fontSize: "1.8rem" }} >
                            {openMenu?"close":"Menu"}
                        </span>
                    </button>


                </div>

            </nav>
        </>
    )
}

export default Navbar
