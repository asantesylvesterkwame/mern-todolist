const mongoose = require('mongoose');
// const Schema = mongoose.Model

const listCardSchema = new mongoose.Schema(
  {
    title: {
      type: String,
    },
    desc: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('todoListCardModel', listCardSchema);
