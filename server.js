const express = require('express');
const helmet = require('helmet');
const cors = require('cors')
const server = express();

// const usersRouter =  require('./router/usersRouter');
const recipesRouter = require('./router/recipesRouter.js');
const authRouter = require('./auth/auth-router.js')

server.use(helmet());
server.use(cors());
server.use(express.json());

// server.use('/api', usersRouter)
server.use('/api', recipesRouter)
server.use('/auth', authRouter)

server.get('/', (req, res) => {
    res.send('<h3>Welcome to our Family Secrets Recipes API </h3>');
  });
 
 module.exports = server;