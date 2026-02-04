import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import '../styles/intro.css';

const Intro = () => {
    const containerRef = useRef(null);

    useGSAP(() => {
        gsap.fromTo(
            ".intro-text-line",
            { x: 80, opacity: 0 },
            {
                x: 0,
                opacity: 1,
                duration: 1.5,
                stagger: 0.2,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: ".intro-section",
                    start: "top 80%",
                    toggleActions: "play none none reset"
                }
            }
        );
    }, { scope: containerRef });


    return (
        <div ref={containerRef} className="intro-section">
            <div className="intro-content">
                <h1 className="intro-text-line intro-highlight">Hii There!</h1>
                <p className="intro-text-line">A noob IT student</p>
                <p className="intro-text-line">Working on projects and hates coding</p>
                <p className="intro-text-line">Just crawling with stuffs!</p>
            </div>
        </div>
    );
};

export default Intro;
