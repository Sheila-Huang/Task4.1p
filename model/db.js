var mongoose = require('mongoose'),
    //数据库地址
    DB_URL = 'mongodb://localhost:27017/project';
mongoose.connect(DB_URL,{ useNewUrlParser: true });
console.log('connect success');

mongoose.connection.on('disconnected',function(){
    console.log('connect wrong');
});
module.exports = mongoose;




