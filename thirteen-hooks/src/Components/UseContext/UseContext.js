import React,{useState} from "react";
import FunctionBasedComponent from "./FunctionBasedContext";
import ThemeProvider  from "./ThemeProvider";
const UseContext = () => {
     
    return (
    <>
      <ThemeProvider>
        {/* <button onClick={toggleTheme}>Toggle Theme</button> */}
        <FunctionBasedComponent/>
     </ThemeProvider>
    </>
  );
};

export default UseContext;
