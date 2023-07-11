const { nums, words } = require("./data/data.js");

// Every
const isEveryNumGreaterThan2 = (arrayIn) => {
  return arrayIn.every(element => element > 2)
  //
};

const isEveryWordShorterThan7 = (arrayIn) => {
return arrayIn.every(element => element.length < 7)
  //
};

// Filter

const arrayLessThan5 = (arrayIn) => {
  return arrayIn.filter(element => element < 5)
  //
};

const arrayOddLengthWords = (arrayIn) => {
  return arrayIn.filter(element => element.length % 2 === 1)
  //
};

// Find

const firstValDivisibleBy4 = (arrayIn) => {
  return arrayIn.find(element => element % 4 === 0)
  //
};

const firstWordLongerThan4Char = (arrayIn) => {
  return arrayIn.find(element => element.length > 4)
  
  //
};

// Find Index

const firstNumIndexDivisibleBy3 = (arrayIn) => {
return arrayIn.findIndex((element) => element % 3 === 0)
  //
};

const firstWordIndexLessThan2Char = (arrayIn) => {
  return arrayIn.findIndex((element) => element < 2)
  //
};

// For Each

const logValuesTimes3 = (arrayIn) => {
   arrayIn.forEach(element => console.log(element))
  //
};

const logWordsWithExclamation = (arrayIn) => {
  arrayIn.forEach(element => console.log(element))
  //
};

// Map

const arrayValuesSquaredTimesIndex = (arrayIn) => {
  return arrayIn.map((element, index) => element ** 2 * index)
  //or return arrayIn.map((element, index) => element * element * index)
  //
};

const arrayWordsUpcased = (arrayIn) => {
  return arrayIn.map(element => element.toUpperCase())
  //
};

// Some

const areSomeNumsDivisibleBy7 = (arr) => {
  const bySeven = (element) => element % 7
  return arr.some(bySeven)
  //
};

const doSomeWordsHaveAnA = (arr) => {
  const haveAna = (element) => element.includes("a")
  return arr.some(haveAna)
  //
};

module.exports = {
  isEveryNumGreaterThan2,
  isEveryWordShorterThan7,
  arrayLessThan5,
  arrayOddLengthWords,
  firstValDivisibleBy4,
  firstWordLongerThan4Char,
  firstNumIndexDivisibleBy3,
  firstWordIndexLessThan2Char,
  logValuesTimes3,
  logWordsWithExclamation,
  arrayValuesSquaredTimesIndex,
  arrayWordsUpcased,
  areSomeNumsDivisibleBy7,
  doSomeWordsHaveAnA,
};
