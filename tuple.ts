const a5 : [number, string, number] = [0, 'a', 1]

a5.push(1)

a5.map(s=>{
    switch(typeof s){
        case 'number':
            break
    }
})

const [c7, d7, e7] = a5

const [c8, ...e8] = a5