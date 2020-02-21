// Оператор function создает функциональные объекты.
// Он принимает список параметров и тело, являющееся блоком инструкций.
// Каждое имя в списке параметров — это переменная, 
// инициализируемая в выражении из списка аргументов. 

// При вызове функции создается объект активации, остающийся для вас невидимым.
// Это скрытая структура данных, которая содержит информацию и связывает все
// то, что функция должна выполнить, а также содержит обратный адрес активации
// вызывающей функции.

// Объекты активации JavaScript размещает в куче, как обычные
// объекты. При возвращении функцией управления объекты активации не проходят
// автоматическую деактивацию. Вместо этого объект активации может выживать,
// пока на него есть ссылка. Объекты активации подпадают под сборку мусора, как
// и обычные объекты.

// В объекте активации содержатся:
//  - ссылка на функциональный объект;
//  - ссылка на объект активации вызывающей функции. 
//      Она используется инструкцией return для возврата управления;
//  - информация о возвращении, которая применяется 
//      для продолжения выполнения кода после вызова.
//      Обычно это адрес инструкции, выполняемой
//      сразу же после вызова функции;
//  - параметры функции, инициализированные аргументами;
//  - переменные функции, инициализированные значением undefined;
//  - временные переменные, используемые функциями для вычисления сложных
//      выражений;
//  - содержимое this, которое может быть ссылкой на интересу

// Функциональный объект похож на обычный изменяемый объект тем, 
// что он может быть контейнером свойств. Но в этом нет ничего хорошего.

// У функционального объекта имеется свойство prototype. Его используют (что,
// в общем-то, не рекомендуется делать) в модели создания псевдоклассов. Свойство
// prototype хранит ссылку на объект, содержащий свойство constructor, 
// включающий обратную ссылку на функциональный объект
// и ссылку делегирования на Object.prototype

// Функциональный объект имеет ссылку делегирования на Function.prototype. 
// По этой ссылке функциональный объект наследует ненужные методы apply и call

// В функциональном объекте содержатся также два скрытых свойства:
//  - ссылка на исполняемый код функции;
//  - ссылка на объект активации, который был активен в момент создания функционального объекта.
//      Это делает возможным создание замыкания.
//      Функция может использовать это скрытое свойство для доступа к переменным
//      той функции, которая ее создала.


// Вызов метода посылает объекту сообщение.
// Каждый объект характеризуется собственным поведением,
// которое проявляется при получении конкретных сообщений.
// Отправитель полагает, что получатель знает,что ему делать с сообщением.
// Одной из дополнительных выгод является полиморфизм. 
// Каждый объект, распознавший конкретное сообщение, имеет право на его получение. 
// Что происходит потом, зависит от специализации объекта. 
// И это весьма продуктивная мысль.