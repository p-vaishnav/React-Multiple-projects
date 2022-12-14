import React,{useState, useEffect} from "react";

const UseRef = () => {
    const [name, setName] = useState("");
    const [renderedTime, setRenderedTime] = useState(0);

    useEffect(()=>{
        setRenderedTime(prevRenderedState => prevRenderedState + 1);
    });
    //it will lead to an infinite loop because useEffect is called each time when a component is rendered
    
    return(
        <>
            <input type="text" value={name} onChange={(e)=>setName(e.target.value)} />
            <div>My Name is {name}</div>
            <div>No of times rendered {renderedTime}</div>
        </>
    );
}

export default UseRef;