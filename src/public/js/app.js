const messageList = document.querySelector('ul');
const messageForm = document.querySelector('#message');
const nickForm = document.querySelector('#nickName');

const socket = new WebSocket(`ws://${window.location.host}`);
//connection to server

const makeMessage = (type, payload) => {
	return JSON.stringify({
		type,
		payload
	});
};

socket.addEventListener('open', (e) => {
	console.log('Server Opened ✅');
});

socket.addEventListener('message', (message) => {
	const li = document.createElement('li');
	li.innerText = message.data;
	messageList.appendChild(li);
});

socket.addEventListener('close', (e) => {
	console.log('Server Closed ❌');
});

const handleSubmit = (e) => {
	e.preventDefault();
	const input = messageForm.querySelector('input');
	socket.send(makeMessage('user_message', input.value));
	input.value = '';
};
const nickSubmit = (e) => {
	e.preventDefault();
	const input = nickForm.querySelector('input');
	socket.send(makeMessage('nickname', input.value));
	// input.value = '';
	input.disabled = true;
};
messageForm.addEventListener('submit', handleSubmit);
nickForm.addEventListener('submit', nickSubmit);

///왜 그냥 오브제 형식으로 보내면 오브젝 오브젝 , 스트링으로 보내면 저렇지?
