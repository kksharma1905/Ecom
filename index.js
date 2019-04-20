//Modules which are reuired 
const express = require('express');
const path  = require('path');
const port = 8000;

//setting express app object
const app = express();

//setting (ejs) view engine and path to 'view' folder
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//app object listining - listen to port 8000
app.listen(port, function(err){
    if(err){
        console.log("Error in runing server" + err);
    }
    console.log("Server Runing at port: " + port );
});

//server req and res
app.get('/', function(req, res){
    
     return res.render('navbar');
});