const { nums, words } = require("./data/data.js");

// Every
const isEveryNumGreaterThan2 = (nums) => {
  //
  return nums.every((el) => el > 2);
};
const isEveryWordShorterThan7 = (words) => {
  //
  return words.every((el) => el.length < 7);
};

// Filter

const arrayLessThan5 = (nums) => {
  //
  return nums.filter((num) => num < 5);
};

const arrayOddLengthWords = (words) => {
  return words.filter((word) => word.length % 2 === 1);
  //
};

// Find

const firstValDivisibleBy4 = (nums) => {
  //
  return nums.find((el) => el % 4 === 0);
};

const firstWordLongerThan4Char = (words) => {
  //
  return words.find((word) => word.length > 4);
};

// Find Index

const firstNumIndexDivisibleBy3 = (num) => {
  //
  return nums.findIndex((num) => num % 3 === 0 )
};

const firstWordIndexLessThan2Char = (word) => {
  //
  return words.findIndex((word) => word.length < 2  )
};

// For Each

const logValuesTimes3 = (nums) => {
  return nums.forEach((num) => num * 3)
  //
};

const logWordsWithExclamation = (words) => {
  //
  return words.forEach((word) => word + "!" )
};

// Map

const arrayValuesSquaredTimesIndex = (nums) => {
  //
  return nums.map((el,i) => el * el * i)
};

const arrayWordsUpcased = (words) => {
  //
  return words.map((el) => el.toUpperCase())
}; 

// Some

const areSomeNumsDivisibleBy7 = (nums) => {
  //
  return nums.some((num) => num % 7 === 0 )
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
