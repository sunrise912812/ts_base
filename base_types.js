"use strict";
let c = 5;
let b = 'test';
let bol = true;
let arr = ['abc', 'cde', 'efg'];
let e = 5;
e = 'abc';
function test(a) {
    return '';
}
const test2 = (a) => {
    return a * 2;
};
arr = arr.map((x) => x.toLowerCase());
function countCoord(coord) { }
function printIt(id) {
    if (typeof id === 'number') {
        console.log(id.toString());
    }
    else if (typeof id === 'string') {
        console.log(id.toUpperCase());
    }
}
function getSum(a) {
    if (Array.isArray(a)) { //Проверяем является ли a массивом
        return a.reduce((total, item) => total + item, 0);
    }
    return a;
}
console.log(getSum([1, 2, 3, 4, 5]));
console.log(getSum(5));
const x = undefined;
const z = null;
