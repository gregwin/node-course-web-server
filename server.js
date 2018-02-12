const express = require('express');
const hbs = require('hbs');

const port = process.env.PORT || 3000;
var app = express();

hbs.registerPartials(__dirname + '/views/partials');
app.set('viewengine', 'hbs');
app.use(express.static(__dirname + '/public'));

hbs.registerHelper('getCurrentYear', () => {
	return new Date().getFullYear();
});
hbs.registerHelper('screamIt', (text) => {
	return text.toUpperCase();
});

app.get('/', (req, res) => {
	res.render('home.hbs', {
		pageTitle: 'Home Page'
		,welcomeMessage: 'This is a welcome message'
	})
});

app.get('/about', (req, res) => {
	res.render('about.hbs', {
		pageTitle: 'About Page'
	})
});
app.get('/bad', (req, res) => {
	res.send({
		error : 'Could not handle this request'
	});
});


app.listen(port,() => {
	console.log(`Server is up on port ${port}`);
});