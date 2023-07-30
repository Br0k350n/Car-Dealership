require('dotenv').config();
const path = require('path');

const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
const fs = require('fs');


// app.set("view engine", "ejs")

// app.set('views', path.join(__dirname, '/'));

app.use(express.static(__dirname + '/'));

const PORT = 3000 || process.env.PORT;
const file = fs.readFileSync(`${__dirname}/data.json`);
const json = JSON.parse(file.toString())


app.get('/', (req,res) => {
    res.sendFile(`${__dirname}/index.html`);
})

app.get('/inventory', (req,res) => {
    res.sendFile(`${__dirname}/inventory.html`)
})

app.get('/about', (req,res) => {
    res.sendFile(`${__dirname}/about.html`)
})

app.get('/contact', (req,res) => {
    res.sendFile(`${__dirname}/contact.html`)
})

app.get('/admin', (req,res) => {
    res.sendFile(`${__dirname}/admin.html`)
})

app.post('/admin', (req,res) => {
    var temp = 
    {
        carName: req.body.name,
        carDescription: req.body.carDescription,
        price: req.body.price
    }
    json.push(temp);
    fs.writeFileSync(`${__dirname}/data.json`, JSON.stringify(json))

    res.redirect(`${__dirname}/inventory.html`);
})


app.listen(PORT, () => {
    console.log(`Example Website Started at port ${PORT}`)
})