const mongoose = require("mongoose");

const PizzaSchema = mongoose.Schema({
  name: String,
  varients: [],
  category: String,
  img: String,
  description: String,
  price: [],
});

module.exports = mongoose.model("pizzadetail", PizzaSchema);
