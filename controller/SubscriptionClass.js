const { CONSTANTS } = require("../config/constants.js");

const helper = require('./helper');

class Subscription {
  //preCheck Date Format before calling this Function
  constructor(startDate) {
    this.services = []; //services
    this.serviceChosen = {
      MUSIC: false,
      VEDIO: false,
      PODCAST: false
    };
    this.startDate = startDate;
    this.dateObj;
    this.expiryDate = [];
    this.topUp = {
      type: "",
    },
    this.isTopUpDone = false;
    this.totalCharge = 0;
  }
   servicePlanCostDecider(service, plan) {
    //here we will try to fetch for a specific service the plan user have selected the cost for that
    // console.log(service+" "+plan);
    if (this.serviceChosen[service]) {
      //service already taken
      console.log("ADD_SUBSCRIPTION_FAILED DUPLICATE_CATEGORY");
      return;
    }
    // console.log("Ser - "+service+" Plan - "+plan);
    this.serviceChosen[service] = true;

    //Now adding this serviec into service array
    this.services.push(service);

    //finding this service plan cost

    let planCost = CONSTANTS["SERVICE_TO_PLAN_COST_LIST"][service][plan]["COST"];
    let planTime = CONSTANTS["SERVICE_TO_PLAN_COST_LIST"][service][plan]["TIME"];
    // console.log(" The service is "+service+" and the plan is "+plan+" and the time is "+planTime);
    this.serviceExpiryDateDecider(planTime);
    this.totalCharge = this.totalCharge + Number(planCost);
  }

  serviceExpiryDateDecider(planTime){
    //forEach service we will calculate and save info for expiry in our expiryDate array
    
    let currSubsDate = this.startDate.split("-");
    
    let currDate = Number(currSubsDate[0]);
    let currMonth = Number(currSubsDate[1]);
    let currYear = Number(currSubsDate[2]);
    
    this.dateObj = new Date(currYear.toString(),(currMonth-1).toString(),currDate.toString());
    // console.log("Current Date Obj ",this.dateObj);
    let totalDays = 0;
      currMonth=currMonth-1;
      totalDays = CONSTANTS["MONTHS"][currMonth];
      // console.log("Curr Month Days : ",totalDays);
      if((helper.isLeapYear(currYear))==true){
        totalDays = totalDays + 1;
      }
     
    let secMonth = 0 ;
    let thirdMonth = 0 ;
    let secMonthDay=0;
    let thirdMonthDay=0;

    if(planTime==3){
       secMonth = (currMonth + 1)%(CONSTANTS.TOTAL_MONTHS);
       thirdMonth = (currMonth + 2)%(CONSTANTS.TOTAL_MONTHS); 
         
    secMonthDay = CONSTANTS["MONTHS"][secMonth];
    thirdMonthDay =  CONSTANTS["MONTHS"][thirdMonth];
    // console.log("Sec month Count : ",secMonthDay);
    // console.log("Third month Count : ",thirdMonthDay);

    if(secMonthDay == CONSTANTS.LEAP_COUNT){
       //possibility of leap year check via helper
       if((helper.isLeapYear(currYear+1))==true){
        secMonthDay += Number(1);
      }
    }
    if(thirdMonthDay == CONSTANTS.LEAP_COUNT){
      //possibility of leap year check via helper
      if((helper.isLeapYear(currYear+1))==true){
       thirdMonthDay += Number(1);
     }
    }
   }
   totalDays = totalDays + secMonthDay + thirdMonthDay  - CONSTANTS.DEADLINE_BEFORE;
   this.dateObj.setDate(this.dateObj.getDate() + totalDays -1);
    
   let finalDate = this.dateObj.getDate();
   let finalMonth = this.dateObj.getMonth()+1;
   let finalYear = this.dateObj.getFullYear();
   
   let paddDateValue = helper.padDate(finalDate,finalMonth);    
   let expireDate = paddDateValue[0]+"-"+paddDateValue[1]+"-"+finalYear;
   this.expiryDate.push(expireDate);
  //  console.log(expireDate);

  }

  addTopUp(type, monthCount) {
    //to fill TopUp and check TopUp validilty 
    if (this.isTopUpDone == true) {
      console.log("ADD_TOPUP_FAILED DUPLICATE_TOPUP");
      return;
    }
    if (this.services.length == 0) {
      console.log("SUBSCRIPTIONS_NOT_FOUND");
      return;
    }
    if (this.isTopUpDone == false) {
      //firstTime
      this.isTopUpDone = true;
      this.addTopUp["type"] = type;
      let midProp = CONSTANTS["TOP_UP"][type]["COST"];

      this.totalCharge =
        this.totalCharge +
        Number(CONSTANTS["TOP_UP"][type]["COST"] * Number(monthCount));

    }
  }

  printResult() {
    //forEach service there subsequent expiry dates and also the total renewal charge need to be paid
    if (this.services.length == 0) {
      console.log("SUBSCRIPTIONS_NOT_FOUND");
      return;
    }
    let ans="";
    for (let itr = 0; itr < this.services.length; itr++) {
      let currAns = "RENEWAL_REMINDER";
      currAns = currAns + " " + this.services[itr];
      currAns = currAns + " " + this.expiryDate[itr];
      console.log(currAns);
      ans+=currAns+"\n";
    }
    // 
    
    console.log("RENEWAL_AMOUNT " + this.totalCharge);
    ans+="RENEWAL_AMOUNT " + this.totalCharge;
    return ans;
  }
}

module.exports = Subscription 
