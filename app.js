const bodyParser = require("body-parser");
const express = require("express");
const app = express();

app.use(bodyParser.urlencoded({extended:true}));

app.use("/add-product", (req, res, next) => {
	res.send(`<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        <form action="/product" method="POST">
            <label for ="inputText">Text</label>
            <input type="text" name = text id = "inputText">
            <label for ="inputSize">Size</label>
            <input type="num" name = size id = "inputSize">
            <button type  = "submit">submit</button>
        </form>
    </body>
    </html>`);
});

app.post("/product", (req, res, next) => {
    console.log(req.body)
	res.redirect("/");
});

app.use("/", (req, res, next) => {
	res.send("<h1>home page</h1>");
});

app.listen(3000, () => {
	console.log("server is listening in port 3000....");
});
