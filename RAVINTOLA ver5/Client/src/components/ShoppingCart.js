import Header from './Header';
import Main from './Main';
import Basket from './Basket';
import data from "./data";
import React, { useState } from 'react';
import Axios from 'axios';








export default function ShoppingCart() {

  const [cartItems, setCartItems] = useState([]);

 

//////////////////////////////////////////////////////


const baseURL = "http://localhost:5000/tuotteet";
const [tuote, setTuote] = React.useState([])

React.useEffect (() => {

    Axios.get(baseURL).then(
      (response) => {
      
    setTuote(response.data)
    console.log(response)
    
      } )
    }, [])
  
  
  if(!tuote) return null;






//////////////////////////////////////////////




 
  const { products } = data;
  
  const onAdd = (product) => {
    const exist =cartItems.find(x => x.id === product.id);
    if (exist){
      setCartItems(cartItems.map(x => x.id === product.id ? {...exist, qty: exist. qty +1} : x)
      );
    } else{
      setCartItems([...cartItems, {...product, qty: 1}]);
    }
  }
  const onRemove=(product) => {
    const exist = cartItems.find(x => x.id === product.id);
    if (exist.qty === 1){
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(cartItems.map(x => x.id === product.id ? {...exist, qty: exist. qty -1} : x)
      );
    }
  }
  return (
    <div className="App">
     <Header></Header>
      <div className="rowmain">
        <Main onAdd={onAdd} products={products}></Main>
        <Basket onAdd={onAdd} onRemove={onRemove} cartItems={cartItems}></Basket>
       
    

        


      </div>
    </div>
  );
}

//export default App;
