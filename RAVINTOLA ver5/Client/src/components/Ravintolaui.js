import React, {useState, useEffect} from 'react';
import SearchView from './SearchView';

import data from '../data.json'
import styles from './Ravintolaui.module.css';
import Header from './Header';
import Axios from 'axios'
import { useNavigate } from 'react-router-dom'

import SearchResult from './SearchResult';

import Bar from '../Bar';
class App extends React.Component  {


  



  constructor(props)
  {
    super(props);
    this.state = {
      items: [], 
      
   
      productSearchString: "",
      adminModeActive: false,
      
    }
  }

  componentDidMount() {
    Axios.get('http://localhost:5000/ravintola')
      .then((response) => {
        this.setState({ items: response.data })
        console.log(response.data)
      });
  }

  onSearchFieldChange = (event) => {

    console.log('Keyboard event');
    console.log(event.target.value);
    this.setState({ productSearchString: event.target.value });
  }



  

 
 

  render()
  {
    let output =
      <div>
        
      <Header />
      <div className={styles.paasivubar} >
      <div > Ravintolahaku <input type="text"  onChange={ this.onSearchFieldChange } value={ this.state.productSearchString } /></div>
     
      <SearchView
          
          items={ this.state.items.filter((item) => item.restaurant_name.toLowerCase().includes(this.state.productSearchString.toLowerCase())) }
      />
       
        
     
        
       

        </div>
        </div>  
        
    
        




    return (
      <>
        { output }
      </>
    )
  }
}

export default App;