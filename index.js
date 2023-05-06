// Module package CORE
// Module package EXTERNAL
//const moment = require("moment");
// Module package FILE
//const calculete = require("./hisob.js");

// const natija = calculete.kopaytirish(80, 20);
// console.log("Natija", natija);
// console.log("***********");

// const natija2 = calculete.qoshish(70, 20);
// console.log("Natija", natija2);
// console.log("***********");

// const natija3 = calculete.ayirish(70, 20);
// console.log("Natija", natija3);

//console.log(require("module").wrapper);

//console.log(arguments);

const Account = require("./account");
Account.tellMeAboutClass();
Account.tellMeTime();

console.log("=============");

const myAccount = new Account("Albert", 200000, 974555766654);
myAccount.giveMeDetails();

myAccount.makeDeposit(1000000);

// bugatti chiyron 2,4mln usd
// ferrari  400000 usd
// myAccount.withdrawMoney(2400000);
myAccount.withdrawMoney(400000);
myAccount.makeDeposit(200000);
