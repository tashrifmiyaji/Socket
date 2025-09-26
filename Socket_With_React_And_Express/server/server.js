const express = require("express");
const app = express();
const http = require("http");
const expressServer = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(expressServer, {
	cors: {
		origin: "http://localhost:5173",
		methods: ["GET", "POST"]
	}
});

io.on("connect", (socket) => {
	console.log(socket.id + " is connect.");

	socket.emit("myEvent", "hello world!")

	socket.on("disconnect", () => {
		console.log(socket.id + " is disconnected!");
	});
});

app.get("/", (req, res) => {
	res.end("this is my backend");
});

expressServer.listen(5000, () => {
	console.log("Server running on http://localhost:5000");
});
