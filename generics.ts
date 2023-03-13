function logTime<T>(num : T) : T{
    console.log(new Date())
    return num
}

logTime<string>('abc')
logTime<number>(1)

function logTime2<T>(num: T) : T{
    if(typeof num == 'string'){
       num.toLocaleUpperCase()
    }
    return num
}

interface MyInterFace{
    transform : <T, F>(num : T)=> F
}

class MyGenClass<T>{
    value! : T
}

const a8 = new MyGenClass<number>()

a8.value

interface TimeStamp{
    stamp : number
}

function logTimeStamp<T extends TimeStamp>(num: T) : T{
    console.log(num.stamp)
    return num
}