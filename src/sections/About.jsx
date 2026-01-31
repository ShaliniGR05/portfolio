import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const About = () => {
    const contentRef = useRef(null);

    useEffect(() => {
        // Animation logic
        gsap.fromTo(contentRef.current,
            { opacity: 0, x: -50 },
            {
                opacity: 1,
                x: 0,
                duration: 1,
                scrollTrigger: {
                    trigger: contentRef.current,
                    start: "top 75%",
                }
            }
        );
    }, []);

    return (
        <div className="section-content" ref={contentRef}>
            <h2>About Me</h2>
            <p>
                I am a passionate developer with a keen eye for detail.
                I specialize in building responsive, accessible, and performant web applications.
                With a strong foundation in modern JavaScript and React, I turn ideas into reality.
            </p>
        </div>
    );
};

export default About;
