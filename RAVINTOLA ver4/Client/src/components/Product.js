import React from 'react'

import axios from 'axios';
import MainSection from './Menu';
export default function Product(props) {


    const baseURL = "http://localhost:5000/tuotteet";
    const [tuote, setTuote] = React.useState([])

    React.useEffect (() => {
    
        axios.get(baseURL).then(
          (response) => {
          
        setTuote(response.data)
        console.log(response)
        
          } )
        }, [])
      
      
      if(!tuote) return null;



    const {product, onAdd} = props;
    return (
        <div>
            <img className="small" src={product.image} alt={product.name}></img>
            <h3>{product.name} </h3>
            <div>{product.price}€</div>
            <div>
                <button onClick={() => onAdd(product)} >Add to Cart</button>
            </div>
        </div>
    )
}
