const express = require('express')
const router = express.Router()

router.get("/add-product", (req, res, next) => {
	res.send(`<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        <form action="/admin/product" method="POST">
            <label for ="inputText">Text</label>
            <input type="text" name = text id = "inputText">
            <label for ="inputSize">Size</label>
            <input type="num" name = size id = "inputSize">
            <button type  = "submit">submit</button>
        </form>
    </body>
    </html>`);
});

router.post("/product", (req, res, next) => {
    console.log(req.body)
	res.redirect("/");
});


module.exports =router
