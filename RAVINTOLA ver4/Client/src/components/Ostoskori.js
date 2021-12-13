import React from 'react'
import styles from './Ostoskori.module.css';

export default function Ostoskori(props) {
    return (

        <div className={styles.sidecontainer}>


          <div className={styles.sidebox}> 
              <div className={styles.numero}>
                  {props.numero}
              </div>
                    <div className={styles.teksti}>
                      <span className={styles.topic}> {props.topic}  </span> {props.body}
                    
                    </div>
                    
          </div>
        </div>
    )
}
