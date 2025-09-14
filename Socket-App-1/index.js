const express = require("express");
const http = require("http");
const { Server } = require("socket.io");

const app = express();
const expressServer = http.createServer(app);
const io = new Server(expressServer);

app.get("/", (req, res) => {
	res.sendFile(__dirname + "/index.html");
});

io.on("connection", (socket)=>{
	console.log("new user connected" + ", usr id :" + socket.id);
	
	socket.on("disconnect", ()=>{
		console.log("user disconnected"+ ", usr id :" + socket.id);
		
	})
})

expressServer.listen(3000, () => {
	console.log("server listening on port 3000");
});
