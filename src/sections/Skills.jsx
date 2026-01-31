import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const skills = ["React", "Vite", "GSAP", "CSS3", "JavaScript", "HTML5", "Git", "UI/UX"];

const Skills = () => {
    const containerRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".skill-item", {
                opacity: 0,
                y: 30,
                stagger: 0.1,
                duration: 0.8,
                ease: "back.out(1.7)",
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 70%",
                }
            });
        }, containerRef);
        return () => ctx.revert();
    }, []);

    return (
        <div className="section-content" ref={containerRef}>
            <h2>Skills</h2>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginTop: '2rem' }}>
                {skills.map(skill => (
                    <span key={skill} className="skill-item" style={{
                        padding: '0.8rem 1.5rem',
                        border: '1px solid #333',
                        borderRadius: '50px',
                        backgroundColor: '#111',
                        color: '#fff',
                        fontSize: '1rem'
                    }}>
                        {skill}
                    </span>
                ))}
            </div>
        </div>
    );
};

export default Skills;
