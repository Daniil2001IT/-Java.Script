
// 1.) const firstName = 'Дании Шляпкин'


//let myAge = 23

//const person = 'Всем привет! Моня зовут ' + firstName + '. Я изучаю на данный момент IT и мне ' + myAge + ' года!'

//function sweemRun () {
//return myAge
//}

//const sweetXab = ` Всем привет! Я Мэнэджер по Автоподбору. Меня зовут ${firstName} и мне ${myAge < 0 ? 23:30} года!` // Могу добавить функцию, могу добавить переменные, могу добавлять терминарные выражения

//console.log(sweetXab)

// 2.)


//const outPut = `
 // <div> This is div </div>
//<p>this is o</p> 

//` таким способом сохраняю все отступы, пробелы и могу писать текст

//console.log(output)

// 3.)


//const firstName = 'даниил'

//console.log( firstName.length) // через свойство length проверяю сколько у меня букв в этой строчке - 5

//console.log(firstName.toUpperCase()) // при помощи toUpperCase()) у меня все буквы в слове Даниил становятся Заглавными

//console.log(firstName.toLowerCase()) // Тут будут использоваться одни только маленикие буквы уже

//console.log(firstName.charAt(2)) // // Как кароче в Массивах принцип - 0, 1, 2. В скобках я указал 2 в консоле у меня высвечивается буква - Н

//console.log(firstName.indexOf('ниил')) // Проверяю, есть ли такая под - строка 'ниил' в слове Даниил. Ответ получаю 2, так как у меня в скобках ('ниил')) и буква Н по счёту, начиная с Буквы Д и с цифры Ноль - Вторая. Поэтому и ответ 2 

//console.log(firstName.indexOf('f')) //Если указываю в скобках то чего нет в Строчке, то в Консоле пишет -1. Это в конвенция. Если что - то не нашлось, то -1 мне об этом говорит. Если есть совпадение, то - 0

//console.log(firstName.toLowerCase().startsWith('даниил')) // При помощи свойства startsWith проверяю - Начинается ли моя строчка даниил со слова ('даниил'))? Начинается - поэтому ответ в Консоли - true. При помощи (firstName.toLowerCase(). Переправиряю строчку - нчинается ли она с Одинковых букв и по размеру в том числе? Начинается - отвкет - True!!!!!!!!!

//console.log(firstName.startsWith('дан'))

//console.log(firstName.endsWith('иил')) // Тоже самое, что и startWith

//console.log(firstName.repeat(3)) // При помощи этого метода я через 3 повторяю слово даниил 3 раза в Консоли - данилданилданил

// 4.)


//const strinkg = '    password    '
//console.log(strinkg.trim()) // Без метода trim()) в Консоли были бы пробелы. К Переменным они тоже относятся. С trim()) - эти пробелы Исчезают!


//console.log(strinkg.trimLeft()) // Анолтчно Методу trim())

//console.log(strinkg.trimRight()) // Анолтчно Методу trim())

// 5.)

//function logPerson (s, name, age) { // s, name, age - это Параметры. Указывать могу и Одной Буквой

//console.log(s, name, age) // Java.script взял и Разделил в Консоли Массив на 2 части. s - никак не обозначил - ни переменной, ни значением. s просто идёт, как Массив 

//return 'Info about person'

//if(age < 0) {
//age = 'Ещё не родился'
//}

//return ` ${s[0]}${name}${s[1]}${age}${s[2]} ` // Через ${} я вывел строчку , котрую написал в const outPut = ...!  Через данное обращение и Синксасис я полчаю слово - Имя, так как Имя в Консоли у меня стоит под 0, а - (s) стаит уже в конце списка под обозначением !, так как я её Никак не обозначал и она у меня Начинает Массив!

//}

//const personName = 'Даниил'
//const personName2 = 'Максим'
//const personAge = 23
//const personAge2 = - 10

//const outPut = logPerson `Имя: ${personName}, Возраст: ${ personAge}!` // ! Знак ставлю, чтобы видеть изменения в Консоли. Черех этот новый синтаксис Функцию я сейчас не вызывал! Всё начинается с 0: "Имя: " и заканчивается - "!"

//const outPut2 =  logPerson `Имя: ${personName2}, Возраст: ${ personAge2}!`

//console.log( outPut) // В Консоли получаю - Info about person, так как return - Возвращает меня на Info about person! 

//console.log( outPut2)



//function personInfo (a, name, age) {
//console.log(a, name, age)
//return 'Попался, котрый кусался?'
//if(age <= 0) { age = 'Крутой Перец'
//}
//return `${a[0]}${name}${a[1]}${age}${a[2]}`
//}



//const firstName = 'Den'
//const myAge = 23
//const firstName2 = 'Toly'
//const myAge2 = - 1



//const infoPerson =  personInfo `Имя: ${firstName}. Возраст: ${myAge}!`
//const infoPerson2 =  personInfo `Имя: ${firstName2}. Кодовое Имя: ${myAge2}!`


//console.log(infoPerson)
//console.log(infoPerson2)



//function personInfo (g, name, age) {
//console.log(name, age, g)
//if(age <= 0) {
//age = 'Я счастлив с Мариночкой и на данный момент у нас с ней с Божьей Помощью Усё Хорошо'    
//}
//return `${g[0]}${name}${g[1]}${age}${g[2]}${myAge23}${g[3]}`
//}

//const firstName = 'Dany'
//const firstName2 = 'Dimon'
//const firstName3 = 'Artemy'
//const myAge = - 23
//const myAge23 =  23
//const myAge2 = 22
//const myAge3 = 22


//const loveName = personInfo  ` Имя: ${firstName}. Возраст: ${myAge}! Я Счастлив, что вы у меня //есть Братья! За Всё Благодарен Господу Богу! Мне кстати ${myAge23} года!`

//const loveName2 = personInfo  `Имя: ${firstName2}. Возраст: ${myAge2}. Я Тоже Очень Сильно Люблю своих Братиков! Я Будущий с Божьей Помощью Офицер!`

//const loveName3 = personInfo  `Имя: ${firstName3}. Возраст: ${myAge3}. Я разнорабочий и Вахтовик. По Родным скучаю и у меня Всегда всегда всё Отличео!`


//console.log(loveName)
//console.log(loveName2)
//console.log(loveName3)


















