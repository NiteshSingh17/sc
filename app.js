


const screenshot = require('desktop-screenshot');
var express=require('express');
var app=express();

app.use(express.static("public"));
app.set("view engine","ejs");

app.get("/exa",(req,res)=>{res.render('img');});
app.get('/sc',(req,res)=>{
console.log("in sc");/*
      screenshot().then((img) => {
 
console.log("taking sc");
  var imgStr = new Buffer(img).toString('base64');

 var obj={};obj.image = imgStr;

 res.send({img:JSON.stringify(obj)});

console.log("send");
 });
*/

setTimeout(()=>{
screenshot("./public/screenshot.png", function(error, complete) {

res.send("ok");
    if(error)
        console.log("Screenshot failed", error);
    else
        console.log("Screenshot succeeded");
});},4000);
})

app.listen(3000,(err)=>{console.log("server on 3000");});