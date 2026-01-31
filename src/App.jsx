import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Section from './components/Section';
import './styles/index.css';

function App() {
    const [activeSection, setActiveSection] = useState('intro');

    return (
        <div className="app-container">
            <Navbar activeSection={activeSection} />
            <Section activeSection={activeSection} onSectionChange={setActiveSection} />
        </div>
    );
}

export default App;
