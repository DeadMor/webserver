const express = require('express');
const app = express();
const hbs = require("hbs");
require("./hbs/helpers")
app.use(express.static(__dirname + '/public'));
const port = process.env.PORT || 3000;
//express hbs engine
hbs.registerPartials(__dirname + "/views/parciales")
app.set("view engine", "hbs")

app.get('/', (req, res) => {
    // res.send('Que ise er sosio?');


    res.render("home", {
        nombre: "antonio"
    });

});

app.get('/about', (req, res) => {
    // res.send('Que ise er sosio?');
    res.render("about");

});

app.listen(port, () => {
    console.log(`Escuchando puerto ${port}`);
})