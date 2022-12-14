import React,{ useState , useMemo, useEffect} from "react";

const aVerySlowFunction = (number) => {
    for(let i=0;i<100000;i++);
    return number*2;
}
//useMemo is Simply Amazing , and object wala bhari hai
const UseMemo1 = () => {
    const [number, setNumber] = useState(0);
    const [dark, setDark] = useState(false);
    const doubleNumber = useMemo( () => aVerySlowFunction(number),[number]);
    const themeStyles = useMemo ( () => {
        return {
        backgroundColor : dark ? "black" : "white",
        color : dark ? "white" : "black"
        };},[dark]);
    useEffect(() => {
        console.log("In use-effect");
    }, [themeStyles])
    return(
        <>
            <input type="number" value={number} onChange={e => setNumber(parseInt(e.target.value))}/>
            <br/>
            <button onClick={()=>setDark(!dark)} >Change Theme</button>
            <div style={themeStyles}>{doubleNumber}</div>

        </>
    );
}

export default UseMemo1;