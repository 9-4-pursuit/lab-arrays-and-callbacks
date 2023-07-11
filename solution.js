const { nums, words } = require("./data/data.js");

// Every
const isEveryNumGreaterThan2 = (nums) => {
  if (nums.every > 2) {
    return true
  }
  return false
};

const isEveryWordShorterThan7 = (words) => {
  if (words.every(word => word.length < 7)) {
    return true
  }
  return false
};

// Filter

const arrayLessThan5 = (nums) => {
  const result = nums.filter(num => num < 5);
  return result
};


const arrayOddLengthWords = (words) => {
  const result = words.filter(word => word.length % 2 !== 0);
  return result
};

// Find

const firstValDivisibleBy4 = (nums) => {
  const result = nums.find(num => Number.isInteger(num / 4));
  // or   const result = nums.find(num => num % 4 === 0);
  return result
};

const firstWordLongerThan4Char = (words) => {
  const result = words.find(word => word.length > 4)
  return result
};

// Find Index

const firstNumIndexDivisibleBy3 = (nums) => {
  const index = nums.findIndex(num => num % 3 === 0);
  return index
};

const firstWordIndexLessThan2Char = (words) => {
  const index = words.findIndex(word => word.length < 2);
  return index
};

// For Each

const logValuesTimes3 = (nums) => {
  let newValue = nums.forEach * 3
  console.log(newValue)
};

const logWordsWithExclamation = (words) => {
  let newWords = words.forEach + "!"
  console.log(newWords)
};

// Map

const arrayValuesSquaredTimesIndex = (nums) => {
  const newArr = nums.map((num, index) => num ** 2 * index);
  return newArr
};

const arrayWordsUpcased = (words) => {
  const newArr = words.map(word => word.toUpperCase())
  return newArr
};

// Some

const areSomeNumsDivisibleBy7 = (nums) => {
  const result = nums.some(num => num % 7 === 0);
  return result
};

const doSomeWordsHaveAnA = (words) => {
  const result = words.some(word => word.includes('a'));
  return result
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
