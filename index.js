// Code your solution here
function findMatching (list, name) {
  return list.filter((driverName) => driverName.toLowerCase() === name.toLowerCase());
}

function fuzzyMatch (list, partialName) {
  let lengthOfName = partialName.length;
  return list.filter((driverName) => driverName.slice(0, lengthOfName) === partialName);
}

function matchName (list, name) {
  return list.filter((driver) => driver.name.toLowerCase() === name.toLowerCase());
}