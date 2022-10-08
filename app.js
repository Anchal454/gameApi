// server.js

// set up ======================================================================
import express from 'express'
import mongoose from 'mongoose'
import swaggerUi from 'swagger-ui-express'
import YAML from 'yamljs'

import configDB from './config/database'


// routes ======================================================================
import TicRouter from './app/ticRouter'

const app = express()
const swaggerDocument = YAML.load('./swagger.yaml')

// configuration ===============================================================
mongoose.connect(configDB.url) 

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))

app.use('/', TicRouter)

app.use((req, res, next) => {
  const err = new Error('Not Found')
  err.status = 404
  next(err)
})

mongoose.set('debug', true)

module.exports = app
