require('dotenv').config();
const path = require('path');

const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
const fs = require('fs');

const staticPath = `${__dirname}/views`;

app.set("view engine", "ejs")

app.use(express.static(__dirname + '/'));

const PORT = 3000 || process.env.PORT;
const file = fs.readFileSync(`${__dirname}/views/data.json`);
const json = JSON.parse(file.toString())


app.get('/', (req,res) => {
    res.render('index');
})

app.get('/inventory', (req,res) => {
    res.render('inventory')
})

app.get('/about', (req,res) => {
    res.render('about')
})

app.get('/contact', (req,res) => {
    res.render('contact')
})

app.get('/admin', (req,res) => {
    res.render('admin')
})

app.post('/admin', (req,res) => {
    var temp = 
    {
        carName: req.body.name,
        carDescription: req.body.carDescription,
        price: req.body.price
    }
    json.push(temp);
    fs.writeFileSync(`${__dirname}/views/data.json`, JSON.stringify(json))

    res.redirect("/inventory");
})


app.listen(PORT, () => {
    console.log(`Example Website Started at port ${PORT}`)
})