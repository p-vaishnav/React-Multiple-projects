import React,{useContext} from 'react';
import ThemeContext from '../Context/context';


const ThemeToggler = function(){
    const [themeMode,setThemeMode] = useContext(ThemeContext);
    return(
        <div onClick={
            ()=>{
                setThemeMode(themeMode === 'light' ? 'dark' : 'light');
            }
        }>
            <button>{themeMode==='light' ?'Turn Off':'Lights On'}</button>
        </div>
    );
}

export default ThemeToggler;

