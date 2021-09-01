import express from 'express';
import WebSocket from 'ws';
import http from 'http';
const app = express();
const PORT = 4000;

app.use('/public', express.static(__dirname + '/public'));
// public 접근시 뒤에 폴더를 제공
app.set('view engine', 'pug');
app.set('views', __dirname + '/views');

const listener = () => {
	console.log(`✅Listening to port : ${PORT} on WSS`);
};
app.get('/', (_, res) => {
	res.render('home.pug');
});
app.get('/*', (_, res) => {
	res.redirect('/');
});
// app.listen(PORT, listener);

const server = http.createServer(app);
const wss = new WebSocket.Server({ server });
//이러면 http , wss 둘다 돌릴수 있음

wss.on('connection', (socket) => {
	console.log('Connected to Browser✅');
	socket.on('message', (message) => {
		const givenMessage = message.toString('utf-8');
		socket.send(givenMessage);
	});
	socket.on('close', () => console.log('Disconnected from Browser❌'));
});

server.listen(PORT, listener);
