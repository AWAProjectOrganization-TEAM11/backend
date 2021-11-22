const express = require('express')
const bodyParser = require('body-parser')
const mysql = require('mysql')

const app = express()

const port = process.env.PORT || 5000


app.use(bodyParser.urlencoded({ extended: false}))

app.use(bodyParser.json())

// MYSQL KOODIT

const pool = mysql.createPool ({
    connectionLimit : 10,
    host : 'localhost',
    user: 'Tänne käyttäjä nimi',    // HOX HOX vaati  oman USER ja PASSWORD tunnuksen
    password: 'Tänne salasana',
    database: 'databaseravintola'
})

//Tiedostojen haku
app.get('', (req, res) =>{

     pool.getConnection((err, connection) =>{
if(err) throw err
console.log(' Konnektoi customer polulta')


    connection.query('SELECT * from user', (err, rows) => {

        connection.release() 
        if(!err) {
            res.send(rows)
        } else {
            console.log(err)
        }

    })
      


     })
    })


    // Konnektoi Id:n perusteella


    app.get('/:iduser', (req, res) =>{

        pool.getConnection((err, connection) => {
   if(err) throw err
   console.log(' Konnektoi customer id perusteella')

    connection.query('SELECT * from user WHERE iduser = ?', [req.params.iduser], (err, rows) => {

        connection.release() 
        if(!err) {
            res.send(rows)
        } else {
            console.log(err)
        }

    })
      


     })
    })
    

  // Käyttäjän poistaminen
  // Ei kannata ottaa käyttöön, jos ei tarvitse
    

/*
    app.delete('/:iduser', (req, res) =>{

        pool.getConnection((err, connection) => {
   if(err) throw err
   console.log(' Konnektoi customer id perusteella')

    connection.query('DELETE from user WHERE iduser = ?', [req.params.iduser], (err, rows) => {

        connection.release() 
        if(!err) {
            res.send(`Käyttäjä ID: ${[req.params.iduser]}  on poistettu`)  
        } else {
            console.log(err)
        }

    })
      
     })
    })
    
  */

    // Tällä lisätään user databaseen

    // Käyttäjän lisääminen onnistuu postmanilla komennolla POST lähettäen JSON RAW dataa localhost:5000 osoitteeseen.
    app.post('', (req, res) =>{

        pool.getConnection((err, connection) => {
   if(err) throw err
   console.log(' Konnektoi customer id perusteella')

      // Tässä lisäksyn vartalo
      const params = req.body
      

    connection.query('INSERT INTO user SET ?', params, (err, rows) => {

        connection.release() 
        if(!err) {
            res.send(`Käyttäjä ID: ${[params.user_full_name]}  on Lisätty databaseravintolaan`)  
        } else {
            console.log(err)
        }

    })
      //  Näyttää konsolissa mitä lisätään

      console.log(req.body)

       

     })
    })
   
     






// Portilla 5000
app.listen(port, () => console.log(`listen on port ${port}`))
