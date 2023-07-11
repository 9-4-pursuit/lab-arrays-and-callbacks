const { nums, words } = require("./data/data.js");

// Every
const isEveryNumGreaterThan2 = () => {
  return nums.every((nums) => nums >= 2);
};

const isEveryWordShorterThan7 = () => {
  return words.every((words) => words.length < 7);
};

// Filter

const arrayLessThan5 = () => {
  return nums.filter((nums) => nums < 5 );
};

const arrayOddLengthWords = () => {
  return words.filter((words) => words.length % 2 === 1);
};

// Find

const firstValDivisibleBy4 = () => {
  return nums.find((nums) => nums % 4 === 0);
};

const firstWordLongerThan4Char = () => {
  return words.find((words) => words.length >= 4);
};

// Find Index

const firstNumIndexDivisibleBy3 = () => {
  return nums.findIndex((nums) => nums % 3 === 0);
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
