// 1.Переменные

//const firstName = 'Daniil'
//const isProgrammer = true //boolean
//let age = 23 //number. Const поменял на Let, для раб. в Опера.
//const firstSurname = 'Shlyapkin'

//const _ = 'privat'  //Могу такие создавать Переменные (Пример)
//const $ = 'privat' 
//const * = 'privat'

//const 5 = 'privat' // Такие не можем ( Ошибочный Вариант)
//const if = 'mkef'
//const witNum5 = '5' // (Правильный Вариант)
//const 5witNum = 'privat' // (Ошибочный Вариант)


// 2.Мутирование

//console.log('Меня зовут ' + firstName + '. Мне ' + age + 'года.')
//console.log(age.toString())
//alert ('Меня зовут ' + firstName + '. Мне ' + age + ' года.')

 //prompt ('Введите свою Фамилию и Имя')
//alert (firstSurname + ' , а имя моё ' + firstName)


// 3. Операторы, котрые присутсутствуют в Java.Script

//let currentYear = 2024 // (Переводится как Текущий Год)
//const birthYear = 2001    // (Когдая Родился)
//let age = currentYear - birthYear
//console.log (age)

//const a = 10
//const b = 20
//const c = 15

//console.log(c + b)
//console.log(c - b)
//console.log(c * b)
//console.log(c / b)

//let g = 32

//console.log(g+=a)
//console.log(g-=a)
//console.log(g*=a)
//console.log(g/=a)
//console.log (currentYear++) //const (--currentYear) - с минусами прибавление на 1 елиницу идёт к числу 2024
//console.log(g)


//4. Основные типы Данных для Gava Script:

//const isProgrammer = true
//const name = 'Daniil'
//const age = 40
//let x

//console.log(typeof isProgrammer)
//console.log(typeof name)
//console.log(typeof age)
//console.log(typeof x)
//console.log( null)


// 5. Приоритет операторов 

//const fullAge = 23
//const birthYear = 2001
//const currentYear = 2024

// >=, <=, >, <
//const isFullAge = (currentYear - birthYear)>= fullAge //23 >=23 >= true

//console.log(isFullAge)


// 6. Условные Операторы:

//const courseStaturs = 'ready' // ready, fail, pending                                      
//if (courseStaturs === 'fail') { console.log ('Привет Друг!')}
//else if (courseStaturs === 'pending') { console.log ('Пока Друг!')}                        
//console.log ('Привет Друг!')                                                                

//else  { console.log ('Приветствую Друг!')}                                                  

//const isReady = true

//if (isReady) { console.log ('Привет!') }

//else { console.log('Пока!') }


// 7.Тернарные Выражения!

//isReady ? console.log ('Привет!') : console.log ('Пока!')                       

//const num1 = 20 // number
//const num2 = '20' // string
//console.log ( num1 ===  num2)

// Булевая Логика

//a1 = true && false //false
//a2 = 'Catt' && 'dog' // 'dog'
//a3 = true && true // true
//a4 = false && true // false

//a1 = true || false //true
//a2 = 'Catt' || 'dog' // 'catt'
//a3 = '' || false // false
//a4 = false || '' // ''

// Функции 
                                                                                                                            
//function meatAge (year) {                                                                                                       
//return 2024 - year }
//const myAge = meatAge (2001)                                                                                                   

//console.log(myAge)                                   

//console.log (meatAge (2001)) // Сокращённый Вариант 
//console.log (meatAge (2024))
//console.log (meatAge (2002))
//console.log (meatAge (2003))

//function logInfoAbout (name, year) {
//const age =  meatAge (year) // Заменил на return 2024 - year

//if (age > 0) { console.log ('Человек по имени ' + name + ' сейчас имеет возраст ' + age) }
 //else { 
 //console.log ('Вообщето это уже Будущее!') }


//console.log('Человек по имени ' + name + ' сейчас имеет возраст ' + age) // Создаю сообщение внутри Функции 
//}

//logInfoAbout ('Daniil', 2001) // Переменные для создания сообщения
//logInfoAbout ('Artemy', 2002) // Вместо console.log Записываю!
//logInfoAbout ('Dmitry', 2025)


//function meatAge (year) {
//return 2024 - year }

//function ollSpasihg (name, year) {
//const age =  meatAge (year)

//if (age > 0) { console.log('Этого молодого человека зовут ' + name + ' . Его возраст ' + age) }
//} 

//console.log ('Мы Обязательно Прорвёмся!') 

//ollSpasihg ('Daniil', 2001)
//ollSpasihg ('Dmitry', 2002)


// Массивы


//const cars =  ['Мазда', 'Мэрсэдэс'] // В идеале правильно так - без Hew Array 

//const cars = new Array('Мазда', 'Мэрсэдэс') // Так тожe можно

//console.log (cars.length) // При помощи length - узнаю колличество элеметов в Массиве. Тут их 2 - Мазда и Мэрс

//console.log(cars [1]) // Выписываю отдельно машины из Таблицы
//console.log(cars [0])

//cars [0] = 'EXEED' // Меняю слова - EXXED На Мазду
//cars [2] = 'Тойота' // Дописал новое слово 


// Статический Индэкс - cars [2]
// Могу использовать и Динамический Индекс - всегда скидывает в Конец что - то

//cars [cars.length] = 'EXEED' // Тоже самое, что и (cars.lengs). Просто вместо console.log - cars и идуит Тут Квадратные скобки

//console.log(cars)


// 10) Циклы Массисов 

//const cars =  ['Мазда', 'Мэрсэдэс', 'Форд', 'EXEED']

//for - Классический Цикл
// Всегда for надо начинать с Ключевой Переменны - Let. Let по классике ещё называют i. И задают i какое - то Начальное значение. Например: 0;

//for (let i = 0; i < cars.length; i++) {
//const car = cars [i]
//console.log(car) 
//}

//for(let car of cars) { 
// console.log(car) 
// } Тоже самое - только Сокращённо. Тут я создаю уже не индекс, как в 1 варианте, а сразу Переменную Например - Car, которая уже является Элеметом Массива Cars


// 11.) Обьекты // Основа Java.Sctipta. Тут Группируем различные значения и создаём разные структуры

//const person = { // Перечисляем Ключ и Значение для каких - либо Типов Данных

 //firstName: 'Shlyapkin', // Соблюдаю Дваеточие с Запятой
 //lastName: 'Daniil',
 //year: 2001,
//languages: ['Ru', 'En', 'De'], // Тут применил уже Массив
//hasWife: false, // Тут применил уже boolean Значение
//greet: function () {  // Это Метод, а не Функция, так как Применятеся в Контексте Обьекта
//console.log('greet from person')
 // }
//}

//console.log(person) // Получаю в console.log весь Этот Список
//console.log(person.firstName) // Получаю Свою Фамилию. console.log тоже Является Обьектом у, котрого Метод - log 

//console.log (person['lastName']) // Обращаться можно и через Точку и через [] Скобки 

 //const key = 'year' // Могу Получать и Динамические Ключи. const key Придумал и Использовал  'languages' для отображения этих Языков в Самом console.log

 //console.log (person[key]) // key - Без Ковычек уже

 //person.hasWife = true // Поменял false на true

 //person.isProgrammer = true// Добавил то - чего не было в Списке. Теперь в Моём Сталбце появился isProgrammer = true

//person.greet() // Тоже самое - только без console.log

//console.log(person)

// По сути Обьекты - Гибко могу всё это это менять под Себя Делать и Видо - изменять. Могу Обращаться через ТОчку, черех [] скобки, как к Строке, через Динамические Ключи: const key = 'year' - console.log (person[key])
// Так же могу менять Типы Данных и Добавлять Новые 



//const person = {
//firstName: 'Shlyapkin', // Ключ. Сам придумываю
//lastName: 'Daniil',
//yearAge: 23,
//languages: ['Russia', 'English'], // Кладу значение Массива
//hasWife: false, // Задаю boolean значение
//greet: function () {     // Задаю Отдельные Функции

//}
//}
















