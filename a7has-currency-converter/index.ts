#! /usr/bin/env node

import inquirer from "inquirer";

const currency:any = {
    USD: 1, // Base currency !
    EUR: 0.91,
    GBP: 0.76,
    INR: 74.57,
    PKR: 280
};

let userAnswer = await inquirer.prompt(
   [ 
      {
        message:"Enter From Currency",
        name:"from",
        type:"list",
        choices:["USD","EUR","GBP","INR","PKR"]
      },
      {
        message:"Enter To Currency",
        name:"to",
        type:"list",
        choices:["USD","EUR","GBP","INR","PKR"]
      },
      {
        message:"Enter your Amount :",
        name:"amount",
        type:"number"
      }
   ] 
);

// logical statments!

let fromAmount = currency[userAnswer.from]; // Exchange Rate !
let toAmount   = currency[userAnswer.to]; //  Exchange Rate !
let amount = userAnswer.amount;

let baseAmount = amount / fromAmount // US Base Currency // line no 6 !
let convertedAmount = baseAmount * toAmount
console.log(convertedAmount);
