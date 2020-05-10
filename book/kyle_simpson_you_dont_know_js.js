function foo(a) {
    var b = a;
    return a + b;
}
var c = foo( 2 );

// 1. Найдите все LHS-поиски (всего 3).
// 2. Найдите все RHS-поиски (всего 4).

// компилятор находит и объявляет переменную -с-
// RHS по -с-
// LHS function -foo-
// LHS -a-
// LHS -b-
// RHS a = 2
// RHS b = a = 2
// RHS c = return a + b = 4