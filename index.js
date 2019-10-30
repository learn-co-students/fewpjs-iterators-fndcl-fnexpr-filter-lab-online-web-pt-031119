function findMatching(driversArray, driver) {
  return driversArray.filter(
    driverMatch => driverMatch.toLowerCase() === driver.toLowerCase()
  );
}

function fuzzyMatch(driversArray, letter) {
  return driversArray.filter(
    driverMatch => driverMatch.toLowerCase().indexOf(letter.toLowerCase()) === 0
  );
}

function matchName(driversArray, exactName) {
  return driversArray.filter(driver => driver.name === exactName);
}
