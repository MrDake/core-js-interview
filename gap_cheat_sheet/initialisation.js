// Если определить переменную, применяя let или var, 
// и не инициализировать ее явным образом, 
// JavaScript инициализирует ее значением undefined,
// что вызывает путаницу, 
// поскольку только что определенная переменная приобретает
// значение undefined, означающее, что она не определена

// Поговорим об инструкции let. 
// Она объявляет новую переменную в текущей области видимости.
// Каждый блок (строка инструкций, заключенная в фигурные скобки) 
// создает область видимости. Переменные, объявленные в области видимости,
// невидимы за ее пределами.

// Инструкция let также допускает инициализацию,
// но не требует ее проведения.
// Если переменная не инициализирована,
// ей по умолчанию дается значение undefined

// !!! (с. 100 | изходя из этой фразы из книги можно сделать вывод
// что инициализация завершается только после присвоения значения)

// Инструкции let позволено объявлять сразу несколько переменных,
// но я рекомендую объявлять каждую переменную ее собственной инструкцией let.
// Это упрощает чтение кода и поддержку программы.

// Объявление function получает возможность подтянуться к началу.
// Части кода удаляются из того места, куда вы поместили объявление,
// и перемешаются к началу тела функции или модуля. 
// Все инструкции let, созданные объявлением function, подтягиваются к началу,
// а за ними следуют все присваивания функциональных объектов для этих переменных.
// Поэтому объявление function не должно помещаться в блок.
// Допустимо помещать объявление в тело функции или модуля, но не нужно —
// в инструкции if, switch, while, do или for


// Инструкция const похожа на инструкцию let, 
// но имеет два весьма важных отличия: 
// - для нее требуется обязательная инициализация,
// - а откладывать присваивание
// значения переменной нельзя
// !!!! (тут опять идет некая путаница с присвоением значения)

// ---------------------------------------------------------------------

// Кайл Симпсон "You don't know JS"

// var a = 2;
// 1. Компилятор находит var a
//      - Спрашивает область видимости (scope) есть ли у него такая переменная
//          для текущей части кода.
//          Если нету он обращается к скоупу чтобы объявить переменную
//          с именем в наборе этой области видимости
// 2. Компилятор генерирует код для последующего выполнения Движком
//          для обработки присваевается значение а = 2
//      - Код выполняемый движком спрашивает у скоупа доступна ли переменная
//          с именем в текущем наборе области видисмоти.
//          Есди нет, то он ищет в области видимости
//          объекта активации
//      - Если Движок в конеченом итоге находит переменную
//          то он присвает ей значение
//      - Если не находит, то выкидывает эррор


// LHS - left hand side (Это запрос движка в область видимости! НЕ оперрация)
//      То что слево от знака операции присваевания
//      по сути это есть объявление 
//      (движок говорит текущей области видимости объявить переменную)

// RHS - right hand side (Это запрос движка в область видимости! НЕ оперрация)
//      То что справа от знака операции присваевания
//      по сути это есть значение которое присваевается переменной или функции
//      так же это вызов функций и т.п.
//      (движок говорит текущей области видимости присвоить значение)

function foo(a) {
    var b = a;
    return a + b;
}
var c = foo( 2 );

// 1. Найдите все LHS-поиски (всего 3).
// 2. Найдите все RHS-поиски (всего 4).

// компилятор находит и объявляет function -foo-
// компилятор находит и объявляет -b-
// компилятор находит и объявляет -с-
// код выполняется движком
// LHS -с-
// RHS по -foo-
// LHS -a-
// LHS -b-
// RHS a = 2
// RHS b = a = 2
// отдаем резутать c = return a + b = 4

// ---------------------------------------------------------------

function foo(a) {
    console.log( a + b );
}
foo( 2 ); 

// Компилятор находи и объявляет function -foo-
// код выполняется движком
// RHS -foo-
// LHS -a-
// RHS a = 2
// RHS -console-
// RHS -log()-
// RHS -a- отдает значение 2
// RHS -b- в области видисомсти -foo- = неудача
// RHS -b- в глобальной области видимости = неудача
// движок выкидывает ReferenceError
//      (запрос на чтение несуществующей переменной = неудача)

// ---------------------------------------------------------------

function foo(a) {
    b = a;  
}
foo( 2 );

// компилятор находит и объявляет значение function -foo-
// код выполняется движком
// RHS -foo-
// LHS -a-
// RHS a = 2
// LHS -b-
//      объявлена ли переменная -b- в это области видимости?
//      а в глобальной?
//      ок. ну раз не объявлена то объяви ее в глобальной области видимости
// RHS b = a = 2 (...а движок присвоет ей значение)
//      'use strict' запрещает такое автоматическое создание глобальных переменных

// ---------------------------------------------------------------

function foo(a) {
    a();  
}
foo( 2 );

// компилятор находит function -foo-
// код выполняется движком
// RHS -foo-
// LHS -a-
// RHS a()
//      - у тебя есть а?
//      - Да
//      - Вызови ее как функцию
//      - но она же не функция
//      - ок тогда TypeError

// ReferenceError - ошибки которые относятся к проблемам при разрешении
//      вопросов области видимости
// TypeError - ошибки которые подразумевают, что разрешение области
//      видимости прошло успешно, но была сделана попытка выполнить
//      с результатом невозможную операцию (например вызвать число как функцию)
