const { nums, words } = require("./data/data.js");

// Every
const isEveryNumGreaterThan2 = (nums) => {
const iGreaterThanThreshold = (currentValue) => currentValue >= 2;
console.log(nums.every(iGreaterThanThreshold))
return nums.every(iGreaterThanThreshold)
};
  //

const isEveryWordShorterThan7 = (words) => {

const WordShorterThan7= (currentValue) => currentValue.length <7;
return words.every(WordShorterThan7)
  //
};

// Filter

const arrayLessThan5 = (nums) => {
  return nums.filter(num => num < 5)
  //
};

const arrayOddLengthWords = (words) => {
  //
return words.filter(word => word.length%2===1)

};

// Find

const firstValDivisibleBy4 = (array) => {
  return array.find(element => !(element%4))
  //
};

const firstWordLongerThan4Char = (array) => {
  return array.find(word => word.length>4)//
};

// Find Index

const firstNumIndexDivisibleBy3 = (array) => {
  // const index = array.findIndex(num => num % 3 === 0);
  // console.log(index);
  // return index;
  const isDivby3 = (element) => element%3 === 0;
  return array.findIndex(isDivby3)
};

const firstWordIndexLessThan2Char = (array) => {
  const lessthan2characters = (element) => element.length < 2;
  return array.findIndex(lessthan2characters)
  //
};

// For Each

const logValuesTimes3 = (array) => {
  array.forEach(element => console.log(element*3))
  //
};

const logWordsWithExclamation = (array) => {
  array.forEach(element => console.log(`${element}!`))
  //
};

// Map

const arrayValuesSquaredTimesIndex = (array) => {
  return array.map((num, index) => num*num*index)
  //
};

const arrayWordsUpcased = (array) => {
  //
  return array.map(x => x.toUpperCase())
};

// Some

const areSomeNumsDivisibleBy7 = (array) => {
  return array.some(num => num%7 === 0)
  //
};

const doSomeWordsHaveAnA = (array) => {
 return array.some(word => word.includes(`a`));
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
