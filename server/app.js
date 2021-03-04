require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bodyparser = require("body-parser");
var cors = require("cors");
const app = express();

const uri =
  "mongodb+srv://den:den123@cluster0.rn771.mongodb.net/product-data?retryWrites=true&w=majority";
mongoose
  .connect(uri, { useUnifiedTopology: true, useNewUrlParser: true })
  .then(() =>
    app.listen(process.env.PORT || 8080, () => {
      console.log("listening for request");
    })
  )
  .catch((err) => console.log(err));
app.use(bodyparser.json({ limit: "50mb", extended: true }));
app.use(bodyparser.urlencoded({ extended: true, limit: "50mb" }));
app.use(cors());
app.use("/api", require("./routes/api"));
