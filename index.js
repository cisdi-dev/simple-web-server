const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  if (req.url === "/" || req.url === "/index.html") {
    fs.readFile("index.html", (err, data) => {
      res.end(data);
    });
  } else if (req.url === "/login.html") {
    fs.readFile("login.html", (err, data) => {
      res.end(data);
    });
  } else if (req.url === "/example-image.jpg") {
    fs.readFile("example-image.jpg", (err, data) => {
      res.end(data);
    });
  } else {
    res.end("404 Not Found");
  }
});

const PORT = 8080;
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
