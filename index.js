function findMatching(drivers, string) {
  const matching = drivers.filter(driver => driver.toLowerCase() === string.toLowerCase());
  return matching;
}

function fuzzyMatch(drivers, string) {
  const matching = drivers.filter(driver => driver.indexOf(string) === string.indexOf(string));
  return matching;
}

function matchName(drivers, string) {
  const matching = drivers.filter(object => object.name === string)
  return matching
}
