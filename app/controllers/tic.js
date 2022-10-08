import { secret, errorObj, successObj } from '../../config/settings'
import Tictoc from '../models/tic'

const exp = {
  add: (data) => {
    return new Promise((resolve) => {
      const { board, winner } = data
      const tictoc = new Tictoc(data)
      tictoc.save((err, doc) => {
        if (err) {
          console.error(err)
          return resolve({ ...errorObj, message: 'Error Saving User Details' })
        }
        return resolve({
          ...successObj,
          message: 'tictoc added successfully',
         data:doc
        })
      })
    })
  },

  usersList: () => {
    return new Promise(async (resolve) => {
      const x = await Tictoc.find()
      resolve(x)
    })
  },

}

export default exp
