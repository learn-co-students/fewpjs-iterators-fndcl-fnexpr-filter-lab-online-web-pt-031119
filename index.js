  function findMatching(drivers, name) {
    let result = drivers.filter(driver => {

    let driver2 = driver.toLowerCase();
    let name2 = name.toLowerCase();

    return driver2 === name2;
  });
  return result;
  }


  function fuzzyMatch(drivers, letters) {
    let result = drivers.filter(driver => {
      let driverLetters = driver.charAt(0) + driver.charAt(1);
      return driverLetters === letters


    });
  return result;
  }


  function matchName(drivers,name){
    let result = drivers.filter(driver => {
    return driver.name === name });
    return result;
  }
