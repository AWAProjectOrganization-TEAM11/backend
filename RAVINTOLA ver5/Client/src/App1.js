import React from 'react';
import data from './data.json'
import styles from './App.module.css';
import Header from './components/Header';
import Historia from './components/Historia.js';




const mainfiles=[
  {
    topic:'Ostoshistoria',
    body:'Tilatut tuotteet',
  },

]



function App1() {

  return (

  <div>
    <Header />
    
    <div className={styles.paasivubar}>
      <div className={styles.maincontainer}>
         {
           mainfiles.map(element => <Historia topic ={element.topic} body ={element.body} />)  
         }
         </div>
         </div>
         </div>
         

         
         
         
         
    
  )
}

export default App1;