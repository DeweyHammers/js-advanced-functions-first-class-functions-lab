const returnFirstTwoDrivers = (array) => {
  return array.slice(0, 2);
} 

const returnLastTwoDrivers = (array) => {
  return array.slice(2, array.length);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = (num) => {
  return () => {return num * num}
}

const fareDoubler = (num) => {
  return num += num
}

const fareTripler = (num) => {
  return num + num + num
}

const selectDifferentDrivers = (drivers, func) => {
  return func(drivers)
}