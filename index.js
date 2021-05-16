// Code your solution here

function findMatching(listname, name){
  return listname.filter(function (driverName) {
    return driverName.toLowerCase() === name.toLowerCase();
  });
}

// function fuzzyMatch(listname,name){
  // let lengthOfName = name.length;
  //   return listname.filter(function (driverName) {
  //   return driverName.toLowerCase() === name.toLowerCase();
  // });
  
// }


function fuzzyMatch (list, partialName) {
  let lengthOfName = partialName.length;
  return list.filter(function (driverName) {
    return driverName.slice(0, lengthOfName) === partialName;
  });
}

function matchName(listname,name){
  return listname.filter(function (driverName) {
    return driverName.name.toLowerCase() === name.toLowerCase();
  });
}