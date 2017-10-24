console.log('Starting app.js');

const fs = require('fs');
const os = require('os');
const notes = require('./notes.js');
const _ = require('lodash');

var filteredArray = _.uniq(['Mike']);

console.log(filteredArray);

// console.log(_.isString(true));
// console.log(_.isString('Phil'));

// var res = notes.add(2, 3);
// console.log(res);
// var user = os.userInfo();

// fs.appendFile('greetings.txt', `Hello, ${user.username}! You are ${notes.age}.`, function (err){
//     if(err){
//         console.log('Unable to write to file');
//     }
// });
