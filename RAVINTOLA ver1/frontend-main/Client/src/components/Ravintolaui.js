import React from 'react';
import SearchView from './SearchView';
import data from '../data.json'
import styles from './Ravintolaui.module.css';
import Header from './Header';
import Axios from 'axios'
class App extends React.Component  {

 
  







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
      <SearchView
          items={ this.state.items.filter((item) => item.name.toLowerCase().includes(this.state.productSearchString.toLowerCase())) }
          />
          <div>
          
          <div></div>
        </div>
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