const express = require('express')
const bodyParser = require('body-parser')

const app = express();
app.use(express.json()) 
const port = 80;


app.get('/plus', (req, res) => {   
    const {a ,b } =  req.query;
    if(a && b){
        res.status(200).json({answer: Number(a)+Number(b)});        
    }
    else{
        res.status(400).json({message: 'your data is NOT correct'});        
    }
});
app.post('/plus', (req, res) => {   
    const {a ,b } =  req.body;
    if(a && b){
        res.status(200).json({answer: Number(a)+Number(b)});        
    }
    else{
        res.status(400).json({message: 'your data is NOt correct'});        
    }
});
app.get('/minus', (req, res) => {    
    const {a ,b } =  req.query;
    if(a && b){
        res.status(200).json({answer: Number(a)-Number(b)});        
    }
    else{
        res.status(400).json({message: 'your data is NOT correct'});        
    }
});
app.post('/minus', (req, res) => {    
    const {a ,b } =  req.body;
    if(a && b){
        res.status(200).json({answer: Number(a)-Number(b)});        
    }
    else{
        res.status(400).json({message: 'your data is NOT correct'});        
    }
});
app.get('/multi', (req, res) => {    
    const {a ,b } =  req.query;
    if(a && b){
        res.status(200).json({answer: Number(a)*Number(b)});        
    }
    else{
        res.status(400).json({message: 'your data is NOT correct'});        
    }
});
app.post('/multi', (req, res) => {    
    const {a ,b } =  req.body;
    if(a && b){
        res.status(200).json({answer: Number(a)*Number(b)});        
    }
    else{
        res.status(400).json({message: 'your data is NOT correct'});        
    }
});
app.get('/div', (req, res) => {    
    const {a ,b } =  req.query;
    if(a && b){
        res.status(200).json({answer: Number(a)/Number(b)});        
    }
    else{
        res.status(400).json({message: 'your data is NOT correct'});        
    }
});
app.post('/div', (req, res) => {    
    const {a ,b } =  req.body;
    if(a && b){
        res.status(200).json({answer: Number(a)/Number(b)});
    }
    else{
        res.status(400).json({message: 'your data is NOT correct'});        
    }
});


app.post('/form', (req, res) => {
    const {first_name, last_name} = req.body;
    if(first_name && last_name){
        res.status(200).json({answer: 'سپاسگزارم داده‌های شما دریافت شدند'});
    }
    else{
        res.status(400).json({message: 'your data is in correct'});
    }
})

app.listen(port, () => {
    console.log(`app listen on http://localhost:${port}`)
})