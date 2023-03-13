enum Direction{
    Up = 'UP',
    Down = 'DOWN',
    Left = 'LEFT',
    Right = 'RIGHT'
}

enum Decision{
    Yes = 1,
    No = calcEnum()
}

function calcEnum(){
    return 2
}

function runEnum(obj : {Up : string}){

}

runEnum(Direction)

enum Test2{
    A
}

let test3 = Test2.A
let nameA = Test2[test3] // Значение A

const enum ConstEnum{
    A,
    B
}

let c5 = ConstEnum.A

enum Dice{
    One = 1, 
    Two,
    Tree
}

function ruDice(dice : Dice){
    switch (dice){
        case Dice.One:
            return 'один'
        case Dice.Two:
            return 'два'
        case Dice.Tree:
            return 'три'
        default:
            const a5 : never = dice 
    }
}