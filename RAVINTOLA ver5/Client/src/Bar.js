import React, {useState, useEffect } from "react";
import ProgressBar from './Progress'
import { useNavigate } from 'react-router-dom'
export default function Bar() {
  const [value, setValue] = useState(0);
  const navigate = useNavigate();


  useEffect(() => {
    const interval = setInterval(() => {
      setValue(oldValue => {
        const newValue = oldValue + 10;
        
       
        if (newValue === 100) {
        
          clearInterval(interval);
       
          setTimeout(() => {
            
            navigate('/RavintolaUi', {replace: true})
            
      
        }, 3500
        
        )
        

            
        }

        return newValue;


      });
    }, 1000);
  }, []);
  return  <ProgressBar value={value} max={100} color={"#ff7979"} width={"6000px"} height={"5000px"}  /> ;
  
}
export  {Bar}