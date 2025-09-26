import { useState } from "react";
import { io } from "socket.io-client";
// backend server address
const socket = io("http://localhost:5000");

function App() {
	const [data, setData] = useState("");
	socket.on("myEvent", (data) => {
		setData(data);
	});

	return (
		<div className="flex items-center justify-center flex-col h-screen bg-gray-900 text-white">
			<h1 className="text-4xl font-bold">{data}</h1>
			<h1 className="text-4xl font-bold">
				Hello everyone socket is working! 🚀
			</h1>
		</div>
	);
}

export default App;
