const mongoose = require("mongoose");

const orderModel = mongoose.Schema(
  {
    name: {
      type: String,
      require,
    },
    email: {
      type: String,
      require,
    },
    userId: {
      type: String,
      require,
    },
    transactionId: {
      type: String,
      require,
    },
    orderItems: [],
    shippingAddress: {
      type: Object,
    },
    orderAmount: {
      type: Number,
      require,
    },
    isDelivered: {
      type: Boolean,
      require,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("orders", orderModel);
