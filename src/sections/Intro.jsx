import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const Intro = () => {
    const sectionRef = useRef(null);
    const textRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(textRef.current,
                { opacity: 0, y: 50 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1.5,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 60%", // animation starts when top of section hits 60% viewport
                        toggleActions: "play none none reverse"
                    }
                }
            );
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <div ref={sectionRef} className="section-content intro-section">
            <div ref={textRef}>
                <h2>Hello, I'm</h2>
                <h1 style={{ background: 'linear-gradient(to right, #fff, #666)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                    ShaliniGR
                </h1>
                <p>Senior Frontend Developer building premium web experiences.</p>
            </div>
        </div>
    );
};

export default Intro;
