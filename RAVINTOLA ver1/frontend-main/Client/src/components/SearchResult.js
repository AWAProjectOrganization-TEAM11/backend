import React, {useState, useEffect} from 'react';
import styles from './SearchResult.module.css';

import Axios from 'axios'
//import { FaStar, FaRegStar, FaStarHalfAlt } from "react-icons/fa";

const baseURL = "http://localhost:5000/ravintola";


const StartRating =() => {
  const [rating, setRating]= useState(null);
  const [hover, setHover] = useState(null);
  return(
    <div>
      {[ ... Array(5)].map((star, i)=> {
        const ratingValue= i + 1;


        return(
          <label>
            <input 
            type="radio" 
            name="rating" 
            value={ratingValue} 
            onClick={()=> setRating(ratingValue)} 
            onMouseEnter={() =>setHover(ratingValue)}
            onMouseLeave={() =>setHover(null)}
            />

 
            </label>
        );
      })}
      <p>The rating is {rating}!</p> 
    </div>
  );
};

export default function SearchResult(props) {


//////////////////////////////////////////////
////////////////////////////////////////////////


// kuvan lataus


///////////////////////////////////////////////////////////////////


const [ravintola, setRavintola] = React.useState([])



React.useEffect (() => {
  
  Axios.get(baseURL).then(
    (response) => {
    
  setRavintola(response.data)
  console.log(response)
  
    } )
  }, [])


if(!ravintola) return null;





 

/////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////7
  


  return (
    
    <div className={ styles.product }>
        <div>
          <div><img className={ styles.image} src={`/images/${props.image}`}  /></div>
          <div className={ styles.name }>{ props.name}  </div>
          <div className={ styles.type }>{ props.type }  </div>
          
          {ravintola.map(ravintola => 
          <div className={ styles.name }>{ravintola.restaurant_name}</div>)}
          {ravintola.map(ravintola => 
          <div className={ styles.type }>{ravintola.restaurant_type}</div>)}
         
          
         <div>
      
    </div>

       
        </div>
    </div>
    
  )
}
