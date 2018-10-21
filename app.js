//importing modeules

var express = require('express');
var mongoose = require('mongoose');
var bodyparser = require('body-parser');
var cors = require('cors');
var path = require('path');
var MongoClient = require('mongodb').MongoClient;

var app = express();
const PORT = process.env.PORT|| 8080;

//mongodb connection
//mongoose.connect('mongodb://localhost:27017/contactlist',
mongoose.connect('mongodb://deepak:deepak5@ds119028.mlab.com:19028/contactlist',
{ useMongoClient: true });

mongoose.connection.on('connected',()=>{
    console.log('Connected to DB at 27017');
});

mongoose.connection.on('error',(err)=>{
    if(err){
        console.log('Database error :'+err);
    }
});

// MongoClient.connect('mongodb://localhost:27017/contactlist',{ useNewUrlParser: true },function(err,db){
//     if(err){
//         console.log(err);
//     }
//     else {
//         console.log('connected to 27017');
//         db.close();
//     }
//   })

app.use(cors());
app.use(bodyparser.json());

app.use(express.static(path.join(__dirname,'public')));


const route = require('./routes/route.js');

app.use('/api',route);

app.get('*',(req,res)=>{
    res.sendFile(path.join(__dirname,'public/index.html'));
})

app.get('/',(req,res)=>{
    res.send("HEllo");
})

app.listen(PORT,()=>{
    console.log("Express server listening at port"+PORT);
});

