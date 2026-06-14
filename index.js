require('dotenv').config();
const express = require('express')
const mongoose = require('mongoose');
const productRoute = require('./routes/product.route.js');
const app = express()


// middleware

app.use(express.json());

app.use(express.urlencoded({extended: false}));


// routes

app.use('/api/products',productRoute);


app.get('/', (req,res) => {
    res.send("Hello  Node Api");
});


mongoose.connect(process.env.MONGO_URL)

  .then(() => {
     console.log("Connected to the database!");
  })
  .catch((err) => {
  console.log("connection failed!", err);

  });
  app.listen(2000, () => {
    console.log('server is running on port 2000');
}
);