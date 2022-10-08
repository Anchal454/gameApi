import mongoose, {Schema} from 'mongoose'

class TicTocSchema extends Schema {
  constructor () {

    const tictoc = super({
      board: [],
      winner: String,
    });

    return tictoc
  }

}

export default mongoose.model('Tictoc', new TicTocSchema) // eslint-disable-line
