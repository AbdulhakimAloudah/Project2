const express = require("express")
const dotenv = require("dotenv")
const app = express();
dotenv.config();
const PORT = process.env.PORT;
app.use(express.json());


const db = require("./db/db.js");














app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});