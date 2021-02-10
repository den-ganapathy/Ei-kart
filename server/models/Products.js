const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema({
  title: { type: String, required: true },
  price: { type: Number, required: true },
  count: { type: Number, required: true, default: 0 },
  company: { type: String, required: true },
  desc: { type: String, required: true },
  inCart: { type: Boolean, default: false },
  inStock: { type: Boolean, default: false },
  img: {
    type: String,
    required: true,
  },
});
const Product = mongoose.model("product", productSchema);

module.exports = Product;
