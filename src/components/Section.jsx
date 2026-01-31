import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

import Intro from '../sections/Intro';
import About from '../sections/About';
import Skills from '../sections/Skills';
import Projects from '../sections/Projects';
import Achievements from '../sections/Achievements';
import Contact from '../sections/Contact';

import '../styles/dots.css';
import '../styles/sections.css';

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const sectionList = [
    { id: 'intro', Component: Intro },
    { id: 'about', Component: About },
    { id: 'skills', Component: Skills },
    { id: 'projects', Component: Projects },
    { id: 'achievements', Component: Achievements },
    { id: 'contact', Component: Contact },
];

const Section = ({ activeSection, onSectionChange }) => {
    useEffect(() => {
        const triggers = [];

        sectionList.forEach(({ id }) => {
            const st = ScrollTrigger.create({
                trigger: `#${id}`,
                start: 'top 60%',
                end: 'bottom 60%',
                onEnter: () => onSectionChange(id),
                onEnterBack: () => onSectionChange(id),
            });
            triggers.push(st);
        });

        return () => {
            triggers.forEach(t => t.kill());
        };
    }, [onSectionChange]);

    const handleDotClick = (id) => {
        gsap.to(window, {
            duration: 1.2,
            scrollTo: { y: `#${id}` },
            ease: 'power2.inOut'
        });
    };

    return (
        <>
            <div className="dots-navigation">
                <div className="dots-container">
                    {sectionList.map(({ id }) => (
                        <div
                            key={id}
                            className={`dot ${activeSection === id ? 'active' : ''}`}
                            onClick={() => handleDotClick(id)}
                            title={id.charAt(0).toUpperCase() + id.slice(1)}
                        ></div>
                    ))}
                </div>
            </div>

            <main className="sections-wrapper">
                {sectionList.map(({ id, Component }) => (
                    <section id={id} key={id} className="section-container">
                        <Component />
                    </section>
                ))}
            </main>
        </>
    );
};

export default Section;
