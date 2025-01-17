const bodyParser = require('body-parser');
const express=require("express");
const session = require('express-session');
const cookieParser = require('cookie-parser');
const MongoStore = require('connect-mongo')(session);
const morgan = require('morgan');
const mongoose = require('mongoose');
const serveStatic = require('serve-static');
const flash = require('connect-flash');
const setting = require('./setting');
const routes = require('./router/index');
const server = express();

const DB_URL = 'mongodb://localhost:27017/project';
mongoose.connect(DB_URL,{ useNewUrlParser: true });

server.use(serveStatic(__dirname + 'router'));
server.use(express.static("public"))
server.set('view engine', 'html');
server.set('view engine', 'css');


server.use(morgan());
server.use(bodyParser());
server.use(cookieParser());
server.use(session({
    resave:true,//添加这行
    saveUninitialized: false,//添加这行 
    secret:setting.cookieSecret,  
    key:setting.db,  
    cookie:{
      axAge:1000*60*60*24*30
    },  
    host: setting.host,
    store:new MongoStore({
      db:setting.db,
      url: 'mongodb://localhost/' + setting.db,
      autoRemove: 'native'
    })
}));
server.use(flash());
// 将flash中存入的变量存入res.locals变量中
server.use(function(req,res,next) {
    res.locals.user = req.session.user;
    res.locals.success  = req.flash('success').toString();
    res.locals.error  = req.flash('error').toString();
    next();
});
routes(server);
server.listen(3000);
 
