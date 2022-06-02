let dateValidator =(str)=>{
   let strDate = str.split('-');
   let dateV = Number(strDate[0]);
   let monthV = Number(strDate[1]);
   let yearV = Number(strDate[2]);
   if(dateV<=0 || dateV>=31){
      return false;   
   }
   if(monthV<=0 || monthV>12){
      return false;
   }
   if(strDate[2].length<4){
      return false;
   }
   return true;
}
let isLeapYear =(year)=>{
    if(year%100==0){
       return (year%400) ? true : false ;
    }
    else{
       return (year%4) ? true : false ; 
    }
}

let padDate =(dateV,monthV)=>{
   dateV = String(dateV).padStart(2,'0');
   monthV = String(monthV).padStart(2,'0');
   return [dateV,monthV];
}
module.exports = {
  dateValidator,
  isLeapYear,
  padDate
}