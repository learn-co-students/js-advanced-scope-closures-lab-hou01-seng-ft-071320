function produceDrivingRange(range) {
    return function(dist1, dist2) {
        let distance = Math.abs(parseInt(dist1) - parseInt(dist2))
        if (distance > range) {
            let badDistance = distance - range
            return `${badDistance} blocks out of range`
        } else {
            let goodDistance = range - distance
            return `within range by ${goodDistance}`
        } 
    }
}

function produceTipCalculator(percent) {
    return function(checkTotal){
        return percent * checkTotal
    }
}

function createDriver(){
    let driverId = 0
    return class {
        constructor(name) {
            this.name = name
            this.id = ++driverId
        }
    }
}