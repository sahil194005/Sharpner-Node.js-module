const bodyParser = require("body-parser");
const express = require("express");
const path = require('path')

const adminRouter = require("./routes/admin");
const shopRouter = require("./routes/shop");

const app = express();
app.use(express.static(path.join(__dirname,'public')))
app.use(bodyParser.urlencoded({ extended: true }));

app.use(adminRouter);
app.use(shopRouter);

app.use("/", (req, res, next) => {
	res.status(404).sendFile(path.join(__dirname,'views','not-found.html'))
});

app.listen(3000, () => {
	console.log("server is listening in port 3000....");
});
