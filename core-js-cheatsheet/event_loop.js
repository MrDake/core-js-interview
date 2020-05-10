// https://habr.com/ru/post/461401/
// Event loop

// Весь код в JS выполняется в однопоточном режиме. 
// Это значит, что перегрузка одного потока не убьеют весь браузер
// а только одну вкладку

// Код каждой HTML-страницы в браузере выполняется в Main Thread.
// Main Thread — это основной поток, где браузер выполняет JS, 
// делает перерисовки, обрабатывает пользовательские действия и многое другое

// После выполнения скрипта (Task) Event loop идет к 
// Microtasks 
// После идет к Render.
// Задачи от Render оптимизируются браузером и если он считает
// что ничего перересовывать не нужно, то идет опять к Task
// Event loop просит у Task только одну первыую задачу из очереди и передает
// ее в CallStack и идет дальше по циклу.

// Browser API
// Tasks:
//      - setTimeout
//      - setInterval
//      - AJAX
//      - etc.
// Microtasks:
//      - Promise (async await)
//      - Mutation Observer ????? что это

// Render:
//      - RAF
//      - repaint
//      - reflow
//      - layout
//      - etc.


function one() {
    
    setTimeout(() => {console.log('0')}, 0)

    function two() {
        
        const promise = new Promise((res, rej) => {
            console.log('1    promise constructor')
            res('promise resolve')
        })
        promise
            .then(result => console.log(`2    ${result}`))

        function three() { console.log('3') }
        three()
    }
    two()
}
one();

// CallStack
// LIFO

// Queue
// Microtasks priority
// FIFO

// ---------------------------------------------

// callstack | one()
// queue | 

// callstack | one() setTimeout()
// queue |

// callstack | one() 
// queue | log(0)(0ms)

// callstack | one() two() promise constructor log(1)
// queue | log(0)(0ms)

// callstack | one() two() promise constructor 
// queue | log(0)(0ms)
// render log(1)

// callstack | one() two() promise.then()
// queue | log(0)(0ms)

// callstack | one() two() promise
// queue | log(2) log(0)(0ms)

// callstack | one() two() three() log(3)
// queue | log(2) log(0)(0ms)

// callstack | one() two() three() 
// queue | log(2) log(0)(0ms)
// render log(3)

// callstack | 
// queue | log(2) log(0)(0ms)

// callstack |
// queue | log(0)(0ms)
// render log(2)

// callstack |
// queue |
// render log(0)