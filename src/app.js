const express=require('express');
const app=express();
const port=process.env.port || 3000;
const path=require('path');
const hbs=require('hbs');
const staticPath=path.join(__dirname,"../public");
const templatePath=path.join(__dirname,"../templates");
const partialPath=path.join(__dirname,"../templates/partials");
app.use(express.static(staticPath));
app.set('view engine','hbs');
app.set('views',templatePath);
hbs.registerPartials(partialPath);
app.get('/',(req,res)=>{
    res.render('index');
})

app.get('/weather',(req,res)=>{
    res.render('weather');
})

app.get('/about',(req,res)=>{
    res.render('about');
})

app.get('*',(req,res)=>{
    res.render('404');
})
app.listen(port,()=>{
    console.log("server is running properly");
})
