"use strict";
function logTime(num) {
    console.log(new Date());
    return num;
}
logTime('abc');
logTime(1);
function logTime2(num) {
    if (typeof num == 'string') {
        num.toLocaleUpperCase();
    }
    return num;
}
class MyGenClass {
}
const a8 = new MyGenClass();
a8.value;
function logTimeStamp(num) {
    console.log(num.stamp);
    return num;
}
