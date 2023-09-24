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

app.post('/admin', async (req,res) => {
    var temp = 
    {
        carName: req.body.name.replace(/</g, "&lt;").replace(/>/g, "&gt;"),
        carDescription: req.body.carDescription.replace(/</g, "&lt;").replace(/>/g, "&gt;"),
        price: req.body.price,
        carImg: "./imgs/MysteryCar.png"
    }
    json.push(temp);
    fs.writeFileSync(`${__dirname}/data.json`, JSON.stringify(json))
    console.log(`${__dirname}/inventory.html`)
    res.redirect(`./inventory.html`);
})


app.listen(PORT, () => {
    console.log(`Example Website Started at port ${PORT}`)
})