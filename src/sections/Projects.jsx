import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const projects = [
    { title: "Portfolio 2025", desc: "My personal portfolio built with React and GSAP." },
    { title: "E-Commerce Dashboard", desc: "A comprehensive dashboard for managing online stores." },
    { title: "Social Feeds", desc: "Real-time social media feed aggregator." },
    { title: "Task Manager", desc: "Productivity app with drag and drop features." }
];

const Projects = () => {
    const wrapperRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".project-card", {
                opacity: 0,
                y: 50,
                stagger: 0.2,
                duration: 1,
                scrollTrigger: {
                    trigger: wrapperRef.current,
                    start: "top 65%",
                }
            });
        }, wrapperRef);
        return () => ctx.revert();
    }, []);

    return (
        <div className="section-content" ref={wrapperRef}>
            <h2>Projects</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', marginTop: '2rem' }}>
                {projects.map((p, i) => (
                    <div key={i} className="project-card" style={{
                        padding: '2rem',
                        backgroundColor: '#0a0a0a',
                        border: '1px solid #222',
                        borderRadius: '12px',
                        transition: 'transform 0.3s'
                    }}>
                        <h3 style={{ marginBottom: '1rem', color: '#fff' }}>{p.title}</h3>
                        <p style={{ fontSize: '0.9rem', color: '#888' }}>{p.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;
