const Pizza = require("../database/Schema");

const addPizza = async (req, res) => {
  try {
    const newPizza = new Pizza(req.body);
    await newPizza.save();
    res.send("done");
  } catch (error) {
    res.send(error.message);
  }
};

const findall = async (req, res) => {
  try {
    const response = await Pizza.find();
    res.send(response);
  } catch (error) {
    res.send(error);
  }
};

module.exports = { addPizza, findall };
