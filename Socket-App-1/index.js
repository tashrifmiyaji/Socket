const express = require("express");
const http = require("http");
const { Server } = require("socket.io");

const app = express();
const expressServer = http.createServer(app);
const io = new Server(expressServer);

app.get("/", (req, res) => {
	res.sendFile(__dirname + "/index.html");
});

io.on("connection", (socket) => {
	console.log("new user connected" + ", usr id :" + socket.id);

	// (() => {
	// 	const message = ["hello everyone", "hello tashrif", "hello clint"];
	// 	let displayMessage = null;
	// 	let index = 0;
	// 	setInterval(() => {
	// 		displayMessage = message[index];
	// 		index = (index + 1) % message.length;

	// 		// socket.send(displayMessage);
	// 		socket.emit("myEvent", displayMessage)
	// 	}, 2000);
	// })();

	// socket.on("message", (msg)=>{
	// 	console.log(msg);
		
	// })

	// // custom event
	// socket.on("myMsgEvent", (msg)=>{
	// 	console.log(msg);
	// })

	// broad cast
	io.sockets.emit("myBroadCast", "hello everyone!")


	socket.on("disconnect", () => {
		console.log("user disconnected" + ", usr id :" + socket.id);
	});
});

expressServer.listen(3000, () => {
	console.log("server listening on port 3000");
});
