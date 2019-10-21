// Code your solution here
function findMatching(array, name){
  return array.filter(driver => driver.toLowerCase() === name.toLowerCase());
}

function fuzzyMatch(array, name){
  return array.filter(driver => driver[0] === name[0]);
}

function matchName(array, name){
  return array.filter(driver => driver.name === name);
}