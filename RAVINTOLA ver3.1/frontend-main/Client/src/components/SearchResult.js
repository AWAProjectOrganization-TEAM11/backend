import React, {useState, useEffect} from 'react';
import styles from './SearchResult.module.css'; 
import { useNavigate } from 'react-router-dom'
import Axios from 'axios'

//import { FaStar, FaRegStar, FaStarHalfAlt } from "react-icons/fa";
export default function SearchResult(props) {
const baseURL = "http://localhost:5000/ravintola";




  

  const navigate = useNavigate();
//////////////////////////////////////////////
////////////////////////////////////////////////




  ///////////meno orderiin /////////////////77
  const [intorestaurant, setintorestaurantstatus] = useState("")

  
  const intoravintola = (e) => {
    
    setintorestaurantstatus(" Menee ravintolaan")


    setTimeout(() => {
      
      navigate('/Menu', {replace: true})
    

  },500
  )
      
  }


///////////////////////////////////////////////////////////////////


const [ravintola, setRavintola] = React.useState([])



useEffect  (() => {
  
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
          
          
        <div>
                     
                     {ravintola.map(setRavintola=> 
        <button onClick={intoravintola} key={setRavintola.idrestaurant} >{setRavintola.restaurant_name}</button>)}
                    </div>


                    <div>
                    {ravintola.map(setRavintola=> 
        <div key={setRavintola.idrestaurant} >{setRavintola.restaurant_type}</div>)}
                    </div>
         
         <div>
         
    </div>
    
       
        </div>
        
    </div>
    
  )
}


