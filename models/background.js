const mongoose = require('mongoose');

const schema = mongoose.Schema({
  name: { type: String },
  url: { type: String },
}, {
  collection: 'group',
  timestamps: true,
});

module.exports = mongoose.model('Background', schema);
