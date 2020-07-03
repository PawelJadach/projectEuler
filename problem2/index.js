/**
 *  Problem 2
 *  Each new term in the Fibonacci sequence is generated by adding the previous two terms. By starting with 1 and 2, the first 10 terms will be:
 *  1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...
 *  By considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even-valued terms.
 *  LINK: https://projecteuler.net/problem=2
 */

const getFibbonaciNumbers = (maxNumber, tab = [1, 2]) => {
    return tab[tab.length - 1] > maxNumber ? tab.slice(0, tab.length - 1) : getFibbonaciNumbers(maxNumber, [...tab, tab[tab.length - 2] + tab[tab.length - 1]]);
};

const filterEven = tabToFilter => tabToFilter.filter(num => num % 2 === 0);

const sumTableValues = tab => tab.reduce((acc, num) => acc + num, 0);

const getSumOfEvenFibonnaciNumbersBeforeNumber = number => {
    const fibonacciNumbers = getFibbonaciNumbers(number);
    const filteredFibonacciNumbers = filterEven(fibonacciNumbers);

    return sumTableValues(filteredFibonacciNumbers);
};

console.log(getSumOfEvenFibonnaciNumbersBeforeNumber(4000000));