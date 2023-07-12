const { nums, words } = require("./data/data.js");

// Every
const isEveryNumGreaterThan2 = (numbers) => {
  return numbers.every((number) => number > 2)
};

const isEveryWordShorterThan7 = (sentence) => {
  return sentence.every((word) => word.length < 7)
};

// Filter

const arrayLessThan5 = (numbers) => {
  return numbers.filter((number) => number < 5)
};

const arrayOddLengthWords = (sentence) => {
  return sentence.filter((word) => word.length % 2 == 1)
};

// Find

const firstValDivisibleBy4 = (numbers) => {
  return numbers.find((number) => number % 4 == 0)
};

const firstWordLongerThan4Char = (sentence) => {
  return sentence.find((word) => word.length > 4)
};

// Find Index

const firstNumIndexDivisibleBy3 = (numbers) => {
  return numbers.findIndex((number) => number % 3 == 0)
};

const firstWordIndexLessThan2Char = (sentence) => {
  return sentence.findIndex((word) => word.length < 2)
};

// For Each

const logValuesTimes3 = (numbers) => {
  return numbers.forEach((number) => console.log(number * 3))
};

const logWordsWithExclamation = (sentence) => {
  return sentence.forEach((word) => console.log(`${word}!`))
};

// Map

const arrayValuesSquaredTimesIndex = (numbers) => {
  return numbers.map((number, index) => ((number * number) * index))
};

const arrayWordsUpcased = (sentence) => {
  return sentence.map((word) => word.toUpperCase())
};

// Some

const areSomeNumsDivisibleBy7 = (numbers) => {
  return numbers.some((number) => number % 7 === 0)
};

const doSomeWordsHaveAnA = (sentence) => {
  return sentence.some((word) => word.includes(`a`))
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
