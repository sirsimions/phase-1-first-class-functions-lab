// Code your solution in this file!


const returnFirstTwoDrivers = function(drivers){
    drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];
    const twoDrivers = drivers.slice(0,2);
    return twoDrivers;
}
const  returnLastTwoDrivers = function(drivers){
    drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];
    return drivers.slice(drivers.length-2);
}

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(fareAmount){
    return (multiplierFactor) => fareAmount * multiplierFactor;
    }

const fareDoubler = function(fareAmount){
    return createFareMultiplier(10)(2);
}
const fareTripler =function(fareAmount){
     return createFareMultiplier(12)(3);
 }

function selectDifferentDrivers(drivers, returnFirstTwoDrivers){
    return returnFirstTwoDrivers(drivers);
}



