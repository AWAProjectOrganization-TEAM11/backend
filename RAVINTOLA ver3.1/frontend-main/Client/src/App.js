import './App.css';
import React, {useEffect, useState} from 'react'
import Ravintolaui from './components/Ravintolaui';
import Login from './components/Login';
import Header from './components/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import styles from './App.module.css';
import Basket from './components/Basket';
import ShoppingCart from './components/ShoppingCart';
import Historia from './components/Historia';

import Menu from './components/Menu.js';
import Ostoskori from './components/Ostoskori';
import App1 from './App1';
import App2 from './App2';
import App3 from './App3';
import ProgressBar from './Progress'

const mainfiles=[
  {
    topic:'Ostoshistoria',
    body:'Tilatut tuotteet',
  },

]

const sidefiles=[


  {
    topic:'Ostoskori',

  },


]

const main1files=[
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



function App() {






  
  return (
    <BrowserRouter>
    <div>
      <Routes>
      <Route path="/" element= { <Login /> } />
      <Route path="/Ravintolaui" element= { <Ravintolaui /> } />
      <Route path="/Basket" element= { <Basket /> } />
      <Route path="/shoppingCart" element= { <ShoppingCart /> } />
      <Route path="/Historia" element= { <Historia /> } />
      <Route path="/progressbar" element= { <ProgressBar /> } />
      <Route path="/Menu" element= { <Menu /> } />
      </Routes>
      </div>
      
    </BrowserRouter>
  );
 
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
    
   function App2() {
    const [value, setValue] = useState(0);
  
    useEffect(() => {
      const interval = setInterval(() => {
        setValue(oldValue => {
          const newValue = oldValue + 10;
  
          if (newValue === 100) {
            clearInterval(interval);
          }
  
          return newValue;
            
  
        });
      }, 1000);
    }, []);
    return <ProgressBar value={value} max={100} />;
  }


  function App3() {

    return (
  
    <div>
      <Header />
      
      <div className={styles.paasivubar}>
        <div className={styles.maincontainer}>
           {
             main1files.map(element => <Menu tuote ={element.tuote} Price ={element.Price} Descrpt ={element.Descrpt} kuva={element.kuva}/>)  
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
  }

  


export default  App;
export {App1}
export {App2}
export {App3}