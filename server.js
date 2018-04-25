var express = require('express');
var app = express();

app.use(express.static(__dirname + "/public"))

app.get('/camper_list', function(req, res){
   console.log('GET request received');

    mob0 = {
        name: 'Sunkaiser',
        pic: 'https://cdn.bcrank.us/223/img/catalog/monsters/large/430raidrwdultra_3.png',
        sign: 'Scorpio',
        passive: 'Cavalry',
        ability: 'Snipe',
        pr: 150000,
        attack: 25000,
        health: 50000,
        recovery: 300,
    };

    mob1 = {
        name: 'CanopicStar',
        pic: 'https://vignette.wikia.nocookie.net/battlecamp/images/e/e0/Canopicgorgon.png/revision/latest?cb=20160116044540',
        sign: 'Scorpio',
        passive: 'Rogue',
        ability: 'Snipe',
        pr: 100000,
        attack: 15000,
        health: 35000,
        recovery: 100,
    };

    mob2 = {
        name: 'Sundragon',
        pic: 'https://cdn.bcrank.us/223/img/catalog/monsters/large/430raidrwdultra_e.png',
        sign: 'Scorpio',
        passive: 'Cavalry',
        ability: 'Quick Strike',
        pr: 115000,
        attack: 20000,
        health: 40000,
        recovery: 200,
    };

    camper0 = {
        id: 'tydus13',
        mob_list:[mob0, mob1, mob2],
    };

    tmob0 = {
        name: 'Vulpesta',
        pic: 'https://cdn.bcrank.us/223/img/catalog/monsters/large/360raidrwdultra_e.png',
        sign: 'Sagitarius',
        passive: 'Rogue',
        ability: 'Element Swap',
        pr: 120000,
        attack: 15000,
        health: 30000,
        recovery: 200,
    };

    tmob1 = {
        name: 'Royal Toad',
        pic: 'https://cdn.bcrank.us/223/img/catalog/monsters/large/e8frog_e.png',
        sign: 'Sagitarius',
        passive: 'Rogue',
        ability: 'Snipe',
        pr: 100000,
        attack: 15000,
        health: 35000,
        recovery: 100,
    };

    tmob2 = {
        name: 'Yokatabom',
        pic: 'https://cdn.bcrank.us/223/img/catalog/monsters/large/370raidrwdultra_e.png',
        sign: 'Sagitarius',
        passive: 'Lethal',
        ability: 'Vampire',
        pr: 115000,
        attack: 20000,
        health: 40000,
        recovery: 200,
    };

    camper1 = {
        id: 'toribaby13',
        mob_list:[tmob0, tmob1, tmob2],
    };

    var camper_list = [camper0, camper1];
    res.json(camper_list);

});

app.listen(3000);
console.log('serving running on PORT: 3000');
