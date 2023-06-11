const bodyParser = require("body-parser");
const express = require("express");

const adminRouter = require("./routes/admin");
const shopRouter = require("./routes/shop");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/admin',adminRouter);
app.use('/',shopRouter);

app.use("/", (req, res, next) => {
	res.status(404).send("<h1>Page not found</h1>");
});

app.listen(3000, () => {
	console.log("server is listening in port 3000....");
});
