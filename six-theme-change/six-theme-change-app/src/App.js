import React,{useState} from 'react';
import ThemeContext from './Context/context';
import HeroSection from './Components/HeroSection';
import ThemeToggler from './Components/ThemeToggler';

const App = function(){
  const themeHook = useState('light');
  return(
    <ThemeContext.Provider value={themeHook}>
        <ThemeToggler/>
        <HeroSection/>
    </ThemeContext.Provider>
  );
}

export default App;