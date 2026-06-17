require('dotenv').config();
const express = require('express')
const mongoose = require('mongoose');
const productRoute = require('./routes/product.route.js');

const createAdmin = require('./seedAdmin');

const todoRoute = require("./routes/todo.route");

const authRoute = require('./routes/auth.route.js');
const app = express()


// middleware

app.use(express.json());

app.use(express.urlencoded({extended: false}));




// routes

app.use('/api/products',productRoute);
app.use('/api/auth', authRoute);



app.use("/api/todo", todoRoute);


app.get('/', (req,res) => {
    res.send("Hello  Node Api");
});


mongoose.connect(process.env.MONGO_URL)

  .then(async () => {
     console.log("Connected to the database!");

     await createAdmin();
  })
  .catch((err) => {
  console.log("connection failed!", err);

  });
  app.listen(2000, () => {
    console.log('server is running on port 2000');
}
);