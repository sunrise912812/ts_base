let c: number = 5
let b: string = 'test'
let bol:boolean = true

let arr:string[] = ['abc', 'cde', 'efg']

let e:any = 5
e = 'abc'

function test(a : string) : string | number{
    return ''
}

const test2 = (a: number) : number =>{
    return a*2
}

arr = arr.map((x:string)=>x.toLowerCase())

function countCoord(coord : {lat : number, long? : number}) : void{}

function printIt(id : number | string){
    if(typeof id === 'number'){
        console.log(id.toString())
    }
    else if(typeof id === 'string'){
        console.log(id.toUpperCase())
    }
}

function getSum(a : number | number[]) : number{
    if(Array.isArray(a)){ //Проверяем является ли a массивом
        return a.reduce((total, item)=>total + item, 0)
    }
    return a
}

console.log(getSum([1,2,3,4,5]))
console.log(getSum(5))

const x:undefined = undefined
const z:null = null