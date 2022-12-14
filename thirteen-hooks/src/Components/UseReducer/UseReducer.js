import React,{useReducer} from "react";

const ACTIONS = {
    INCREMENT : "increment",
    DECREMENT : "decrement"
}

const handleReducer = (state , action) => {
    switch(action.type) {
        case "increment":
            return {count : state.count + 1};
            break;
        
        case "decrement":
            return {count : state.count - 1};
            break;
    }
}

const UseReducer = () => {
    const [state, dispatch] = useReducer(handleReducer, {count : 0});
    return(
        <>  
            <button onClick={() => dispatch({type: ACTIONS.INCREMENT})}>+</button>
            <div>{state.count}</div>
            <button onClick={() => dispatch({type: ACTIONS.DECREMENT})}>-</button>
        </>
    );
}

export default UseReducer;