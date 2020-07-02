/**
 *  Problem 1
 *  If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
 *  Find the sum of all the multiples of 3 or 5 below 1000.
 *  LINK: https://projecteuler.net/problem=1
 */

const divisiors = [3, 5];

const checkDivisiorsForNumber = (divisiors, numberToCheck) => {
    return divisiors.some(divisior => numberToCheck % divisior === 0) ? numberToCheck : null;
};

const findSum = (divisiors, range, sum = 0, actuallNumber = 0) => {
    return actuallNumber === range ? sum : findSum(divisiors, range, sum + checkDivisiorsForNumber(divisiors, actuallNumber), ++actuallNumber);
};

console.log('sum =', findSum(divisiors, 1000));