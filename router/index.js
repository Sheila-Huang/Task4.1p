const https = require("https")
const express = require("express")
const bodyParser = require("body-parser")
const userSchema = require('../model/users.js');
const mongoose = require("mongoose")
const validator = require("validator")



module.exports=function(app){

app.get('/', function(req,res,next) {   // 注册
  res.sendfile(__dirname+'/index.html');
    });

    
    app.post('/', function(req,res,next) { 
         // 注册
         res.setHeader('Content-type','application/json;charset=utf-8')
         res.header("Content-Type", "text/html;charset=utf-8")
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
        res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
        res.header("X-Powered-By",' 3.2.1');

        var firstname =req.body.first_name
        var  lastname =req.body.last_name
        var email = req.body.email
        var  psw =req.body.password
        var  zp =req.body.zp
        var ad = req.body.address
        var phonenumber =req.body.phone
        var  state=req.body.state
        var  city = req.body.city
        var  cpsw=req.body.cpassword
           
           var user = new userSchema({
            fname : firstname,
            lname: lastname,
            email: email
        })   
user.save()
.catch((err) => console.log(err));
    

if (res.statusCode === 200)
        {   res.type('html');
            res.sendFile(__dirname + "/success.html")
        }
        else 
        {res.type('html');
            res.sendFile(__dirname + "/404.html")
        }

})
}



         