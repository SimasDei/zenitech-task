const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = new Schema(
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

module.exports = Product = mongoose.model('products', ProductSchema);
