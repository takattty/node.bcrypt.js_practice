'use strict';
const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const saltRounds = 10;
//const myPlaintextPassword = 'hello';

/**
 * Promiseによる制御ありの非同期処理
 * @param { String } ユーザーが入力した平文パスワードが渡される
 * @return { String } ハッシュ化された値が返ってきます
 * 理由： Promiseによる制御で呼び出した関数がしっかり処理し終えてから.thenの処理を始める様に実装している為
 */
module.exports.generateHash = (myPlaintextPassword) => {
  return new Promise((resolve, reject) => {
    bcrypt.genSalt(saltRounds, (err, salt) => {
      bcrypt.hash(myPlaintextPassword, salt, (err, hash) => {
        resolve (hash);
      });
    });
  });
}

// generateSalt().then((salt) => {
//   console.log(salt);
// });