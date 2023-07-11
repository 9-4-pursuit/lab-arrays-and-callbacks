const { nums, words } = require("./data/data.js");

// Every
const isEveryNumGreaterThan2 = (nums) => {
  //
// for (const num of nums){
// if (num < 2) return false

// }
// return true
const iGreaterThanThreshold = (currentValue) => currentValue >= 2;
console.log(nums.every(iGreaterThanThreshold))
return nums.every(iGreaterThanThreshold)
};

const isEveryWordShorterThan7 = (array) => {
  //
  // if(word.length < 7){return true}
  // return false

  const WordShorterThan7 = (currentValue) => currentValue.length <7 ;
return array.every(WordShorterThan7)

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
