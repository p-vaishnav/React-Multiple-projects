import React,{ useState , useMemo} from "react";

const aVerySlowFunction = (number) => {
    for(let i=0;i<9999999999;i++);
    return number*2;
}
//useMemo is Simply Amazing
//Has some Memory-overhead
const UseMemo = () => {
    const [number, setNumber] = useState(0);
    const [dark, setDark] = useState(false);
    const doubleNumber = useMemo( () => aVerySlowFunction(number),[number]);
    const themeStyles = {
        backgroundColor : dark ? "black" : "white",
        color : dark ? "white" : "black"
    }
    return(
        <>
            <input type="number" value={number} onChange={e => setNumber(parseInt(e.target.value))}/>
            <br/>
            <button onClick={()=>setDark(!dark)} >Change Theme</button>
            <div style={themeStyles}>{doubleNumber}</div>

        </>
    );
}

export default UseMemo;