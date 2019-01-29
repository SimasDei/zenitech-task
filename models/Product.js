const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema(
  {
    title: {
      type: String
    },
    description: {
      type: String
    },
    price: {
      type: String
    },
    stock: {
      type: String
    },
    location: {
      country: {
        type: String
      },
      city: {
        type: String
      },
      street: {
        type: String
      },
      gps: {
        type: String
      }
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model('Product', ProductSchema);
