const Port=process.env.PORT||3000;
var os = require("os");
const screenshot = require('desktop-screenshot');
var express=require('express');
var app=express();
var shell = require("shelljs");
app.use(express.static("public"));
app.set("view engine","ejs");


//apt-get clean
//apt-get update/*
shell.exec("apt-get clean", function(){});
shell.exec("apt-get update", function(){});
shell.exec("apt install imagemagick", function(){});
shell.exec("#!/usr/bin/env python", function(){});

shell.exec("import screenshot.png", function(){});

var robot = require("robotjs");
 
var mouse = robot.getMousePos();
 
*/
shell.exec("apt-get install scrot", function(){});
      
var hex = robot.getPixelColor(mouse.x, mouse.y);
console.log("#" + hex + " at x:" + mouse.x + " y:" + mouse.y);

app.get("/exa",(req,res)=>{res.render('img');});
app.get('/sc',(req,res)=>{
console.log("in sc"); 

      shell.exec("sudo apt-get install scrot", function(){});
      console.log("sc mys");
shell.exec("scrot MyScreenshot.png", function(){});
      console.log("appt sudo");
shell.exec("apt-get install sudo", function(){});
shell.exec("echo $USER", function(){});
 
var cm="sudo adduser "+" "+" sudo";
      
      /*
      screenshot().then((img) => {
 
console.log("taking sc");
  var imgStr = new Buffer(img).toString('base64');

 var obj={};obj.image = imgStr;

 res.send({img:JSON.stringify(obj)});

console.log("send");
 });

setTimeout(()=>{
screenshot("screenshot.png", function(error, complete) {

    if(error)
        console.log("Screenshot failed", error);
    else
        console.log("Screenshot succeeded");
});},00);
*/      
      
res.send("ok");
})

app.listen(Port,(err)=>{console.log("server on 3000",os.type());});
