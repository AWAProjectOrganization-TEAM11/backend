import React from 'react'
import styles from './Menu.module.css'
import Axios from 'axios'
export default function MainSection(props) {
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



 



    return (
        <div className={styles.maincontainer}>

          <div className={styles.mainbox}>
    
                      <div>
                       <span className={styles.kuva}>
                      
                      <img style={{height:'250px', width:'400px', marginTop:'10px', marginLeft:'30px'}} src={props.kuva} alt="kuva" /></span></div>

                       <div>
                     
                       {tuote.map(setTuote=> 
          <button  key={setTuote.idproduct} >{setTuote.product_name}</button>)}
                      </div>
 

                      <div>
                      {tuote.map(setTuote=> 
                        <span className={styles.price}> {setTuote.product_price}€ </span>)}

                        </div>

                        <div>
                      {tuote.map(setTuote=> 
                        <span className={styles.tuote}> {setTuote.product_description}€ </span>)}

                        </div>

          </div>
        </div>
    )
}

