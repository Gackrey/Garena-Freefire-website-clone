const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 80;

app.use('/static',express.static('static'));

app.use(express.urlencoded());
app.set('view engine','pug');
app.set('views',path.join(__dirname,'views'));

app.get('/',(req,res)=>{
    res.render('home.pug');
});
app.get('/home',(req,res)=>{
    res.render('home.pug');
});
app.get('/character',(req,res)=>{
    res.render('character.pug');
});
app.get('/weapon',(req,res)=>{
    res.render('weapon.pug');
});
app.get('/maps&modes',(req,res)=>{
    res.render('maps.pug');
});
app.get('/contact',(req,res)=>{
    res.render('contact.pug');
});

app.listen(port,()=>{
    console.log(`The application started successfully on port ${port}`);
});