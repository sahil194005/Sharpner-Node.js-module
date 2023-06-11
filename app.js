const express = require("express");
const app = express();

app.use((req, res, next) => {
	console.log("In this middleware");
	next();
});

app.use((req, res, next) => {
	console.log("In another middleware");
	res.send(`<h1>Express rocks...</h1>`);
});

app.listen(3000, () => {
	console.log("server is listening in port 3000....");
});
