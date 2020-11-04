var express = require('express');
var router = express.Router();
const path = require('path');

router.get('/',function (req,res) {

    res.sendFile(path.join(__dirname + '/views/index.html'));

});

router.get('/barcelona',function (req,res) {

    res.sendFile(path.join(__dirname + '/views/barcelona.html'));

});



router.get('/lasagradafamilia',function (req,res) {

    res.sendFile(path.join(__dirname + '/views/lasagradafamilia.html'));

});
router.get('/barceloneta',function (req,res) {

    res.sendFile(path.join(__dirname + '/views/barceloneta.html'));

});
router.get('/campnou',function (req,res) {

    res.sendFile(path.join(__dirname + '/views/campnou.html'));

});
router.get('/tibidabo',function (req,res) {

    res.sendFile(path.join(__dirname + '/views/tibidabo.html'));

});
router.get('/montjuic',function (req,res) {

    res.sendFile(path.join(__dirname + '/views/montjuic.html'));

});
router.get('/gothicquarter',function (req,res) {

    res.sendFile(path.join(__dirname + '/views/gothicquarter.html'));

});




module.exports = router;

