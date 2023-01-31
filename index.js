// Code your solution in this file!
function distanceFromHqInBlocks(someValue) {
    if (someValue > 42) {
        return someValue - 42
    } else {
        return 42 - someValue
    }
}

function distanceFromHqInFeet(someValue) {
    return distanceFromHqInBlocks(someValue) * 264
}

function distanceTravelledInFeet(start, destination) {
    if (start > destination) {
        return (start - destination) * 264
    } else {
        return (destination - start) * 264
    }
}

function calculatesFarePrice(start, destination) {
    let n = distanceTravelledInFeet(start, destination)
    if (n <= 400) {
        return 0
    } else if (n > 400 && n <= 2000) {
        return (n - 400) * 0.02
    } else if (n > 2000 && n <= 2500) {
        return 25
    } else if (n > 2500) {
        return 'cannot travel that far'
    }
}
