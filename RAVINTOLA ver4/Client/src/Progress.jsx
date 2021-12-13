
import PropTypes from "prop-types";
import React, {useState, useEffect} from "react";






  

const ProgressBar = ({ value, max}) => {
  
  const [state,setState] = useState({
    text:"",
   });
   
   useEffect(() => {
   const timer = setTimeout(() => {
    setState({
     text:"Valmistellaan.."
    });
   }, 1000);
   return () => clearTimeout(timer);
   }, []);

   const [state1,setState1] = useState({
    text:"",
   });
   
   useEffect(() => {
   const timer = setTimeout(() => {
    setState({
     text:"Valmis lähetykseen..."
    });
   }, 4000);
   return () => clearTimeout(timer);
   }, []);

   const [state2,setState2] = useState({
    text:"",
   });
   
   useEffect(() => {
   const timer = setTimeout(() => {
    setState({
     text:"Kohta perillä...."
    });
   }, 6000);
   return () => clearTimeout(timer);
   }, []);

   const [state3,setState3] = useState({
    text:"",
   });
   
   useEffect(() => {
   const timer = setTimeout(() => {
    setState({
     text:"Lähetys saapui, siirrytään päävalikkoon....."
    });
   }, 10000);
   return () => clearTimeout(timer);
   }, []);


  return(
    <div>
      
     
      <progress value={value } max={max} />
      <span>{(value / max) * 100}%</span>
     
      <h1>{state.text}</h1>
          <h1>{state1.text}</h1>
            <h1>{state2.text}</h1>
              <h1>{state3.text}</h1>
     
    </div>
  );
  

};

ProgressBar.propTypes = {
  value: PropTypes.number.isRequired,
  max: PropTypes.number

};

ProgressBar.defaultProps ={
  max: 100
};

export default ProgressBar;


