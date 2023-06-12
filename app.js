const bodyParser = require("body-parser");
const express = require("express");
const path = require('path')
const {pageNotFound} = require('./controllers/error404')

const adminRouter = require("./routes/admin");
const shopRouter = require("./routes/shop");

const app = express();
app.use(express.static(path.join(__dirname,'public')))
app.use(bodyParser.urlencoded({ extended: true }));

app.use(adminRouter);
app.use(shopRouter);

app.use(pageNotFound);

app.listen(3000, () => {
	console.log("server is listening in port 3000....");
});
