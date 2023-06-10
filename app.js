const http = require("http");
const fs = require("fs");
const server = http.createServer((req, res) => {
	let url = req.url;
	let method = req.method;
	if (url == "/") {
		let fileData = fs.readFile("target.txt", "utf-8", (err, data) => {
			if (err) console.log(err);
			else {
                res.write(`<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Home</title>
        </head>
        <body>
        <p>${data}</p>
            <form action="/msg" method = "POST">
                <label for="name"> Enter your text</label>
                <input type="text" id = "name" name = "msg">
                <button type="submit">Send</button>
            </form>
            
        </body>
        </html>`);
		res.end();
			}
		});
		
	} else if (url == "/msg") {
		let newArr = [];
		req.on("data", (chunk) => {
			newArr.push(chunk);
		});
		req.on("end", () => {
			let tempdata = Buffer.concat(newArr).toString();
			let data = tempdata.split("=")[1];
			fs.writeFile("target.txt", data, (err) => {
				if (err) console.log(err);
				else {
					res.statusCode = 302;
					res.setHeader("Location", "/");
					res.end("got here");
				}
			});
		});
	} else {
		res.end("wrong url");
	}
});

server.listen(4000, () => console.log("server listening on port 4000...."));
