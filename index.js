// Code your solution here

const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby'];


function findMatching(drivers, input) {
  let matchingDrivers = drivers.filter(driver => {
    if (driver.toUpperCase() == input.toUpperCase()) {
      return driver;
    } else {
      return false;
    }
  })
    return matchingDrivers
};


function fuzzyMatch(drivers, input) {
  let fuzzyMatchingDrivers = drivers.filter(driver => {
    if (driver.startsWith(input)) {
      return driver;
    } else {
      return false;
    }
  })
    return fuzzyMatchingDrivers;
}

function matchName(drivers, input) {

};

function getShortMessages(messages) {
  return messages
    .filter(function(obj) {
      return obj.message.length <= 50;
    })
