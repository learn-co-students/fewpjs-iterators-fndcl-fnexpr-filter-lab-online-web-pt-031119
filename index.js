const findMatching = (drivers, name) => {
    const match = drivers.filter(driver => driver.toLowerCase() === name.toLowerCase()) 
    return match 
}

const fuzzyMatch = (drivers, letters) => {
    const match = drivers.filter(driver => driver.indexOf(letters) === letters.indexOf(letters))
    return match 
}

const matchName = (drivers, name) => {
    const match = drivers.filter(object => object.name === name)
    return match 
}
