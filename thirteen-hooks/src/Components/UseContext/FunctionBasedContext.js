import React,{useContext} from "react";
import {useTheme, useThemeUpdate} from "./ThemeProvider";
const FunctionBasedComponent = () => {
    const toggleTheme = useThemeUpdate();
    const darkTheme = useTheme();
    const themeStyles = (dark) =>  {
        return {
            color : dark ? "#fff" : "#ccc",
            backgroundColor :   !dark ? "#fff" : "#ccc"
        }
    }
    return(
        <>  
            <button onClick={toggleTheme}>Toggle Theme</button> 
            <h1 style={themeStyles(darkTheme)}>Saburi</h1>
        </>
    );
}

export default FunctionBasedComponent;