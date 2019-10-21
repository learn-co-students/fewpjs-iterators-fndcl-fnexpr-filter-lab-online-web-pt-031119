function findMatching(drivers, match) {
    return drivers.filter(driver => driver.toLowerCase() === match.toLowerCase())
}

function fuzzyMatch(drivers, chars) {
    return drivers.filter(driver => driver.startsWith(chars))
}

function matchName(drivers, match) {
    return drivers.filter(driver => driver.name === match)
}
