// Code your solution here
const findMatching = (array, string) => {
  return array.filter(x => x.toLowerCase() === string.toLowerCase())
}

 const fuzzyMatch = (array, string) => {
  return array.filter(x => x.slice(0, string.length) === string)
}

 const matchName = (array, string) => {
  return array.filter(x => x.name === string)
}