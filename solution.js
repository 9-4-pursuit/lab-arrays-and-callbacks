const { nums, words } = require("./data/data.js");

// Every
const isEveryNumGreaterThan2 = (nums) => {
  //
// for (const num of nums){
// if (num < 2) return false

// }
// return true
const iGreaterThanThreshold = (currentValue) => currentValue >= 2;

//CHATGPT:  "iGreaterThanThreshold" is a function. It is a JavaScript arrow function defined using the const keyword. The function takes a single parameter called "currentValue" and returns a Boolean value indicating whether the currentValue is less than 40.

// console.log(nums.every(iGreaterThanThreshold))
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

const firstValDivisibleBy4 = (array) => {
// console.log()
  return array.find(element=> !(element%4))
  //
};

const firstWordLongerThan4Char = (array) => {

return array.find(word => word.length>4)
  //
};

// Find Index

const firstNumIndexDivisibleBy3 = (array) => {

  // const firstDiv3 = (currentValue) => !(currentValue%3) ;
  const isDivby3 = (element) => element%3 === 0;

  // let firstDivByThree =  array.find(num => num % 3 === 0)

  // console.log(array.indexOf(array.find(num => (num%3===0))))
  return array.findIndex(isDivby3)

// return array.indexOf(firstDiv3)

  //
};

const firstWordIndexLessThan2Char = (array) => {
  //
  //
  // findIndex
  const lessthan2characters = (element) => element.length < 2;
return array.findIndex(lessthan2characters)
};

// For Each

const logValuesTimes3 = (array) => {
  //

  array.forEach(element => console.log(element*3));


};

const logWordsWithExclamation = (array) => {
  //
  array.forEach(element => console.log(`${element}!`));



};

// Map
// Make a new array of each number squared and then multiplied by their index number
const arrayValuesSquaredTimesIndex = (array) => {
  //
  return array.map((num, index) => num*num*index)



};

const arrayWordsUpcased = (array) => {

  // Make a new array of all the words in all uppercase
  //
return array.map(x => x.toUpperCase())


};

// Some

const areSomeNumsDivisibleBy7 = (array) => {


return array.some(num => num%7 ===0)

  //
};

const doSomeWordsHaveAnA = (array) => {

return array.some(word => word.includes("a"))
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
