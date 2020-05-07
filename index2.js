'use srtict';
var express = require('express');
var router = express.Router();
const bcrypt = require('bcrypt');
const saltRounds = 10;
const salts = require('./index');
const myPlaintextPassword = 'aaaaaa';

/**
 * 制御なしの非同期処理
 * @return { Object } Promise { <pending> } が出力
 * 理由： 25行目の出力の時点ではまだgenSalt関数の処理が終わっていないつまり、saltが無い状態だから
 */
// bcrypt.genSalt(saltRounds, (err, salt) => {
//   console.log(salt);//ここの処理を制御する前に出力しちゃうとpendingになる
//   return salt;
// });

// const salt = bcrypt.genSalt(saltRounds);
// console.log(salt);


/**
 * Promiseによる制御ありの非同期処理
 * この呼び出しを行うのが、パスワードを用いた新規作成のタイミング
 * @param { String } ここはユーザが入力した平文のパスワードを渡す。
 */
salts.generateHash(myPlaintextPassword).then((hash) => {
  console.log(hash);
});