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


const arrayOddLengthWords = () => {
  const result = words.filter(word => word.length % 2 !== 0);
  return result
};

// Find

const firstValDivisibleBy4 = () => {
  //
};

const firstWordLongerThan4Char = () => {
  //
};

// Find Index

const firstNumIndexDivisibleBy3 = () => {
  //
};

const firstWordIndexLessThan2Char = () => {
  //
};

// For Each

const logValuesTimes3 = () => {
  //
};

const logWordsWithExclamation = () => {
  //
};

// Map

const arrayValuesSquaredTimesIndex = () => {
  //
};

const arrayWordsUpcased = () => {
  //
};

// Some

const areSomeNumsDivisibleBy7 = () => {
  //
};

const doSomeWordsHaveAnA = () => {
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
