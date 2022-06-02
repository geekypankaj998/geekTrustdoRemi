const { CONSTANTS } = require('../config/constants');

const helper = require('./helper');

const Subscription = require('./SubscriptionClass');



let calc = function(inputLines){

  let currSubs = null;  
  for(let line of inputLines){
    
     let currLine = line.split(" ");
     if(currLine[0]=="START_SUBSCRIPTION"){
         if(helper.dateValidator(currLine[1])==false){   //checking validity of date
            console.log("INVALID_DATE");
            continue;
         }
        //  console.log("Before Print");
         currSubs = new Subscription(currLine[1]);
        //  console.log("After Print");
     }
     
     else if(currLine[0]=="ADD_SUBSCRIPTION"){
         if(currSubs==null){
           console.log("ADD_SUBSCRIPTION_FAILED INVALID_DATE");
           continue;
         }
        //  console.log("Before Print");
         currSubs.servicePlanCostDecider(currLine[1],currLine[2]); 
        //  console.log("After Print");
     }
     else if(currLine[0]=="ADD_TOPUP"){
      if(currSubs==null){
        console.log("ADD_TOPUP_FAILED INVALID_DATE");
        continue;
      }
      // console.log("Before Print");
         currSubs.addTopUp(currLine[1],currLine[2]);
        //  console.log("After Print");
     }
     else{
      if(currSubs==null){
        console.log("SUBSCRIPTIONS_NOT_FOUND");
        continue;
      }
      // console.log("Before Print");
         let ans = currSubs.printResult();
        //  console.log("After Print");
         return ans;
     }
  }
}

module.exports = {
  calc 
}