import React from 'react'
import Header from './Header'
import styles from './Historia.module.css'

export default function Historia(props) {


    return (
      <div>
<Header/>

        <div className={styles.maincontainer}>

         

                      <div className={styles.topic}> {props.topic} </div>  
                      <div className={styles.body}> {props.body} </div>
                      <button> TAITAAPI JÄÄDÄ KESKEN..... paina back</button>
         
        </div>
        </div>
    )
}

