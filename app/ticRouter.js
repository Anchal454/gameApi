import JWT from 'express-jwt'
import express from 'express'
import TicController from './controllers/tic'
import { secret } from '../config/settings'

const app = express.Router()

app.route('/tictoc')
   .get(async (req, res) => {
     const response = await TicController.usersList()
     res.json(response)
   })
   .post(async (req, res) => {
     const {body} = req
     const response = await TicController.add(body)
     res.send(response)
   })


export default app
