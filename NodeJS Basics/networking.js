const http = require("http"); // UNCOMMON TO USE, TOO COMPLEX, USE EXPRESS FOR NODEJS
//const { runInNewContext } = require("vm");
const server = http.createServer((req, res) => { // create server with request and resonse arguments
    if (req.url === "/"){ //work with actual request or response to object instead of sockets
        res.write("Hello World!");
        res.end();
    }

    if (req.url === "/api/courses"){ // e.g return list of courses from the database
        res.write(JSON.stringify([1, 2, 3])); // url is the part after localhost:portnum + /api/courses
        res.end(); 
    }

}); // server has EventEmitter-Functions

var portNum = 3000; 

/*server.addListener("connection",(socket) => {
    console.log("new Connection found");
});
localhost:portNum 
*/

 
server.listen(portNum); //listen on port xxxx

console.log(`listenling on port ${portNum}`);

