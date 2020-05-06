'use srtict';
var express = require('express');
var router = express.Router();
const bcrypt = require('bcrypt');
const saltRounds = 10;
const myPlaintextPassword = 's0/\/\P4$$w0rD';//平文のパスワード
const someOtherPlaintextPassword = 'not_bacon';//わざと間違えた平文パスワード
const hash = require('../hash-password');


const seed = 'this is plaintextpassword';//これを平文パスワードとして考える
const set = hash.createHash(seed);
console.log('this is returned set  ' + set);//他のファイルのグローバル変数は参照出来るって事だね。いや笑明日検証してみよう






/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;