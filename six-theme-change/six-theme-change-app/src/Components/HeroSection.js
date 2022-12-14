import React,{useContext} from 'react';
import AppTheme from '../Color';
import ThemeContext from '../Context/context'

const HeroSection = function(){
    const theme = useContext(ThemeContext)[0];
    const currentTheme = AppTheme[theme];

    return(
        <div
        style={{
            color:`${currentTheme.color}`,
            backgroundColor:`${currentTheme.backgroundColor}`,
            border:`${currentTheme.border}`
        }}>
            <h1>Success is inevitable if I stay in present</h1>
        </div>
    );

}

export default HeroSection;