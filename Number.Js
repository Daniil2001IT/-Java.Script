 //Number. Типы Чисел 

 // 1) INTEGER

 //const name = 23 // integer (Интержджир). Без десятка в конце 
 //const float = 42.42 // float - Число, которое содержит в себе десятичную часть
 //const pow = 10e3 // Валидное число. 10 возводим в 3 Степень - добавляю ещй 000 кароче 


 //console.log('MAX_SAFE_INTEGER', Number.MAX_SAFE_INTEGER) // Эим в Освновном пользуюсь

 //console.log('Math.pow 53', Math.pow ( 2, 53) - 1) // Math - Глобальный Обьект - при помощи, которого я могу подробно расписать и понять, как в случае Number.MAX_SAFE_INTEGER я получаю максимально число. Просто подробно расписываю. 

//pow - Функция при помощи которой возвожу число в Степень. x - Основание;  y:53 - Степень в котрорую Возвожу - и вычитаю единицу: (- 1). В итоге получил тоже самое, что и в console.log(Number.MAX_SAFE_INTEGER)!

//console.log ('MIN_SAFE_INTEGER', Number.MIN_SAFE_INTEGER)
//console.log('MAX_VALUE', Number.MAX_VALUE)
//console.log('MIN_VALUE', Number.MIN_VALUE)

//const num = 42
//const float = 42.42
//const pow = 10e3


//console.log('MAX_SAFE_INTEGER', Number.MAX_SAFE_INTEGER) 
//console.log('Math.pow(2, 53) - 1)', Math.pow(2, 53) - 1)
//console.log('MIN_SAFE_INTEGER', Number.MIN_SAFE_INTEGER)
//console.log('MAX_VALUE', Number.MAX_VALUE)
//console.log('MIN_VALUE', Number.MIN_VALUE)


// 2.) Бесконечность 


// Number - Есть Поизитивная бесконечность, а есть Негативная. Бесконечнось 

//console.log('NEGATIVE_INFINITY', Number.NEGATIVE_INFINITY) // В консоли Отрицательное Число

//console.log('POSITIVE_INFINITY', Number.POSITIVE_INFINITY) // В консоли Положительное Число

//console.log('2 / 0', 2/ 0) // Будет 2 / 0 Infinity в Косоли. Делить на 0 - не ошибка. Всё, что делим на 0 - это Бесконечность

// 3.) Применение isNaN и isFinite


//console.log(Number.NaN) // Ключевое слово. Переводится, как Not A Number -  Не является числом, но в Кносли отображается, как число  

//console.log(NaN) // NaN - специальное Значение переводится 
//console.log(typeof NaN) // функция - isNaN тоже действует на обьект Number


//const wierd = 2 / undefined
//console.log(Number.isNaN(wierd)) // Через функцию - isNaN проверяю является ли wierd при решении числом. Ответ - True
//console.log(Number.isNaN(42)) // Покажет false - значит, что это число с которым можно работать

//console.log(Number.isFinite(Infinity)) // Проверяю при помощи isFinite конечным является Infinity или же нет! Получаю false

//console.log(Number.isFinite(42)) // Конечно ли число 42 - проверяю. Ответ True

// 4.) parseInt


//const stringInt = '40'
//const stringFloat = '40.42'

//console.log(Number.parseInt ( stringInt) + 2) // При помощи parseInt я прибавляю stringInt к ДВУМ. У меня идёт уже не как строчка в console.log и результат получается 42. parseInt могу использовать без Обькта Number

//console.log(+stringInt + 2) // Через + сокращённый вариант. Одно и тоже. Через + я говорю Jave - преобразуй строку в число. Говорю - Java преобразуй строчку в Число с помощью ++ я это делаю   

//console.log(Number(stringInt) + 2) // Тоже сокращённый 

// parseInt рабоотает только с INTEGER и он не работает с десятичными числами - тоесть с float!


// 5.) parseFloat


//console.log( parseFloat(stringFloat) + 2) // Это уже работа с float. parseFloat использую и к string добавляю теперь тоже Float

//console.log(Number(stringFloat) + 2) // Тоже самое, как и с parseINT, котрый работает только с INTEGER. Толко меняю Окончания на Float

//console.log(+ stringFloat + 2 )

// 6.) to.Fixed


//console.log((0.4 + 0.2))
//console.log(+ (0.4 + 0.2).toFixed(1))
//console.log (parseFloat ((0.4. + 0.2).toFixed (1)))

// 6.) BigINT


// Новый Тип Данных: BigInt нужен для работы с числами, которые больше чем MAX_SAFE_INTEGER.
// BigInt работает только с BigIntani. С Десятичными работать не могу. Только с INTEGER!

//console.log(90071992547409919999n - 9007199254740991n)
//console.log(- 90071992547409919999n)

//console.log(90071992547409919999.92299n) - Ошибочный Вариант. BigInt с Десятичными не работает!

//console.log(4n - 2) -Тоже ошибочный вариант. Так как разные типы. Правильный(4n - 2n).
// n - это и есть BigInt. BigInt работает только с BigInt!


//console.log(parseInt(10n) - 5) //  При помощи parseInt я посчитал разные типы и получил решение
//console.log(10n - BigInt( 5)) // Тут я уже пишу BigInt, подразумевая под ним другой тип Чисел - 5. Такой вариант тоже Правильный 


//console.log(parseInt(10n) - 5)

//console.log(10n - BigInt(5))

//console.log(parseInt(10n) - 5)

//console.log(parseInt(20n) - 10)

//console.log(20n - BigInt(10))


//console.log(5n/2n) // При решении получу 2n, а не 2.5n, потому что дробную часть отсёк 


// 7.) Math - обьект, который позволяет взаимодействовать с различными математическими Операциями 


//console.log(Math.E) // E и PI - это Константы!
//console.log(Math.PI)

//console.log(Math.sqrt(49)) // Метод - sqwrt. Использую его для того, чтобы взять Квадратный Корень из 25 

//console.log(Math.pow(2, 3)) // При помощи Метода pow я Возвожу Число в Степень 

//console.log(Math.abs(- 42)) // abs - это уже Модуль, а не метод. Должно плучиться 42, но при помощи abs я Отсекаю Негативную Часть и Получаю 42 уже Без Минуса!

//console.log(Math.max(2, 54, 100, 500)) // Я тут рассматриваю уже 2 Функции - max и min. Я просто перечисляю Числа. С использование max - получаю Самое Большое в console.log, а с min уже Наоборот - Самое Маленькое 
//console.log(Math.min(2, 54, 100, 500))

//console.log(Math.floor(44.99)) // метод floor округдяет число в Меньшую Сторону. Тоесть после Точки ничего уже Не высвечивается! 44.44 - 44 

//console.log(Math.ceil(44.10)) // Метод ceil Округляет в Большую Сторону. 44.10 - 45

//console.log(Math.round(44.99)) // Возвращает Округлённое число к Ближайшему Целому - 44.99 - 45; 44.49 - 44

//console.log(Math.trunc(44.10)) // Возвращает целую часть числа путём удаления всех Дробных. Работае, как и to.Fixd значение, только я удаление чисел не контролирую. Что после точки однозначно Уберётся. 44.10 - 44

//console.log(Math.random()) // Просто выдаёт рандомное значение числа. При перезагркзске постоянно разное число 


// Использование Принципов Math


//function getRandomBetwen (min, max) { 
//return Math.floor (Math.random() * (max - min + 1) + min) } // Я создал Алгорим прип помощи, которого я получаю целое число, котое постоянно меняется. При помощи  Math.floor я его округлил в Меньшую Сторону, но теряется тогда метод max - поэтому я пишу + 1, чтобы метод max Сохранился. В случае с ceil: (- 1 писать) насколько я Понял. Хех!

//console.log (getRandomBetwen(10, 42))
























