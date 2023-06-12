const path = require("path");
const rootDir = require("../util/path");

const addProducts = (req, res, next) => {
	res.sendFile(path.join(rootDir, "views", "add-product.html"));
};

const redirect = (req, res, next) => {
	res.redirect("/");
};

const contactUs = (req, res, next) => {
	res.sendFile(path.join(rootDir, "views", "contact-us.html"));
};

const successPage = (req, res, next) => {
	res.sendFile(path.join(rootDir, "views", "form-success.html"));
};

module.exports = {
	addProducts,
	redirect,
	contactUs,
	successPage,
};
