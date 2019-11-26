const express = require('express');
const path = require('path');
const app = express();
var session = require('express-session');
const SessionStore = require('connect-mongodb-session')(session);
const homeRouter = require('./routes/home.routes');
const productRouter = require('./routes/product.routes');
const authRouter = require('./routes/auth.routes');

app.use(express.static(path.join(__dirname, 'assets')));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', homeRouter);
app.use('/', authRouter);
app.use('/product', productRouter); //nếu ở đây gọi /product thì bên router chỉ /:id nếu không sẽ bị chồng product/product/:id


const STORE = new SessionStore({
    uri:"mongodb://localhost:27017/online-shop",
    collection: 'sessions'
})

app.use(session({
    secret:'this is my secret to hash express sessions......',
    saveUninitialized:true,
    resave: false,
    store:STORE
}))

app.set('view engine', 'ejs');
app.set('views', 'views');
app.get('/', (req, res, next) => {
    res.render('index');
});

app.listen(3000, (err) => {
    console.log('Server listen on port 3000');
});

