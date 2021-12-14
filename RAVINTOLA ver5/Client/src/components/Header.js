import React, { useState, useEffect } from 'react'
import styles from './Header.module.css';
import Axios from 'axios'
import Bar from '../Bar';
import { useNavigate } from 'react-router-dom'

export default function Header() {

  const navigate = useNavigate();

  ///////////meno orderiin /////////////////77
  const [orderstatus, setlorderstatus] = useState("")

  
  const order = (e) => {
    
    setlorderstatus("Shoppingcart")


    setTimeout(() => {
      
      navigate('/shoppingCart', {replace: true})
    

  },3500
  )
      
  }





  ///////////meno HISTORYYN /////////////////77
  const [historystatus, sethistorystatus] = useState("")

  
  const history = (e) => {
    
    sethistorystatus("history")


    setTimeout(() => {
      
      navigate('/Historia', {replace: true})
    

  },3500
  )
      
  }
  /////////////////////////////
  // RavintolaUI navigointi 
//////////
  const [navstatus, setnavtatus] = useState("")

  
  const nav = (e) => {
    
    setnavtatus("back")


    setTimeout(() => {
      
      navigate('/RavintolaUi', {replace: true})
    

  },1500
  )
      
  }



  /////// ULOS KIRKJAUTUMINEN ///////////
  const [logoutstatus, setlogoutstatus] = useState("")

  
  const logout = (e) => {
    
    setlogoutstatus("Loggin out")
    
    
   
    
    setTimeout(() => {
      
      navigate('/', {replace: true})
    

  },3500
  )
      
  }
  
    return (
        <div className={styles.header}>
        <div className={styles.logo}>Woltti</div>

        
            <button onClick ={logout}  className={styles.uloskirjaus}>Logout</button> 
             
              
                
                <button onClick={history} className={styles.ostoskori} className="badge"> Order History</button>
                <button onClick={nav}  className="back"> Back </button>
                <h1 className={styles.kayttaja}>{orderstatus} </h1>  
              <h1 className={styles.kayttaja}>{logoutstatus} </h1>     
              <h1 className={styles.kayttaja}>{historystatus} </h1>    
              <h1 className={styles.back}>{navstatus} </h1>             
      </div>
      
            

        
    )
}