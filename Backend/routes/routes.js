const express = require("express");
const router = express.Router();
const { addPizza, findall } = require("./addPizza");
const {
  registerUser,
  loginUser,
  placeorder,
  orderedPizza,
} = require("./UserRoutes");

router.get("/", (req, res) => {
  res.send("Hello From Other Side");
});

router.post("/addpizza", addPizza);
router.get("/findallpizza", findall);
router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/placeorder", placeorder);
router.post("/orderedpizza", orderedPizza);

module.exports = router;
