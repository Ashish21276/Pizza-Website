const express = require("express");
const router = require("./routes/routes");
const connectToDatabase = require("./database/db");
const cors = require("cors");
const PORT = 5555;

const app = express();
connectToDatabase();

app.use(cors());
app.use(express.json());
app.use(router);

app.listen(PORT, () => {
  console.log(`app is listening on ${PORT}`);
});
