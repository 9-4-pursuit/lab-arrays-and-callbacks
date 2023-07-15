const { nums, words } = require("./data/data.js");

// Every
const isEveryNumGreaterThan2 = (arr) => {
  //
  return arr.every((el) => el > 2)
};

const isEveryWordShorterThan7 = (arr) => {
  //
  return arr.every(el => el.length < 7)
};

// Filter

const arrayLessThan5 = (arr) => {
  //
  return arr.filter((el) => el < 5)
};

const arrayOddLengthWords = (arr) => {
  //
  return arr.filter((el) => el.length % 2 !== 0)
};

// Find

const firstValDivisibleBy4 = (arr) => {
  //
  return arr.find((el) => el % 4 === 0)
};

const firstWordLongerThan4Char = (arr) => {
  //
  return arr.find((el) => el.length > 4)
};

// Find Index

const firstNumIndexDivisibleBy3 = (arr) => {
  //
};

const firstWordIndexLessThan2Char = (arr) => {
  //
};

// For Each

const logValuesTimes3 = (arr) => {
  //
};

const logWordsWithExclamation = (arr) => {
  //
};

// Map

const arrayValuesSquaredTimesIndex = (arr) => {
  //
};

const arrayWordsUpcased = (arr) => {
  //
};

// Some

const areSomeNumsDivisibleBy7 = (arr) => {
  //
};

const doSomeWordsHaveAnA = (arr) => {
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
