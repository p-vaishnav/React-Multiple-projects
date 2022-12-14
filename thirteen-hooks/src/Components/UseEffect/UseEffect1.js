import React,{useState,useEffect} from 'react';

const UseEffect1 = () => {
    const [width, setWidth] = useState(window.innerWidth);
    useEffect(()=>{
        window.addEventListener('resize',()=>{
            setWidth(window.innerWidth)
        });
    },[width]);
    
    return(
        <>
            <h1>{width}</h1>
        </>
    );
}

export default UseEffect1;