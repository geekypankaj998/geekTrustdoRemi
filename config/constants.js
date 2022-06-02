const CONSTANTS = {

  "SERVICE_TO_PLAN_COST_LIST" : {
    "MUSIC" : {
      "FREE" : {
         "COST" : 0,
         "TIME" : 1 
      },
      "PERSONAL" : {
        "COST" : 100,
         "TIME" : 1 
      },
      "PREMIUM" : {
        "COST" : 250,
         "TIME" : 3 
      }  
    },
    "VIDEO" : {
      "FREE" : {
         "COST" : 0,
         "TIME" : 1 
      },
      "PERSONAL" : {
        "COST" : 200,
         "TIME" : 1 
      },
      "PREMIUM" : {
        "COST" : 500,
         "TIME" : 3 
      }  
    },
    "PODCAST" : {
      "FREE" : {
         "COST" : 0,
         "TIME" : 1 
      },
      "PERSONAL" : {
        "COST" : 100,
        "TIME" : 1 
      },
      "PREMIUM" : {
        "COST" : 300,
         "TIME" : 3 
      }  
    }
  },
  
  TOP_UP :{
    "FOUR_DEVICE" : {
        "COST" : 50,
        "TIME" : 1
    },
    "TEN_DEVICE" :{
         "COST" : 100,
         "TIME" : 1
    }
  },

  "MONTHS" : {
   0 : 31,
   1 : 28,
   2 : 31,
   3 : 30,
   4 : 31,
   5: 30,
   6 : 31,
   7 : 31,
   8 : 30,
    9 : 31,
    10  : 30,
    11  : 31   
  },
  TOTAL_MONTHS : 12,
  LEAP_COUNT : 28,
  DEADLINE_BEFORE : 10
}

module.exports = {CONSTANTS}