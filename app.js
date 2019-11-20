const express = require('express');
const path = require('path');
const app = express();

const homeRouter = require('./routes/home.routes');

app.use(express.static(path.join(__dirname, 'assets')));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', homeRouter);



app.set('view engine', 'ejs');
app.set('views', 'views');
app.get('/', (req, res, next) => {
    res.render('index');
});

app.listen(3000, (err) => {
    console.log('Server listen on port 3000');
});

