import React from 'react'
import styles from './Menu.module.css'
import Header from './Header'
import Axios from 'axios'
import ShoppingCart from './ShoppingCart';
export default function MainSection(props) {
  const baseURL = "http://localhost:5000/Menu2";
  const [tuote, setTuote] = React.useState([])




  

  React.useEffect (() => {
    
    Axios.get(baseURL).then(
      (response) => {
      
    setTuote(response.data)
    console.log(response)
    
      } )
    }, [])
  
  
  if(!tuote) return null;



 



    return (
      <div>
      
        <ShoppingCart/>
        <div className={styles.maincontainer}>

          <div className={styles.mainbox}>
    
                      <div>
                       <span className={styles.kuva}>
                      
                      <img style={{height:'250px', width:'400px', marginTop:'10px', marginLeft:'30px'}} src={props.kuvat} alt="kuva" /></span></div>

                       <div>
                     
                       {tuote.map(setTuote=> 
          <button  key={setTuote.idproduct} >{setTuote.product_name}{setTuote.product_price}€ {setTuote.product_description}</button>)}
                      </div>
 

                     

                        
                        </div>
          </div>
        </div>
    )
}

export {MainSection} 