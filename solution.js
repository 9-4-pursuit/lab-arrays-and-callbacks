const { nums, words } = require("./data/data.js");

// Every
const isEveryNumGreaterThan2 = (nums) => {
    if (nums.every > 2) {
      return true
    }
    return false

    // return nums.every((nums) => nums >= 2);




  //


};

const isEveryWordShorterThan7 = (words) => {

  if (words.every(word => word.length < 7)) {
    return true
  }
  return false
  //
};

// Filter

const arrayLessThan5 = (nums) => {

  return nums.filter(num => num < 5)
  //
};

const arrayOddLengthWords = (words) => {

  return words.filter(word => word.length % 2 === 1)
  //
  
};

// Find

const firstValDivisibleBy4 = (nums) => {
  //

  return nums.find(num => num % 4 === 0)


};

const firstWordLongerThan4Char = (words) => {

  return words.find(word => word.length > 4)
  //
};

// Find Index

const firstNumIndexDivisibleBy3 = (nums) => {

  return nums.findIndex(num => num % 3 === 0)
  //
};

const firstWordIndexLessThan2Char = (word) => {
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
