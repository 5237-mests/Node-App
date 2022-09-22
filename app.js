const mysql = require('mysql');
const express = require('express');
const bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.json());

// var mycon = mysql.createConnection({
//   host : "localhost",
//   user : "mesfin",
//   password : "tsme...."
  
// });
// database: "testdb",
// multipleStatements : true

// mycon.connect(function (err) {
//   if (!err) {
//     console.log("Connected!");
//   } else {
//   console.log('failed');
//   }
// });

app.get('/', (req, res)=>{
  res.send('<h1>My Node App.</h1>');
});


// app.listen(3000);
app.listen(3000, () => console.log(`Listening at http://localhost:3000`)); //

