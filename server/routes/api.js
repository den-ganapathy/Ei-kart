const express = require("express");
const router = express.Router();
const Products = require("../models/Products");

router.get("/products", async (req, res) => {
  const products = await Products.find();
  console.log("api hit");
  res.send(products);
});

router.post("/products", async (req, res) => {
  const { title, price, company, desc, img } = req.body;
  const products = new Products({
    title: title,
    price: price,
    desc: desc,
    company: company,
    img: img,
  });
  console.log("backend", products);
  products.save().then(() => {
    res.send(products);
  });
});

// router.get("/menu/:id", async (req, res) => {
//   const { id } = req.params;
//   console.log(id);
//   const restaurantDetails = await Menu.find({ rid: id }).exec();
//   res.send(restaurantDetails);
// });

module.exports = router;
