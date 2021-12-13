import React, { useState, useEffect } from 'react'
import styles from './Login.module.css'
import { Link } from 'react-router-dom'
import Axios from 'axios'
import { useNavigate } from 'react-router-dom'

export default function Login() {

    const[usernameReg, setUsernameReg] = useState("");
    const[passwordReg, setpasswordReg] = useState("");
    const[useradressReg, setuseradressReg] = useState("");

   // AXIOS VAATII TÄMÄN
   Axios.defaults.withCredentials = true;
   

   const navigate = useNavigate();
   //LOGIN STATES
   const[usernameLog, setUsernameLog] = useState("");
    const[passwordLog, setpasswordLog] = useState("");

    // KIRJAUTUMIS NÄYTTÖ 
    const [loginstatus, setloginstatus] = useState("")
    

  // REKISTERI FUNCTION
    const register = () => {

        Axios.post('http://localhost:5000/register', {
        user_name: usernameReg,
        user_password: passwordReg,
        user_adress: useradressReg
        }).then((response) => {
            console.log(response);
            
        })
    }

    

// LOGIN FUNCTTION

    

    // LOGIN ILMOITUS
    const login = () => {

        Axios.post('http://localhost:5000/login', {
        user_name: usernameLog,
        user_password: passwordLog,
        
        }).then((response) => {

            if (response.data.message) {
           setloginstatus(response.data.message)
        } else {

            // HOX HOX TÄMÄN AVULLA KÄYTTÄJÄ JOKO PÄÄSEE TAI EI PÄÄSE SISÄÄN
            setloginstatus("TERVETULOA VOLTTIIN... hetkinen ...  " + response.data[0].user_name )
            
             

            setTimeout(() => {
                navigate('/RavintolaUi', {replace: true})
            },3500
            )
        
    
     } }  ) }


useEffect(() => {
    Axios.get("http://localhost:5000/login").then((response) => {
      if (response.data.loggedIn == true) {
        setloginstatus(response.data.IdOfUser[0].user_name);
      }
    });
  }, []);






    return (
<div>


<div className="form">
<h1>Kirjaudu sisään </h1>

<label>käyttäjänimi:</label>
<input type="text"onChange={(e) => {setUsernameLog(e.target.value)}}  name="käyttäjänimi" />
<label>salasana:</label>
<input type="password"onChange={(e) => {setpasswordLog(e.target.value)}} name="salasana" />
<button onClick={login} className = 'login'>Kirjaudu</button>

</div>



<div className="form2">
<h2>Rekisteröidy </h2>

<label>käyttäjänimi:</label>
<input type="text"onChange={(e) => {setUsernameReg(e.target.value)}} name="käyttäjänimi" />
<label>salasana:</label>
<input type="password"onChange={(e) => {setpasswordReg(e.target.value)}} name="salasana" />
<label>Osoite:</label>
<input type="text"onChange={(e) => {setuseradressReg(e.target.value)}} name="osoite" />

<button onClick={register} className = 'login'>Rekisteröidy</button>

</div>
<h1>{loginstatus}</h1>

</div>
 
    )
}