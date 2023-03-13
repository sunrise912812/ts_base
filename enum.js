"use strict";
var Direction;
(function (Direction) {
    Direction["Up"] = "UP";
    Direction["Down"] = "DOWN";
    Direction["Left"] = "LEFT";
    Direction["Right"] = "RIGHT";
})(Direction || (Direction = {}));
var Decision;
(function (Decision) {
    Decision[Decision["Yes"] = 1] = "Yes";
    Decision[Decision["No"] = calcEnum()] = "No";
})(Decision || (Decision = {}));
function calcEnum() {
    return 2;
}
function runEnum(obj) {
}
runEnum(Direction);
var Test2;
(function (Test2) {
    Test2[Test2["A"] = 0] = "A";
})(Test2 || (Test2 = {}));
let test3 = Test2.A;
let nameA = Test2[test3]; // Значение A
let c5 = 0 /* ConstEnum.A */;
var Dice;
(function (Dice) {
    Dice[Dice["One"] = 1] = "One";
    Dice[Dice["Two"] = 2] = "Two";
    Dice[Dice["Tree"] = 3] = "Tree";
})(Dice || (Dice = {}));
function ruDice(dice) {
    switch (dice) {
        case Dice.One:
            return 'один';
        case Dice.Two:
            return 'два';
        case Dice.Tree:
            return 'три';
        default:
            const a5 = dice;
    }
}
