import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const Contact = () => {
    const ref = useRef(null);

    useEffect(() => {
        gsap.fromTo(ref.current,
            { opacity: 0, y: 30 },
            {
                opacity: 1,
                y: 0,
                duration: 1,
                scrollTrigger: {
                    trigger: ref.current,
                    start: "top 80%"
                }
            }
        );
    }, []);

    return (
        <div className="section-content" ref={ref} style={{ textAlign: 'center' }}>
            <h2>Get In Touch</h2>
            <p style={{ margin: '2rem 0', fontSize: '1.2rem' }}>
                Interested in working together? Drop me a message.
            </p>
            <a href="mailto:hello@example.com" style={{
                display: 'inline-block',
                padding: '1rem 2rem',
                backgroundColor: '#fff',
                color: '#000',
                fontWeight: 'bold',
                borderRadius: '30px',
                marginTop: '1rem',
                transition: 'transform 0.2s'
            }}>
                Say Hello
            </a>
        </div>
    );
};

export default Contact;
