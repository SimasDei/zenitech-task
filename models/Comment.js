const mongoose = require('mongoose');

const CommentSchema = mongoose.Schema(
  {
    title: {
      type: String
    },
    content: {
      type: String
    },
    product: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Product'
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model('Comment', CommentSchema);
