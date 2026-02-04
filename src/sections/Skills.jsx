import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../styles/skills.css';

gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
    const containerRef = useRef(null);

    useGSAP(() => {
        const cards = gsap.utils.toArray('.skill-card');

        gsap.fromTo(cards,
            { y: 30, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 0.8,
                stagger: 0.1,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top 80%',
                    toggleActions: 'play none none reverse'
                }
            }
        );
    }, { scope: containerRef });

    return (
        <div ref={containerRef} className="skills-section">
            <div className="skills-container">
                <div className="skills-grid">
                    {/* Header */}
                    <div className="skill-card area-header center-content" style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: '1rem 3rem' }}>
                        <h2 className="title-text">Technical Skills</h2>
                        {/* Decorative squares from reference image (optional but matches layout request) */}
                        <div style={{ display: 'flex', gap: '1rem' }}>
                            <div style={{ width: '40px', height: '40px', background: 'rgba(255,255,255,0.1)', borderRadius: '4px' }}></div>
                            <div style={{ width: '40px', height: '40px', background: 'rgba(255,255,255,0.1)', borderRadius: '4px' }}></div>
                            <div style={{ width: '40px', height: '40px', background: 'rgba(255,255,255,0.1)', borderRadius: '4px' }}></div>
                        </div>
                    </div>

                    {/* Left Column */}
                    <div className="skill-card area-left">
                        <div className="skill-list">
                            <span className="skill-item-text">Fast API</span>
                            <span className="skill-item-text">NumPy</span>
                            <span className="skill-item-text">Pandas</span>
                            <span className="skill-item-text">Scikit Learn</span>
                            <span className="skill-item-text">Flask</span>
                        </div>
                    </div>

                    {/* Middle Column Top */}
                    <div className="skill-card area-mid-top center-content">
                        <span className="big-text">Python</span>
                    </div>

                    {/* Middle Column Bottom */}
                    <div className="skill-card area-mid-bot center-content">
                        <span className="big-text">Java</span>
                    </div>

                    {/* Right Column */}
                    <div className="skill-card area-right">
                        <div className="skill-list">
                            <span className="skill-item-text">MERN</span>
                            <span className="skill-item-text">Git & GitHub</span>
                            <span className="skill-item-text">Oracle Database</span>
                            <span className="skill-item-text">PyTorch</span>
                            <span className="skill-item-text">HTML, CSS</span>
                        </div>
                    </div>

                    {/* Subjects Row */}
                    <div className="skill-card area-subjects">
                        <div className="horizontal-list">
                            <span className="subject-item">Machine Learning</span>
                            <span className="subject-item">DBMS</span>
                            <span className="subject-item">Computer Networks</span>
                            <span className="subject-item">Operating Systems</span>
                        </div>
                    </div>

                    {/* LeetCode Side */}
                    <div className="skill-card area-leetcode center-content">
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <span className="subject-item" style={{ marginBottom: '0.5rem' }}>LeetCode</span>
                            <span className="big-text" style={{ fontSize: '1.8rem' }}>150</span>
                        </div>
                    </div>

                    {/* Bottom Row */}
                    <div className="skill-card area-bottom">
                        <div className="horizontal-list">
                            <span className="subject-item">AI Agents</span>
                            <span className="subject-item">RAG</span>
                            <span className="subject-item">LangChain</span>
                            <span className="subject-item">Docker</span>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Skills;
