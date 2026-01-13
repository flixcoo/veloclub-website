import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Music from '../components/Music';
import Live from '../components/Live';
import Contact from '../components/Contact';

const Home = () => {
    return (
        <>
            <Hero/>
            <About/>
            <Live/>
            <Music/>
            <Contact/>
        </>
    );
};

export default Home;

