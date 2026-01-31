import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import '../styles/navbar.css';

gsap.registerPlugin(ScrollToPlugin);

const navItems = ['Intro', 'About', 'Skills', 'Projects', 'Achievements', 'Contact'];

const Navbar = ({ activeSection }) => {
    const handleNavClick = (sectionId) => {
        gsap.to(window, {
            duration: 1.2,
            scrollTo: { y: `#${sectionId}`, offsetY: 0 },
            ease: "power2.inOut"
        });
    };

    return (
        <nav className="navbar">
            <div className="navbar-brand">&lt;ShaliniGR/&gt;</div>
            <ul className="navbar-links">
                {navItems.map((item) => (
                    <li
                        key={item}
                        className={`nav-link ${activeSection === item.toLowerCase() ? 'active' : ''}`}
                        onClick={() => handleNavClick(item.toLowerCase())}
                    >
                        {item}
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Navbar;
