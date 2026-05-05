const drivers = ["Antonia", "Nuru", "Amari", "Mo"];

const returnFirstTwoDrivers = (driversArray) => {
  return driversArray.slice(0, 2);
};
const firstTwo = returnFirstTwoDrivers(drivers);
console.log(firstTwo);

const returnLastTwoDrivers = (driversArray) => {
  return driversArray.slice(-2);
};
const lastTwo = returnLastTwoDrivers(drivers);
console.log(lastTwo);

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
 
const createFareMultiplier = (multiplier) => {
    return (fare) => {
        return fare * multiplier;
    };
};
const fareMultiplier = createFareMultiplier(2);
const fareQuintuplier = createFareMultiplier(5);

function fareDoubler(fare) {
    return fare * 2;
}
function fareTripler(fare) {
    return fare * 3;
}
const selectDifferentDrivers = (driversArray, callbackFunction) => {
    return callbackFunction(drivers);
};


    
