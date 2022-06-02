const driver = require('../controller/driver');
let assert = require('chai').assert;

describe(' Doremi Subscription Problem ', function() {   
    it('The input is various services and corr plans', function(){
      let testArray = [
      "START_SUBSCRIPTION 05-02-2022","ADD_SUBSCRIPTION MUSIC PERSONAL","ADD_SUBSCRIPTION VIDEO PREMIUM","ADD_SUBSCRIPTION PODCAST FREE","ADD_TOPUP FOUR_DEVICE 2","PRINT_RENEWAL_DETAILS"
      ];
      let ans = `RENEWAL_REMINDER MUSIC 23-02-2022\nRENEWAL_REMINDER VIDEO 25-04-2022\nRENEWAL_REMINDER PODCAST 23-02-2022\nRENEWAL_AMOUNT 700`;             
      assert.equal(driver.calc(testArray),ans);
    });
  });

describe(' Doremi subscription Problem ', function() {   
    it('The input is various services and corr plans', function(){
      let testArray = [
        "START_SUBSCRIPTION 08-12-2019","ADD_SUBSCRIPTION MUSIC PREMIUM","ADD_SUBSCRIPTION PODCAST FREE","ADD_TOPUP TEN_DEVICE 3","PRINT_RENEWAL_DETAILS"
        ];
        let ans = `RENEWAL_REMINDER MUSIC 26-02-2020\nRENEWAL_REMINDER PODCAST 29-12-2019\nRENEWAL_AMOUNT 550`;
               
      assert.equal(driver.calc(testArray),ans); 
    });

  });    


