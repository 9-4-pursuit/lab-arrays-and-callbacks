const { nums, words } = require("./data/data.js");


// Every
const isEveryNumGreaterThan2 = givenArr => {
  return givenArr.every(num => num > 2);
};

const isEveryWordShorterThan7 = givenArr => {
  return givenArr.every(word => word.length < 7);
};


// Filter
const arrayLessThan5 = givenArr => {
  return givenArr.filter(num => num < 5);
};

const arrayOddLengthWords = givenArr => {
  return givenArr.filter(word => word.length % 2 === 1);
};


// Find
const firstValDivisibleBy4 = givenArr => {
  return givenArr.find(num => num % 4 === 0);
};

const firstWordLongerThan4Char = givenArr => {
  return givenArr.find(word => word.length > 4);
};


// Find Index
const firstNumIndexDivisibleBy3 = givenArr => {
  return givenArr.findIndex(num => num % 3 === 0);
};

const firstWordIndexLessThan2Char = givenArr => {
  return givenArr.findIndex(word => word.length < 2);
};


// For Each
const logValuesTimes3 = givenArr => {
  givenArr.forEach((num, index) => {
    if (index < 3) console.log(num);
    else return;
  });
};

const logWordsWithExclamation = givenArr => {
  givenArr.forEach(word => console.log(`${word}!`));
};


// Map
const arrayValuesSquaredTimesIndex = givenArr => {
  return givenArr.map((num, index) => num = Math.pow(num, 2) * index);
};

const arrayWordsUpcased = givenArr => {
  return givenArr.map(word => word.toUpperCase());
};


// Some
const areSomeNumsDivisibleBy7 = givenArr => {
  return givenArr.some(num => num % 7 === 0);
};

const doSomeWordsHaveAnA = givenArr => {
  return givenArr.some(word => word.includes('a'));
};


// BONUS: Reduce
//for both numbers and words arrays
//pass the desired array as argument
const addOrConcatenateAllElements = givenArr => {
  return givenArr.reduce((acc, curr) => acc + curr);
}

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
