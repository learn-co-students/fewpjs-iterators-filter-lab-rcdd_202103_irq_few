// Code your solution here
const findMatching =(drivers, name) =>drivers.filter((driver) =>
     driver.toLowerCase() === name.toLowerCase());


const fuzzyMatch =(drivers, name)=>drivers.filter((driver)=> 
     driver.slice(0, name.length) === name);


const matchName=(drivers,name)=>{
   return drivers.filter((driver)=> {
    return driver.name.toLowerCase() === name.toLowerCase();
  });
};