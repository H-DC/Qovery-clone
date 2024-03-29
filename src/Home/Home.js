import React from 'react';
import Header from './Header/Header';
import Section from './Section/Section';
import Usage from './Usage/Usage';
import Grid from './Grid/Grid';
import Footer from './Footer/Footer';
import './Home.css';

function Home() {
    return (
        <div id="homeContainer">
            <Header />
            <Section />
            <Usage />
            <Grid />
            <Footer />
        </div>
    );
}

export default Home;
