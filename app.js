const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const methodOverride = require('method-override');
const flash = require('connect-flash');
const session = require('express-session');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

require('./models/Idea.js');
const Idea = mongoose.model('ideas', IdeaSchema, 'ideas');

const app = express();

// Load routes
// const ideas = require('./routes/ideas');

// DB Config
const db = require('./config/database');

// Map global promise - get rid of warning
mongoose.Promise = global.Promise;
// Connect to mongoose
mongoose.connect(db.mongoURI)
	.then(() => console.log('MongoDB Connected...'))
	.catch(err => console.log(err));

// Handlebars Middleware
app.engine('handlebars', exphbs({
	defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Static folder
app.use(express.static(path.join(__dirname, 'public')));

// Method override middleware
app.use(methodOverride('_method'));

// Express session midleware
app.use(session({
	secret: 'secret',
	resave: true,
	saveUninitialized: true
}));

// Index Route
app.get('/', (req, res) => {
	const title = 'Welcome';
	res.render('home', {
		title: title
	});
});

// home Route
app.get('/home', (req, res) => {
	res.render('home');
});


// page2 Route
app.get('/page2', (req, res) => {
	res.render('page2');
});


app.post('/add', (req, res) => {
	console.log(req.body.cow)
	Idea.create({ title: req.body.cow })

	Idea.find({}, function (err, ideas) {
		console.log(ideas[0].title)
		res.render('page3', { ideas: ideas })
	});
});

// page3 Route
// app.get('/page3', (req, res) => {
//   res.render('page3');
// });
app.get('/page3', (req, res) => {
	Idea.find({}, function (err, ideas) {
		console.log(ideas[0].title)
		res.render('page3', { ideas: ideas })
	});
	// .then(ideas => {
	// 	console.log("--------special charatore " + ideas + " %--------------");
	// });
});

// Use routes
// app.use('/ideas', ideas);

const port = process.env.PORT || 5000;

app.listen(port, () => {
	console.log(`Server started on port ${port}`);
});