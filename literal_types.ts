let c3: 'test' = 'test' //Переменная c3 может иметь значение только 'test'

type actionType = 'up' | 'down'

interface ComplexAction{
    s : string
}

function performAction(action : actionType | ComplexAction){ //Функция возвращает литеральный тип либо -1 либо 1
    switch (action){
        case 'down':
            return -1
        case 'up':
            return 1
    }
}