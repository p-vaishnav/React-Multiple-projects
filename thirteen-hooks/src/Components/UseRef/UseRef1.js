import React,{useState, useEffect, useRef} from "react";

const UseRef1 = () => {
    
    const [value,setValue] = useState(0);
    const inputElement = useRef();

    useEffect(()=>{
        inputElement.current.focus()
    },[value]);
    
    return(
        <>
            <input ref={inputElement}></input>
            <br></br>
            <button onClick={()=>setValue(!value)}>Focus</button>
        </>
    );
}

export default UseRef1;