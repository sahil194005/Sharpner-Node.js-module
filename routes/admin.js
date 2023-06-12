const express = require("express");
const router = express.Router();
const path = require("path");
const rootDir = require("../util/path");

router.get("/add-product", (req, res, next) => {
	res.sendFile(path.join(rootDir, "views", "add-product.html"));
});

router.post("/add-product", (req, res, next) => {
	res.redirect("/");
});

router.get("/contact-us", (req, res, next) => {
	res.sendFile(path.join(rootDir, "views", "contact-us.html"));
});

router.get('/success',(req,res,next)=>{
	res.sendFile(path.join(rootDir,'views','form-success.html'))
})
module.exports = router;
