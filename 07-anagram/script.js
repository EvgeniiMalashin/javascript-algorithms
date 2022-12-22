/*
 * Задача 7: «Анаграмма»
 *
 * Два слова называют анаграммами, если они состоят из одних и тех же букв.
 * Напишите функцию, проверяющую, являются ли две строки анаграммами друг друга
 * (регистр букв не имеет значения). Для простоты примите, что в этих строках
 * нет пробелов и знаков препинания.
 * 
*/

function anagram(str1, str2) {
    if (str1.toLowerCase() === str2.toLowerCase()) {
    return false;
    }
    const arrStr1 = str1.toLowerCase().split('');
    const arrStr2 = str2.toLowerCase().split('');
    arrStr1.sort();
    arrStr2.sort();
    return arrStr1.join() === arrStr2.join();
}

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(anagram('finder', 'Friend')); // true
console.log(anagram('hello', 'bye')); // false
console.log(anagram('JpDi', 'jpd'));
console.log(anagram('1234', '2134'));
console.log(anagram('asdf', 'fdsafdsa'));