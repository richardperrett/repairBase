// Created by Richard Perrett on 31 Jul 2018

const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');
const config = require('./config/database');

const app = express();

const users = require('./routes/users');


//connect to database
mongoose.connect(config.database, { useNewUrlParser: true });

mongoose.connection.on('connected', () => {
    console.log('connected to database ...' + config.database) ;
});

mongoose.connection.on('error', (err) => {
    console.log('Error connecting to database.  Detail is ...' + err) ;
});

//Set Static Folder
app.use(express.static(path.join(__dirname, 'public')) );

//invoke cors
app.use(cors());

//invoke bodyParser
app.use(bodyParser.json());

//Passport middleware
app.use(passport.initialize());
app.use(passport.session());

require('./config/passport')(passport);



//create the server
const port = 3000;
app.listen(port, () => {console.log('Richards Server started on port ' + port);  });

app.use('/users', users);

//create index route
app.get('/', (req, res) => {res.send('Yeah Baby!');
});

app.get('*', (req, res) => {
     
 res.sendFile(path.join(__dirname, 'public/index.html'));
});

