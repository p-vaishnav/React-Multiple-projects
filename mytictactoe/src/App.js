import React,{useState,useEffect} from "react";
import "./App.css";
import Tile from "./Components/Tile";
function App() {
  const [arr,setArr] = useState({0:"empty",1:"empty",2:"empty",3:"empty",4:"empty",5:"empty",6:"empty",7:"empty",8:"empty"});
  const [isCross, setIsCross] = useState(true);
  const [winner, setWinner] = useState("");
  
  //every time dom renders
  useEffect(()=>{
    setWinner(checkIsWinner()); 
  },[isCross]);

  // yeh call nahi ho raha
  const handleClick = (index) => {
      
    setArr((prevObj) =>
          { 
            prevObj[index] = isCross ? "cross" : "circle";
            return prevObj; 
          });
      setIsCross(!isCross);
           
  }

  const resetGame = () => {
    setArr({0:"empty",1:"empty",2:"empty",3:"empty",4:"empty",5:"empty",6:"empty",7:"empty",8:"empty"});
  }

  const checkIsWinner = () => {
    if(arr[0]==="cross" && arr[1]==="cross" && arr[2]==="cross" ) {
      return "cross";
    } else if(arr[0]==="cross" && arr[3]==="cross" && arr[6]==="cross" ) {
      return "cross";
    }  else if(arr[0]==="cross" && arr[4]==="cross" && arr[8]==="cross" ) {
      return "cross";
    }   else if(arr[3]==="cross" && arr[4]==="cross" && arr[5]==="cross" ) {
      return "cross";
    }   else if(arr[6]==="cross" && arr[7]==="cross" && arr[8]==="cross" ) {
      return "cross";
    } else if(arr[1]==="cross" && arr[4]==="cross" && arr[7]==="cross" ) {
      return "cross";
    } else if(arr[2]==="cross" && arr[5]==="cross" && arr[8]==="cross" ) {
      return "cross";
    }else if(arr[2]==="cross" && arr[4]==="cross" && arr[6]==="cross" ) {
      return "cross";
      
    } else if(arr[0]==="circle" && arr[1]==="circle" && arr[2]==="circle" ) {
      return "circle";
    } else if(arr[0]==="circle" && arr[3]==="circle" && arr[6]==="circle" ) {
      return "circle";
    }  else if(arr[0]==="circle" && arr[4]==="circle" && arr[8]==="circle" ) {
      return "circle";
    }   else if(arr[3]==="circle" && arr[4]==="circle" && arr[5]==="circle" ) {
      return "circle";
    }   else if(arr[6]==="circle" && arr[7]==="circle" && arr[8]==="circle" ) {
      return "circle";
    } else if(arr[1]==="circle" && arr[4]==="circle" && arr[7]==="circle" ) {
      return "circle";
    } else if(arr[2]==="circle" && arr[5]==="circle" && arr[8]==="circle" ) {
      return "circle";
    } else if(arr[2]==="circle" && arr[4]==="circle" && arr[6]==="circle" ) {
      return "circle";
    }

    return "";

  }
  
  return (
    <div className="container">
      <div className="col">
        <div className="playArea">
          {Object.entries(arr).map((index, value) => {
            return <Tile key={index[0]} id={index[0]} iconName={index[1]}  handleClick={ handleClick} ></Tile>;
          })}
        </div>
        <div className="reset"><button onClick={resetGame}>Reset Game</button></div>
      </div>
      <div className="col">
           <h1>Winner is {winner}</h1>
      </div>
    </div>
  );
}

export default App;
