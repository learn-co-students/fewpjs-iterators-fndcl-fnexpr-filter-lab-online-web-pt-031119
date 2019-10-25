function findMatching(drivers, name) {
	let match = drivers.filter(driver => driver.toLowerCase() === name.toLowerCase())
	return match
}

function fuzzyMatch(drivers, name) {
	let match = drivers.filter(function(driver) {
		if (name[0] === driver[0] && name[1] === driver[1]) {
			return driver
		}
	})
	return match
}

function matchName(drivers, name) {
	let match = drivers.filter(function(driver) {
		if (driver.name === name) {
			return driver
		}
	})
	return match
}