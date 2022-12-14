import React from 'react';
import NavBar from './NavBar.js';
import HeroSection from './HeroSection';
import AppSection from './AppSection';
import CardSection from './CardSection';
import Footer from './Footer';

const App = function(){
    return(
        <div>
            <NavBar/>
            <HeroSection/>
            <AppSection/>
            <CardSection/>
            <Footer/>
        </div>
    );
}


export default App;
