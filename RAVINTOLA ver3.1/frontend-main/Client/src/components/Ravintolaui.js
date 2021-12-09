import React, {useState, useEffect} from 'react';
import SearchView from './SearchView';
import data from '../data.json'
import styles from './Ravintolaui.module.css';
import Header from './Header';
import Axios from 'axios'
import { useNavigate } from 'react-router-dom'
import SearchResult from './SearchResult';

class App extends React.Component  {


  


  componentDidMount() {
    
    
    fetch("http://localhost:5000/ravintola")
    .then((response) => response.json())
    .then(ravintolat => {
        this.setState({ ravintolat: ravintolat });
   


    
      });
    }

  



  



  
  

  
  constructor(props)
  {
    super(props);
    this.state = {
      items: data.items,
      productSearchString: "",






      
    }
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
      <SearchView  items={ this.state.items.filter((item)  => item.name.toLowerCase().includes(this.state.productSearchString.toLowerCase())) } />
          
          <div></div>
        
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