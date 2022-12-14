import React,{useState,useContext} from "react";


export const ThemeContext = React.createContext();
export const ThemeUpdate = React.createContext();

export const useThemeUpdate = ()=> {
    return useContext(ThemeUpdate);
}

export const useTheme = ()=> {
    return useContext(ThemeContext);
}
const ThemeProvider = ({children}) => {
    const [dark,setDark] = useState(false);
    const toggleTheme = () => {
        setDark(prev => !prev);
    }
    return(
        <ThemeContext.Provider value={dark}>
           <ThemeUpdate.Provider value={toggleTheme}> 
                {children}
            </ThemeUpdate.Provider>
        </ThemeContext.Provider>
    );
}

export default ThemeProvider;