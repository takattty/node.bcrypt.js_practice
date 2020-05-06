'use srtict';
var express = require('express');
var router = express.Router();
const bcrypt = require('bcrypt');
const saltRounds = 10;


// bcrypt.genSalt(saltRounds, (err, salt) => {
//   console.log('これ引数ね　　' + salt);
// });

bcrypt.genSalt(saltRounds, (err, salt) => {
  return salt;
});
const salts = bcrypt.genSalt(saltRounds);
console.log('This is salt  ' + salts);

// bcrypt.hash(myPlaintextPassword, salt, (err, hash) => {

// })

module.exports = bcrypt;