const http = require("http");
const fs = require("fs");
const path = require("path");
const getFormattedDate = require("./utils/dateFormatter");

const server = http.createServer((req, res) => {
    let filePath = "";

    switch (req.url) {
        case "/":
            filePath = path.join(__dirname, "pages", "home.html");
            break;
        case "/about":
            filePath = path.join(__dirname, "pages", "about.html");
            break;
        case "/contact":
            filePath = path.join(__dirname, "pages", "contact.html");
            break;
        default:
            res.writeHead(404, {"content-Type": "text/html"});
            res.end("<h1>404 Not Found</h1>");
            return;
    }
    

    fs.readFile(filePath, "utf8", (err, content) =>{
        if(err){
            res.writeHead(500);
            res.end("Server Error");
        }else{
            const updatedContent = content.replace("{{13-08-2025}}", getFormattedDate());
            res.writeHead(200, {"content-Type": "text/html"});
            res.end(updatedContent);
            
        }
    });
});

const PORT = 3000;
server .listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});