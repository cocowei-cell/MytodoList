
const mongoose = require('mongoose');

const { Schema } = mongoose;


const Things = new Schema({
  startTime: {
    type: String
  },
  actions: {
    type: String,
    required: true,
    maxlength: 30
  },
  state: {
    type: Boolean,
    // 默认为未完成状态
    default: false
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
    required: true
  },
}, { versionKey: false });

const Things1 = mongoose.model('thing', Things);

module.exports = {
  Things1
}
