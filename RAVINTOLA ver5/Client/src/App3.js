import React from 'react';
import data from './data.json'
import styles from './App.module.css';
import Header from './components/MenuHeader';
import Menu from './components/Menu.js';
import Ostoskori from './components/Ostoskori';




const sidefiles=[


  {
    topic:'Ostoskori',

  },


]

const mainfiles=[
  {
    tuote:'Special Opera',
    Price:11,
    Descrpt:'Vege härkkis soija ym hippijuttuja',
    kuva:'Pizza.jpg'
    
  },
  {
    tuote:'Scan burger',
    Price:8,
    Descrpt:'Glutti',
    kuva:'Hampurilainen.jpg'
  },
  {
    tuote:'Coca',
    Price:1,
    Descrpt:'lakt',
    kuva:'Kahvi.jpg'
  },

]



function App3() {

  return (

  <div>
    <Header />
    
    <div className={styles.paasivubar}>
      <div className={styles.maincontainer}>
         {
           mainfiles.map(element => <Menu tuote ={element.tuote} Price ={element.Price} Descrpt ={element.Descrpt} kuva={element.kuva}/>)  
         }
         </div>
         

         
         
         

      <div className={styles.sidecontainer}>
         {
           sidefiles.map(element => <Ostoskori topic ={element.topic}/>)   
         }
 
        </div>
        

        </div>

        
    </div>

         
    
  )
}

export default App3;