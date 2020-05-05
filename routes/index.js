'use srtict';
var express = require('express');
var router = express.Router();
const bcrypt = require('bcrypt');
const saltRounds = 10;
const myPlaintextPassword = 's0/\/\P4$$w0rD';
const someOtherPlaintextPassword = 'not_bacon';

/* GET home page. */
router.get('/', function(req, res, next) {
/**
 * generate a salt & create hash
 */
  bcrypt.genSalt(saltRounds, (err, salt) => {
    bcrypt.hash(myPlaintextPassword, salt, (err, hash) => {
      console.log(hash, salt);
      bcrypt.compare(myPlaintextPassword, hash, (err, result) => {
        console.log('Hash validato is ok  ' + result);
      });
      bcrypt.compare(someOtherPlaintextPassword, hash, (err, result) => {
        console.log(result);
        res.render('index', { title: 'Express', Hash: hash, result: result});
      });
    });
  });
});

module.exports = router;
