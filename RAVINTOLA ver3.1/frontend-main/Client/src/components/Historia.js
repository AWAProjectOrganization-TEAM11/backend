import React from 'react'
import styles from './Historia.module.css'

export default function Historia(props) {


    return (
        <div className={styles.maincontainer}>

          <div className={styles.mainbox}>

                      <div className={styles.topic}> {props.topic} </div>  
                      <div className={styles.body}> {props.body} </div>
                      <button> HISTORIUA NAPPI  </button>
          </div>
        </div>
    )
}

