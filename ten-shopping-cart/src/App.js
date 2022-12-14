
import React,{useState} from 'react';
import logo from './logo.svg';
import { ToastContainer, toast } from 'react-toastify';

import BuyPage from './Components/BuyPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';

function App() {
  const [cartItem,setCartItem] = useState([]);

  const addToCartItem = function(item){
      
      const isAlreadyDefined = cartItem.findIndex(function(itemValue){
          return itemValue.id === item.id;
      });
      
      if (isAlreadyDefined !== -1) {
          toast("Item already Present",{
            type:"error"
          })
      }
      else {
          setCartItem([...cartItem,item]);
      }  
  
  }//addToCartItem

  const buyNow = function(){
      setCartItem([]);
      toast("Purchase Complete",{
        type:"success"
      });
  }

  const removeItem = function(item){
      setCartItem(cartItem.filter(function(singleItem){
          return singleItem.id !== item.id;
      }));
  }//removeItem

  return (
      <div>
            <BuyPage addToCart={addToCartItem}/>
            {/* <TempCard /> */}
      </div>
  );
}

export default App;
