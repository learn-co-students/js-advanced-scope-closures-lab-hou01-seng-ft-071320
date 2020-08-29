function produceDrivingRange(range){
 return function (str1, str2){
   if (parseInt(str2)-parseInt(str1) < range){
     return `within range by ${range-(parseInt(str2)-parseInt(str1))}`
      }
     else if (parseInt(str2)-parseInt(str1) > range){
     return `${(parseInt(str2)-parseInt(str1))-range} blocks out of range`
      }
    }
}

function produceTipCalculator(rate){
  return function(fare){
    return fare * rate
  }
}

function createDriver(){
  let driverId=0;
  return class Driver{
    constructor(name){
      this.name=name;
      this.id=++driverId;
    }
  }
}
    const Driver=createDriver();

