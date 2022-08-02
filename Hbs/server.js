const express = require('express');

const app = express();
const handlebars = require('express-handlebars');
const router = require('./routes/account');
app.use(express.json());
app.use(express.urlencoded({extended:true}));


const hbs = handlebars.create({
    extname:'.hbs',
    defaultLayout:'index.hbs',
    layoutsDir: __dirname + '/views/layout',
    partialsDir: __dirname + '/views/partials'

})

app.use(express.static( 'public'));
app.use('/api/productos',router);
app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
app.set('views', './views');




const PORT = process.env.PORT || 2020
const server = app.listen(PORT, ()=>{
    console.log(`El servidor que se esta ejecutando es el ${PORT}`);
})
server.on("error", error => `Error: ${error}`);