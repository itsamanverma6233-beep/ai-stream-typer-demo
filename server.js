const http = require("node:http");
const fs = require("node:fs");
const path = require("node:path");

const PORT = 3000;

const server = http.createServer((req, res) => {
  if (req.url === "/" || req.url === "/index.html") {
    const htmlPath = path.join(__dirname, "public", "index.html");
    fs.readFile(htmlPath, (err, data) => {
      if (err) {
        res.writeHead(500);
        res.end("Error loading index.html");
        return;
      }
      res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
      res.end(data);
    });
  } else if (req.url === "/node_modules/ai-stream-typer/dist/index.js") {
    // Serve client build of the installed npm package
    const pkgPath = path.join(__dirname, "node_modules", "ai-stream-typer", "dist", "index.js");
    fs.readFile(pkgPath, (err, data) => {
      if (err) {
        res.writeHead(404);
        res.end("Package not found");
        return;
      }
      res.writeHead(200, { "Content-Type": "application/javascript" });
      res.end(data);
    });
  } else {
    res.writeHead(404);
    res.end("Not Found");
  }
});

server.listen(PORT, () => {
  console.log(`Demo app running at http://localhost:${PORT}`);
});
