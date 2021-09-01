import express from 'express';
const app = express();
const PORT = 4000;

app.use('/public', express.static(__dirname + '/public'));
// public 접근시 뒤에 폴더를 제공
app.set('view engine', 'pug');
app.set('views', __dirname + '/views');

const listener = () => {
	console.log(`✅Listening to port : ${PORT}`);
};
app.get('/', (req, res) => {
	res.render('home.pug');
});
app.listen(PORT, listener);
