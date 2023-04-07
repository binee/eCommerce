const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();
const  register = require('./routes/register');
const login = require('./routes/login');
const app = express();
app.use(express.json());
app.use(cors());
//Routes

app.get('/', (req,res) => {
    res.send('WELCOME TO OUR API')
});


const port = process.env.PORT || 5000;
const dburi = process.env.DB_URI;
console.log(dburi)
const db = process.env.DB;
app.listen(port, () => { 
    console.log("Server Running on PORT 5000");
});

mongoose.connect(dburi,{
    useNewUrlParser: true,
    useUnifiedTopology:true
})
.then(()=>{
    console.log('Database connected Succesfully')
})
.catch(err => {
    console.error(`${err} Database connection Error`)
})

app.use('/api/register', register);
app.use('/api/login', login)
