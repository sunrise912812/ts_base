type Point = {x : number, y : number}

type D3Point = Point & { //Аналог наследования для type
    z : number
}

type stringOrNumber = string | number

interface IPoint{
    x : number
    y : number
}

interface I3DPoint extends IPoint{ //Наследуем интерфейс IPoint
    z : number
}

function print(coord : Point) : void{}

const c2 = (point : IPoint)=>{
    const d2 : I3DPoint = point as I3DPoint //В этом случае point сконвертируется в I3DPoint и будет добавлено свойство z.
}

const myCanvas = document.getElementById('canvas') as HTMLCanvasElement

interface ITest{
    a : number
}

interface ITest{
    b : number
}

interface ITest{
    c : number
}

type Test = {
    a : number
}

//type Test = { - для типов не будет работать.
//    b : number
//}