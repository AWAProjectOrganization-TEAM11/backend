import React, { useState, useEffect } from 'react'
import styles from './Header.module.css';
import Axios from 'axios'
import { useNavigate } from 'react-router-dom'

export default function Header() {

  const [logoutstatus, setlogoutstatus] = useState("")

  const navigate = useNavigate();
  const logout = (e) => {
    
    setlogoutstatus(" KIRJAUDUTAAN ULOS")
    
   
    
    setTimeout(() => {
      
      navigate('/', {replace: true})
    

  },3500
  )
      
  }
  
    return (
        <div className={styles.header}>
        <div className={styles.logo}>Woltti</div>

        
            <button onClick ={logout}  className={styles.uloskirjaus}>Kirjaudu ulos</button> 
              <div className={styles.ostoskori}>Ostoskori</div>
              
              <h1 className={styles.kayttaja}>{logoutstatus} </h1>                     
      </div>
      
            

        
    )
}