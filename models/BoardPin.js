const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BoardPinSchema = new Schema({
    board: {
      type: Schema.Types.ObjectId,
      ref: 'Board'
    },
    pin: {
        type: Schema.Types.ObjectId,
        ref: 'Pin'
      },
}, {
    timestamps: true
})

module.exports = BoardPin = mongoose.model('BoardPin', BoardPinSchema);