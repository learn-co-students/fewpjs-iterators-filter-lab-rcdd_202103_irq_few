// Code your solution here

function findMatching(drivers, name){
  let array = [];
  array = drivers.filter(driver=> driver.toLowerCase() === name.toLowerCase());
  return array;
}

function fuzzyMatch (drivers, name){
  let array = [];
  array = drivers.filter(driver=> name.includes(driver[0]));
  return array;
}

function matchName (drivers, name){
  let array = [];
  array = drivers.filter(driver=> driver.name === name);
  return array;
}
