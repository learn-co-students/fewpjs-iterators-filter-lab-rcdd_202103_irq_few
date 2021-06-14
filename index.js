// Code your solution here
/*

 findMatching()
      1) returns all drivers that match the passed in name
      2) returns matching drivers if case does not match but letters do
      3) returns an empty array if there is no match
    fuzzyMatch()
      4) returns a driver if beginning provided letters match
      5) does not return drivers if only middle or ending letters match
      6) does not return drivers if only middle or ending letters match
    matchName()
      7) accesses the data structure to check if name matches


  0 passing (499ms)
  7 failing

  1) index.js
       findMatching()
         returns all drivers that match the passed in name:
     ReferenceError: findMatching is not defined
      at Context.<anonymous> (test/indexTest.js:8:7)

  2) index.js
       findMatching()
         returns matching drivers if case does not match but letters do:
     ReferenceError: findMatching is not defined
      at Context.<anonymous> (test/indexTest.js:15:7)

  3) index.js
       findMatching()
         returns an empty array if there is no match:
     ReferenceError: findMatching is not defined
      at Context.<anonymous> (test/indexTest.js:21:7)

  4) index.js
       fuzzyMatch()
         returns a driver if beginning provided letters match:
     ReferenceError: fuzzyMatch is not defined
      at Context.<anonymous> (test/indexTest.js:35:7)

  5) index.js
       fuzzyMatch()
         does not return drivers if only middle or ending letters match:
     ReferenceError: fuzzyMatch is not defined
      at Context.<anonymous> (test/indexTest.js:39:7)

  6) index.js
       fuzzyMatch()
         does not return drivers if only middle or ending letters match:
     ReferenceError: fuzzyMatch is not defined
      at Context.<anonymous> (test/indexTest.js:43:7)

  7) index.js
       matchName()
         accesses the data structure to check if name matches:
     ReferenceError: matchName is not defined
      at Context.<anonymous> (test/indexTest.js:67:7)
*/

function findMatching(arr,str){
  return arr.filter(element=>{
    if(str.toLowerCase()===(element.toLowerCase())){
      return element;
    }
  });
}

function fuzzyMatch(arr,str){
  return arr.filter(element=>{
    if(str == (element.slice(0,str.length))){
      return element;
    }
  });
}

fuzzyMatch([ 'Sammy', 'Sarah', 'Sally' ],'sa')

function matchName(arr,str){
  return arr.filter(element=>{
    if(str === (element.name)){
      return element;
    }
  });
}
