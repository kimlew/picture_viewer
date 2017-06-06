/* node.js web server for movie favs application */

// For JSLint:
/*jslint node: true */

// For JSHint:
/*jshint strict:false */

//Run JSHint but accept ES6 syntax.
/* jshint esnext: true */

// FROM: formServer.js - node.js Essent Train
var http = require("http");
var fs = require("fs");

var path = require("path");
var checkMimeType = true;

var port = process.env.PORT || 3003;  // 3002; //TCP port- e.g. 80;
var serverIpAddress = "127.0.0.1"; // Server IP address: localhost

var connectionStr = process.env.DATABASE_URL || 'postgres://localhost:5000/';

http.createServer(function (req, res) { // Called with each request. Callback
  // function passes HTTP req, HTTP res.
  // req and res parameters -in ready state when callback function is invoked.
  console.log("Request received-Am IN http.createServer(function(req, res) ");
  
  if (req.method === "GET") {
    var filename = req.url || "/pic_viewer.html"; // Defaults to index.html
    // http://localhost:3002 OR http://localhost:3002/ 
    // OR http://localhost:3002/index.html
    
    // Test if filename === /  - which is root URL which is equivalent to index.html
    if (filename === "/") {
       filename = "/pic_viewer.html"; 
    }
	
    console.log("Method is GET?: ", req.method);
    console.log("URL is: ", req.url);
        
    var ext = path.extname(filename);
    var localPath = __dirname;
  
    var validExtensions = {
            ".html" : "text/html",
            ".js": "application/javascript",
            ".css": "text/css",
            ".txt": "text/plain",
            ".jpg": "image/jpeg",
            ".jpg": "image/jpg",
            ".gif": "image/gif",
            ".png": "image/png",
            ".woff": "application/font-woff",
            ".woff2": "application/font-woff2",
            ".ico": "image/x-icon",
            ".json": "application/json"
  };

    var validMimeType = true;
    var mimeType = validExtensions[ext];
  
    if (checkMimeType) {
      validMimeType = validExtensions[ext] != undefined;
    }

    if (validMimeType) {
      localPath += filename;
      fs.exists(localPath, function(exists) {
        if(exists) {
          console.log("Serving file: " + localPath);
          getFile(localPath, res, mimeType);
        } else {
          console.log("File not found: " + localPath);
          res.writeHead(404);
          res.end();
        }
      });
    } 
    else {
      console.log("Invalid file extension detected: " + ext + " (" + filename + ")")
    }
    
    /* These are taken care of now in getFile() 
    res.writeHead(200, {"Content-Type": "text/html"});
    fs.createReadStream(filename, "UTF-8").pipe(res);
    */
  } // End of: if (req.method === "GET") {

}).listen(port /*, serverIpAddress */); // TCP port and server IP address - DON'T 
// exclude 2nd param when deploying to Heroku

console.log("Starting web server at " + ":" + port);

function getFile(localPath, res, mimeType) {
	fs.readFile(localPath, function(err, contents) {
		if(!err) {
			res.setHeader("Content-Length", contents.length);
			if (mimeType != undefined) {
				res.setHeader("Content-Type", mimeType);
			}
			res.statusCode = 200;
			res.end(contents);
		} else {
			res.writeHead(500);
			res.end();
		}
	});
}
/* mac$ node pic_viewer_web_server.js
Starting web server at :3003

 http://localhost:3003/pic_viewer.html
 */

