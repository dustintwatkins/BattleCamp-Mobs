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
   console.log('/GET request received');

    db.BattleCampDB.find(function(err, docs){
        console.log(docs);
        res.json(docs);
    });

});

//For adding a player to the database
app.post('/ADDBattleCampDB', function(req, res){
    //need npm install body-parser to work
    console.log('/POST ');

    var reg_pid = req.body.pid;

    //add to db iff pid dne in db. and then set values to default
    db.BattleCampDB.update({pid:reg_pid}, {$setOnInsert:{pid:reg_pid, mob_list:[]}}, {upsert:true}, function(err, doc){
        res.json(doc);
    });

});

//For looking up a player in the database
app.post('/LOOKUP', function(req, res){
   console.log('/LOOKUP request');

    var query = { pid:req.body};

    db.BattleCampDB.find(req.body).toArray(function(err, doc) {
        if (err) throw err;
        console.log(doc);
        res.json(doc)
    });

});

//For adding a mob to a player
app.post('/ADDMOB', function(req, res){
    console.log('/ADDMOB request');
    console.log(req.body);
    console.log(req.body.pid);

    db.BattleCampDB.update({pid:req.body.pid}, {$push:{mob_list: req.body.mob}}, {upsert:true}, function(err, doc){
        res.json(doc);
    });
});

app.post('/DELETEPLAYER', function(req, res){
   console.log("/DELETEPLAYER");
   console.log(req.body);

   db.BattleCampDB.remove(req.body);
});

app.listen(3000);
console.log('serving running on PORT: 3000');
