function findMatching(drivers, name) {
	let match = drivers.filter(driver => driver.toLowerCase() === name.toLowerCase())
	return match
}
