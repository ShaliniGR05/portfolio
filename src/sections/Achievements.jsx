import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const Achievements = () => {
    const containerRef = useRef(null);

    useEffect(() => {
        gsap.fromTo(containerRef.current.children,
            { opacity: 0, scale: 0.9 },
            {
                opacity: 1,
                scale: 1,
                stagger: 0.2,
                duration: 1,
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 70%"
                }
            }
        );
    }, []);

    return (
        <div className="section-content">
            <h2>Achievements</h2>
            <ul ref={containerRef} style={{ marginTop: '2rem', paddingLeft: '1rem' }}>
                <li style={{ marginBottom: '1.5rem', borderLeft: '2px solid #fff', paddingLeft: '1rem' }}>
                    <h4 style={{ color: '#fff' }}>Best Frontend Design 2024</h4>
                    <p style={{ fontSize: '0.9rem', color: '#999' }}>Awarded by WebTech Summit.</p>
                </li>
                <li style={{ marginBottom: '1.5rem', borderLeft: '2px solid #fff', paddingLeft: '1rem' }}>
                    <h4 style={{ color: '#fff' }}>Hackathon Winner</h4>
                    <p style={{ fontSize: '0.9rem', color: '#999' }}>First place in Global AI Hackathon.</p>
                </li>
                <li style={{ marginBottom: '1.5rem', borderLeft: '2px solid #fff', paddingLeft: '1rem' }}>
                    <h4 style={{ color: '#fff' }}>Open Source Contributor</h4>
                    <p style={{ fontSize: '0.9rem', color: '#999' }}>Active maintenance of 3 major libraries.</p>
                </li>
            </ul>
        </div>
    );
};

export default Achievements;
