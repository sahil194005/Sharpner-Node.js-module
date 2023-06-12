const path = require('path')
const pageNotFound = (req, res, next) => {
	res.status(404).sendFile(path.join(__dirname,'..','views','not-found.html'))
}

module.exports ={ pageNotFound}