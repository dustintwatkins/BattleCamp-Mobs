var express = require('express');
var app = express();
//Require mongojs module
var mongojs = require('mongojs');
//state what collection and document we are connecting to
var db = mongojs('BattleCampDB', ['BCDB']);
//after npm install body-parser
var bodyParser = require('body-parser');

app.use(express.static(__dirname + "/public"));
//after npm install body-parser
app.use(bodyParser.json( ));

app.get('/camper_list', function(req, res){
   console.log('GET request received!');

    db.BattleCampDB.find(function(err, docs){
        console.log(docs);
        res.json(docs);
    });

});

app.post('/BattleCampDB', function(req, res){
    //need npm install body-parser to work
   console.log(req.body);
});

app.listen(3000);
console.log('serving running on PORT: 3000');
