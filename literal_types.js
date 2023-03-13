"use strict";
let c3 = 'test'; //Переменная c3 может иметь значение только 'test'
function performAction(action) {
    switch (action) {
        case 'down':
            return -1;
        case 'up':
            return 1;
    }
}
