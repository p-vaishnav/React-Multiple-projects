import React,{useState} from 'react';


const UseState1 = () => {
    const [values , setValues ]  = useState({count: 0, theme: "Blue"});
    const {count , theme} = values;
    const incrementCount = () => {
        setValues((prevState)=>{
            return {...prevState,count : prevState.count + 1};
            //wrong
            // return {count : prevState.count + 1};    
        });
    }//incrementCount
    
    const decrementCount = () => {
        setValues((prevState)=>{
            return {...prevState,count : prevState.count - 1};
            // wrong
            // return {count : prevState.count - 1};    
        });
    }//decrementCount
    
    return (
      <>
        <button onClick = {decrementCount}>-</button>
        <span>{count}</span>
        <span>{theme}</span>
        <button onClick = {incrementCount}>+</button>
      </>
    );
}

export default UseState1;