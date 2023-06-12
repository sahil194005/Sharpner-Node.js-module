const express = require("express");
const router = express.Router();

const { addProducts, redirect, contactUs, successPage } = require("../controllers/ctrl-admin");

router.get("/add-product",addProducts);

router.post("/add-product",redirect);

router.get("/contact-us",contactUs);

router.get("/success",successPage);

module.exports = router;
