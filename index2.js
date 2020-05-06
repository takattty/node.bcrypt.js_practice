'use srtict';
var express = require('express');
var router = express.Router();
const bcrypt = require('bcrypt');
const saltRounds = 10;
const salts = require('./index');
const myPlaintextPassword = 'aaaaaa';

console.log('this is generated solt  ' + salts.genSalt(saltRounds));
//console.log('this is hashed password  ' + bcrypt.hash(myPlaintextPassword, salt));