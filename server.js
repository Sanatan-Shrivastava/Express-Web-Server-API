const express = require('express');

const bodyParser = require('body-parser');

// const bcrypt = require('bcryptjs');

const cors = require('cors');

const app = express();

app.use(cors());

app.use(bodyParser.json());



const database = {
    users: [
        {
           
            email: '',
            password: '',
        },
        {
            email: '',
            password: '',
           
        }
    ]
}

app.get('/', (req, res)=>{
    res.send(database.users);
})

app.post('/login',(req,res)=>{
    if(req.body.email === database.users[0].email && req.body.password === database.users[0].password ){
        res.send('Welcome to the Portal');
    }
    else{
        res.status(400).json('error logging in');
    }
})

app.post('/register', (req, res) => {
    database.users.push({
      id: '124',
      name: req.body.name,
      email: req.body.email,
      entries: 0,
      joined: new Date()
    })
    res.json(database.users[database.users.length - 1])
  })



app.listen(3000, ()=> {
    console.log('app is running at port 3000');
})


