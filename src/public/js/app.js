const socket = new WebSocket(`ws://${window.location.host}`);
//connection to server

socket.addEventListener('open', (e) => {
	console.log('Server Opened ✅');
});

socket.addEventListener('message', (message) => {
	console.log(message.data);
});

socket.addEventListener('close', (e) => {
	console.log('Server Closed ❌');
});

setTimeout(() => {
	socket.send('hello from the browser');
}, 10000);
