function produceDrivingRange(setRange) {
    return function (first,second) {
      let result = setRange - Math.abs(Number(first.split('th')[0])-Number(second.split('th')[0]));
      switch(true){
        case result < 0:
            return `${Math.abs(result)} blocks out of range`;
            break;
        case result >= 0:
            return `within range by ${result}`;
            break;
        }
    };
}

const produceTipCalculator = function(tipPercent){
    return function(fare){
        return fare*tipPercent
    }
}

const createDriver = function (){
    let driverId = 0;
    return class{
        constructor(name){
            this.name = name
            this.id = ++driverId;
        }
    }
}
