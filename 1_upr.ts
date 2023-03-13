interface IInfo{
    desc : string
    isActivate : boolean
}

interface ITags{
    name : string
    value : number
}

interface ITest{
    userId : number
    id : number
    title : string
    info : IInfo
    tags : ITags[]
}