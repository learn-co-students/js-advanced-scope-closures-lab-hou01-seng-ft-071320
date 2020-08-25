

function produceDrivingRange(dist) {
    return function(block1, block2) {
        let overDist = dist - Math.abs(Number(block1.slice(0,2)) - Number(block2.slice(0,2)));
        if (overDist >= 0){
            return `within range by ${overDist}`;
        } 
        else{
            return `${Math.abs(overDist)} blocks out of range`;
        }
    };
  }

function produceTipCalculator(percentage){
    return function(fare) {
        return fare * percentage;
    };
}

let id = 0;
class Driver {
    constructor(name){
        this.name = name;
        this.id = ++id;
    }
}

function createDriver() {
    let driverId = 0;
    return class {
        constructor(name){
            this.name = name;
            this.id = ++driverId;
        }
    }
}