var mongoose = require('./db'),
    Schema = mongoose.Schema;
    var validator=require("validator")

//     function isEmail(str) {

//         var reg=/^\w+@[a-zA-Z0-9]{2,10}(?:\.[a-z]{2,4}){1,3}$/;
        
//         return reg.test(str);
        
//         }
//         function isPhone(str) {

// var reg= /^((0\d{2,3}-\d{7,8})|(1[3584]\d{9}))$/;

// return reg.test(str);

// }


var userSchema = new Schema({
    fname: {
                type: String,
                trim: true
            },
            lname: {
                type: String,
                trim: true
            },
            email: {
                type: String,
                lowercase:true,
                validate(value){
                    if(!validator,isEmail(value))
                    {
                        throw new Error('The email is not valid!')
                    }
                }
            },
            ad:{
                type: String
            },
            city:{
                type: String
            },
            state:{
                type: String
            },
            phonenumber:{
                type: Number,
                
                validate(value){
                    if(!validator,isPhone(value))
                    {
                        throw new Error('The phone number is not valid!')
                    }
                }
            },
            psw: {
                type: String,
                minlength:8
            },
            cpsw: {
                type: String,
                minlength:8
            },
            createAt: {
                type: Date,
                default : Date.now()
            }
            
        });
       
        // 将数据模型暴露出去
       module.exports = mongoose.model('users', userSchema);
             
        