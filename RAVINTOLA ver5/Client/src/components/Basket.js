import React, { useState, useEffect }  from "react";
import { useNavigate } from 'react-router-dom'
import axios from "axios";

export default function Basket(props){




    const navigate = useNavigate();
   















      



 /////// ULOS KIRKJAUTUMINEN ///////////
 const [chekoutstatus, setchekoutstatus] = useState("")

  
 const chekout = (e) => {
   
   setchekoutstatus(" Siirrytään maksuun...")
   console.log("on menossa checkouttiin")
  
   
   setTimeout(() => {
     
     navigate('/Bar', {replace: true})
   

 },3500
 )
     
 }





    const {cartItems, onAdd, onRemove} = props;
    const itemsPrice = cartItems.reduce((a,c) => a + c.price * c.qty,0);
    return <aside className="block col-1">
        <h2>Cart Items</h2>
        <div>
            {cartItems.length === 0 && <div>Cart is Empty</div>}
        </div>
        {cartItems.map((item) =>(
            <div key={item.id} className="row">
                <div className="col-2">{item.name}</div>
                <div className="col-2">
                    <button onClick={()=>onAdd(item)} className="add">+</button>
                    <button onClick={()=>onRemove(item)} className="remove">-</button>
                </div>
                <div className="col-2 text-right">
                    {item.qty} x {item.price.toFixed(2)}€
                </div>
            </div>
        ))}
        {cartItems.length !==0 &&(
            <>
                <hr></hr>
                <div className="row">
                    <div className="col-2">Items Price</div>
                    <div className="col-1 text-right">{itemsPrice.toFixed(2)}€</div>
                </div>
                <hr/>
                <div className="row">
                    <button>
                    <button onClick={chekout}> Checkout</button>
                    </button>
                    <h1>{chekoutstatus} </h1> 
                </div>
            </>
        )}
    </aside>;
}