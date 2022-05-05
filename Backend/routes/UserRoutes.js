const User = require("../database/UserSchema");
const Order = require("../database/orderModel");

const registerUser = async (req, res) => {
  try {
    const { name, email, password, mobile } = req.body;

    const newUser = await new User({
      name,
      email,
      mobile,
      password,
    });

    await newUser.save();
    res.send("User Created SuccesFully");
  } catch (error) {
    res.send(error.message);
  }
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;
  const data = await User.find({ email, password });

  if (data.length > 0) {
    res.send(data[0]);
  } else {
    res.status(404).send("Not Found");
  }
};

const placeorder = async (req, res) => {
  const { token, total, logedinUserData, cartItem } = req.body;

  try {
    // const customer = await stripe.customers.create({
    //   email: token.email,
    //   source: token.id,
    // });

    // const payment = await stripe.charges.create(
    //   {
    //     amount: total * 100,
    //     currency: "inr",
    //     customer: customer.id,
    //     receipt_email: token.email,
    //   },
    //   { idempotencyKey: uuidv4() }
    // );

    const order = new Order({
      name: logedinUserData.name,
      email: logedinUserData.email,
      userId: logedinUserData._id,
      orderItems: cartItem,
      orderAmount: total,
      shippingAddress: {
        street: token.card.address_line1,
        city: token.card.address_city,
        country: token.card.address_country,
        pinCode: token.card.address_zip,
      },
    });

    await order.save();

    res.send("Successfully ");
  } catch (error) {
    res.status(400).json({ message: "Something Went wrong", error });
  }
};

const orderedPizza = async (req, res) => {
  const { userId } = req.body;

  try {
    const data = await Order.find({ userId }).sort({ _id: -1 });
    res.json(data);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

module.exports = { registerUser, loginUser, placeorder, orderedPizza };
