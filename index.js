const http = require("http");
const fs = require("fs");
const path = require("path");
const port = 3500;

const handleRequests = (req, res) => {
  const requestUrl = req.url;
  // sending response depending on request
  const homeUrl = "/";
  const aboutUrl = "/about";
  const contactMeUrl = "/contact-me";

  if (requestUrl == homeUrl) {
    res.writeHead(200, {
      "Content-type": "text/html",
    });
    fs.readFile(
      path.join(__dirname, "views", "index.html"),
      (error, result) => {
        if (error) console.log(error);
        res.end(result);
      }
    );
  }
};

http.createServer(handleRequests).listen(port, () => "server running");
