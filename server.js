const express = require('express');
const routes = require('./routes');

// var mysql = require('mysql2');

// var connection = mysql.createConnection({
//   host:'localhost',
//   user:'root',
//   password:'1',
//   database:'ecommerce_db'

// });
// connection.connect(function(error){
//   if(error){
//       console.log(error);
//   }else{
//       console.log('Connected');
//   }
// });


const sequelize = require('./config/connection');
// import sequelize connection

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

// sync sequelize models to the database, then turn on the server
// app.listen(PORT, () => {
//   console.log(`App listening on port ${PORT}!`);
// });


sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
}
);
