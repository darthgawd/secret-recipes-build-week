const express = require('express');

const server = express();

const usersRouter =  require('./router/usersRouter');

server.use(express.json());

server.use('/api', usersRouter)

server.get('/', (req, res) => {
    res.send('<h3>Welcome to our Family Secrets Recipes API </h3>');
  });
 
 module.exports = server;