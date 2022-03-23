const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BoardSchema = new Schema({
    name: {
        type: String,
        required: true
      },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
      },
}, {
    timestamps: true
})

module.exports = Board = mongoose.model('Board', BoardSchema);