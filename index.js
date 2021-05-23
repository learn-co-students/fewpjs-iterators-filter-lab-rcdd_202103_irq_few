// Code your solution here

function findMatching(drivers, name) {
  return drivers.filter(driver => driver.toLowerCase().includes(name.toLowerCase()))
}

function fuzzyMatch(drivers, letters) {
  return drivers.filter(driver => letters.toLowerCase() === driver.slice(0, letters.length).toLowerCase())
}

function matchName(drivers, name) {
  return drivers.filter(driver => driver.name.toLowerCase().includes(name.toLowerCase()))
}
