import React,{useEffect, useState} from 'react';

const App = function(){
  const [count,setCount] = useState(0);
  useEffect(()=>{
    document.title = `You Clicked ${count} times`
  });
  
  return(
    <div>
      <p>Count : {count}</p>
      <button onClick={() => setCount(count+1)}>Increase Count</button>
    </div>
  );
}

export default App;