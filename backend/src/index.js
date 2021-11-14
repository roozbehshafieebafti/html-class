const express = require('express');
const cors = require('cors');
const faker = require('faker');

let users=[];
setInterval(() => {
    users=[];
}, (60*60*24)*1000);

const app = express();
app.use(cors({origin:'*'}))
app.use(express.json()) 
const port = 3000;

app.get('/',(req, res)=>{
    res.status(200).json({answer: 'hello world!'});        
});


// MATH //
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



// FORM //
app.post('/form', (req, res) => {
    const {first_name, last_name} = req.body;
    if(first_name && last_name){
        res.status(200).json({answer: 'سپاسگزارم داده‌های شما دریافت شدند'});
    }
    else{
        res.status(400).json({message: 'your data is in correct'});
    }
});


app.get('/users',(req,res)=>{
    if(users.length===0){
        for (let index = 0; index < 10; index++) {
            let firstName = faker.name.firstName();
            let lastName = faker.name.lastName();    
            let jobTitle = faker.name.jobTitle();
            let prefix = faker.name.prefix(); 
            let suffix = faker.name.suffix();
            let jobArea = faker.name.jobArea();    
            let phone = faker.phone.phoneNumber();
            let image = faker.image.image();
            
            users.push({
                id: index,
                firstName,
                lastName,
                jobTitle,
                prefix,
                suffix,
                jobArea,
                phone,
                image
            });
        }  
    }
    res.status(200).json(users);
});

app.post('/users/create',(req,res)=>{ 
    const { 
        firstName,
        lastName,
        jobTitle,
        prefix,
        suffix,
        jobArea,
        phone,
        image 
    } = req.body;

 
    const data = {};
    if(firstName){
        data['firstName'] = firstName;
    }
    if(lastName){
        data['lastName'] = lastName;            
    }
    if(jobTitle){
        data['jobTitle'] = jobTitle;            
    }
    if(prefix){
        data['prefix'] = prefix;            
    }
    if(suffix){
        data['suffix'] = suffix;            
    }
    if(jobArea){
        data['jobArea'] = jobArea;            
    }
    if(phone){
        data['phone'] = phone;
    }
    if(image){
        data['image'] = image;
    }
    users.push(data);      
    res.status(201).json({message: 'اطلاعات با موفقیت ذخیره شد'});

  
});

app.put('/users/update',(req,res)=>{ 
    const { id,
        firstName,
        lastName,
        jobTitle,
        prefix,
        suffix,
        jobArea,
        phone,
        image 
    } = req.body;

    if(id!==null || id!==undefined){
        const data = users[id];
        if(firstName){
            data['firstName'] = firstName;
        }
        if(lastName){
            data['lastName'] = lastName;            
        }
        if(jobTitle){
            data['jobTitle'] = jobTitle;            
        }
        if(prefix){
            data['prefix'] = prefix;            
        }
        if(suffix){
            data['suffix'] = suffix;            
        }
        if(jobArea){
            data['jobArea'] = jobArea;            
        }
        if(phone){
            data['phone'] = phone;
        }
        if(image){
            data['image'] = image;
        }
        users[id] = users[id];
        
        res.status(200).json({message: 'اطلاعات با موفقیت آپدیت شد'});
    }
    else{
        res.status(400).json({message: 'آیدی ارسال شده اشتباه است'});
    }
});


app.listen(port, () => {
    console.log(`app listen on http://localhost:${port}`)
})