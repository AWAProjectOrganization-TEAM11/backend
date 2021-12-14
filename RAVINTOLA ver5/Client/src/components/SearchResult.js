import React, {useState, useEffect} from 'react';
import styles from './SearchResult.module.css'; 
import { useNavigate } from 'react-router-dom'
import Axios from 'axios'
import SearchView from './SearchView';


import data from '../data.json'
//import { FaStar, FaRegStar, FaStarHalfAlt } from "react-icons/fa";
export default function SearchResult(props) {





  

  const navigate = useNavigate();
//////////////////////////////////////////////
////////////////////////////////////////////////




  ///////////meno orderiin /////////////////77
  const [intorestaurant, setintorestaurantstatus] = useState("")

  
  const intoravintola = (e) => {
    
    setintorestaurantstatus(" Menee ravintolaan")

     if ( props.restaurant_name == 'Röyssy'  ) {
    setTimeout(() => {
      
      navigate('/Menu', {replace: true})
    

  },1500
  )
      
  }

 else if ( props.restaurant_name == 'Shos'  ) {
    setTimeout(() => {
      
      navigate('/Menu2', {replace: true})
    

  },1500
  )
      
  }
  else if ( props.restaurant_name == 'Burger Dutch'  ) {
    setTimeout(() => {
      
      navigate('/Menu2', {replace: true})
    

  },1500
  )
      
  }
  else if ( props.restaurant_name == 'Katzano'  ) {
    setTimeout(() => {
      
      navigate('/Menu4', {replace: true})
    

  },1500
  )
      
  }
  else if ( props.restaurant_name == 'Pihvi-paja'  ) {
    setTimeout(() => {
      
      navigate('/Menu3', {replace: true})
    

  },1500
  )
      
  }
  else if ( props.restaurant_name == 'Tonin kööki'  ) {
    setTimeout(() => {
      
      navigate('/Menu3', {replace: true})
    

  },1500
  )
      
  }
  else if ( props.restaurant_name == 'Tanelin tupa'  ) {
    setTimeout(() => {
      
      navigate('/Menu2', {replace: true})
    

  },1500
  )
      
  }
}


///////////////////////////////////////////////////////////////////

 /*

const [ravintola, setRavintola] = React.useState([])



useEffect  (() => {
  
  Axios.get(baseURL).then(
    (response) => {
    
  setRavintola(response.data)
  console.log(response)

  
  
    } )
  }, [])


if(!ravintola) return null;



*/






/////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////7
  


  return (
     
    <div className={ styles.product }>
        <div>
          
          
        <div>
        
      

        <div>
          
          <img className={ styles.image}  src={props.restaurant_image}/>
          <button onClick={intoravintola} className={ styles.name }>{ props.restaurant_name }</button>
        
          <div>{ props.operating_hours }</div>
          <div>{ props.restaurant_type }</div>
          <div>{ props.restaurant_adress }</div>
          <div> {intorestaurant}</div>
        </div>



                    </div>
                    

                    <div>
                  
                    </div>
         
         <div>
        
    </div>
    
       
        </div>
        
    </div>
    
  )
}


