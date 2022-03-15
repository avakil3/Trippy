const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const LikeSchema = new Schema({
    pin: {
        type: Schema.Types.ObjectId,
        ref: 'Pin'
      },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
      },
}, {
    timestamps: true
})

module.exports = Like = mongoose.model('Like', LikeSchema);