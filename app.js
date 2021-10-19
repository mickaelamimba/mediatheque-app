const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');


const usersRouter = require('./routes/user');
const bookRouter = require('./routes/book')
const customerRouter = require('./routes/customer')
const loanRouter = require('./routes/loan')
const mongoose = require("mongoose");
const models =require('./models/index')
const cors = require("cors");
const compression = require("compression");
const helmet = require("helmet");
const upload = require('express-fileupload')

const getRoleMiddleware = require("./utils/getRoleMiddeleware");

const app = express();
// ** MIDDLEWARE ** //
const whitelist = ['http://localhost:3000', 'http://localhost:5000', 'https://mediatheque-app.herokuapp.com']
const corsOptions = {
    origin: function (origin, callback) {
        console.log("** Origin of request " + origin)
        if (whitelist.indexOf(origin) !== -1 || !origin) {
            console.log("Origin acceptable")
            callback(null, true)
        } else {
            console.log("Origin rejected")
            callback(new Error('Not allowed by CORS'))
        }
    }
}
app.options('*', cors())
app.use(cors({
    credentials: true, origin: true,
    corsOptions
}))
app.use(compression())
app.use(helmet());
app.use(upload({
    limits: { fileSize: 50 * 1024 * 1024 },

}));

const uri = process.env.MONGODB_URL || "mongodb+srv://mickael973:Ping3toor@cluster0.f6hrn.mongodb.net/app-mediatheque?retryWrites=true&w=majority";

mongoose.connect(uri,{
    useNewUrlParser: true,
    useUnifiedTopology:true,
})
app.use(logger('tiny'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use('/public/images', express.static(__dirname +'/public/images/' ))
app.set('models',models)
app.use(getRoleMiddleware)

app.use('/',bookRouter)
app.use('/user', usersRouter)
app.use('/customer', customerRouter)
app.use('/loan',loanRouter)
app.use(express.static('client/build'));


if (process.env.NODE_ENV === 'production') {
    // Serve any static files
    app.use(express.static(path.join('client/build')));
// Handle React routing, return all requests to React app
    app.get('*', function(req, res) {
        res.sendFile(path.join(__dirname, 'client','build', 'index.html'));
    });
}
module.exports = app;
