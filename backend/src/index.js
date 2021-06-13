const express = require('express')
const bodyParser = require('body-parser')

const app = express();
const port = 3000;
app.use(bodyParser.urlencoded({ extended: false }))

app.get('/get', (req, res) => {
    console.log("get",req.query);
    res.send('i get data from get');
})


app.post('/post', (req, res) => {
    console.log("post",req.body);
    res.send('i get data from post');
})

app.listen(port, () => {
    console.log(`app listen on http://localhost:${port}`)
})