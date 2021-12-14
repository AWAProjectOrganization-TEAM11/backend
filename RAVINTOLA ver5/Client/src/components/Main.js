import React from "react";
import Product from "./Product";
import axios from "axios";
export default function Main(props){
    
    const baseURL = "http://localhost:5000/tuotteet";
    const [tuote, setTuote] = React.useState([])
///////////////////////
// TUOTTEIDEN HAKU BACKENDISTÄ
///////////////////////

React.useEffect (() => {
    
    axios.get(baseURL).then(
      (response) => {
      
    setTuote(response.data)
    console.log(response)
    
      } )
    }, [])
  
  
  if(!tuote) return null;



    const { products, onAdd } = props;
    return (
    <main className="block col-2">
        <h2>Products</h2>
        <div className="row">
            {products.map((product)=>(
                <Product key={product.id} product={product} onAdd={onAdd}></Product>
            ))}
        </div>
    </main>
    );
}