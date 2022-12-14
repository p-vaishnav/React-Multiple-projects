import React, { useState } from "react";

const tempFunction = () => {
    console.log("Excellence");
    return 0;
}

const UseState = () => {
    const [count, setCount] = useState(0);
    // const [count, setCount] = useState(()=>{
    //     console.log("Success");
    //     return 0;
    // });
    // bad Practise as executing a function maybe a very heavy task
    // const [count, setCount] = useState(tempFunction());
  
   const incrementCountFaulty = () => {
      // it never increments count as internally it behave like setCount(5) setCount(5)
      setCount(count + 1);
      setCount(count + 1);
  }

  const incrementCount = () => {
      
      setCount(count + 1);

      //to increment count twice this is a correct way
      //setCount(prevCount => prevCount + 1);
      //setCount(prevCount => prevCount + 1);
  }

  const decrementCount = () => {
    setCount(count - 1);
  }
  return (
    <>
      <button onClick = {decrementCount}>-</button>
      <span>{count}</span>
      <button onClick = {incrementCount}>+</button>
    </>
  );
};

export default UseState;


/*
Note
UseState is not allowed in condition
useState hook also takes a callback in it and that callback only executes only once
useState hook if passed a function object is executed each time
*/