const messageList = document.querySelector('ul');
const messageForm = document.querySelector('form');

const socket = new WebSocket(`ws://${window.location.host}`);
//connection to server

socket.addEventListener('open', (e) => {
	console.log('Server Opened ✅');
});

socket.addEventListener('message', (message) => {
	console.log(`😸New Message :: ${message.data}`);
});

socket.addEventListener('close', (e) => {
	console.log('Server Closed ❌');
});

const handleSubmit = (e) => {
	e.preventDefault();
	const input = messageForm.querySelector('input');
	socket.send(input.value);
	input.value = '';
};

messageForm.addEventListener('submit', handleSubmit);
