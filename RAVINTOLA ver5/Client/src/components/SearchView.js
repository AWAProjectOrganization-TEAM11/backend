import React, { Component } from 'react';
import styles from './SearchView.module.css';
import Axios from 'axios'
import SearchResult from './SearchResult';


export default function SearchView(props) {





  return (
    <div>
      
      <div className={ styles.presentationModeGrid }>
        






   {


                



                props.items.map(item => <SearchResult key={item.idrestaurant} {...item} />) 
   

        
      }
    

      </div> 
<div>
      {
   
   
}
</div>  
     
   <div>
   
   </div>

    </div>
  )
}
