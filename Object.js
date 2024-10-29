// CamelCase - можешь чекнуть в Гугле! Интересно

// 1.)

 //const person = {
 //name: 'Daniil',
 //lasName: 'Shlyapkin',
 //age: 23,
 //langvegese: ['Ru', 'En', 'Go'],
 //isFull: true,
 //isProgrammer: true,
//'complex key': 'Complex Value',
//['key_' + (1 + 3)]: 'Compuped key', // key_4 - хочу допустим эту строчку убрать
 //greet() { 
 //console.log('Привет!') 
 //  }
 // }

//console.log(person.name)
//console.log(person.langvegese)
//const run = 'age'
//console.log(person[run])
//console.log(person['lasName'])
//person.isFull = false
//person.console = true

//person.greet()


//person.age++ // число увеличилось на 1. Было 23 - 24 стало
//person.langvegese.push('Bel') // добавил 'Bel' с помощью push в конец массива
//person['key_4'] = undefined // поменял, значение на  undefined
//console.log(person)
//console.log(person['key_4']) // Вместо ['key_4'] теперь только undefined. Но сам ключ в Объекте key_4 со значением undefined Сохранился! 
//delete person['key_4'] // при помощи delete я удалил и Ключ в Массиве и Значение. Остался только undefined. Тоже самое, что и console.log - только без скобок



// 2.) Новый синтаксис, который позволяет более удоб. работать с объектами Это Дистрактуризация

//const name1 = person.name
//const age = person.age
//const languages = person.langvegese

//console.log(name1, age, languages) // чтобы это не писать - пишу диструктиризацию. Позволяет не повторяться в написании лишний раз

// отделил материал----------------------------------------------------------------------------------------------

// 3.) детарилизация

//const {name, langvegese, age} = person // более удобный и краткий вариант чем тот, что под пунктом 2
//console.log(name, langvegese, age)


//const {name, langvegese, age: personAge} = person // таким образом java.script будет понимать, что я забираю поле age у объекта persone, но поместить его в переменную в personAge! Результат всёравно один и тоже!
//console.log(name, langvegese, personAge)



// 4.) Цыкл for in - базовый способ для работы с циклом Массива в самом объекте


// 1 Пункт) //for (let key in person) { // когда мы создаём на каждые аттерации какую - то переменную key и с помощью оператора in я пробегаюсь по объекту, который хочу посмотреть. Я таким образом вывожу все Ключи в Объекте у себя в Браузере!!!! Создал кароче переменную key и через неё вывел все Ключи 


// 2 Пункт) console.log('key', key) // из за того, что использую 2 раза 'key',  то это Первая key идёт, как Ключ везде, а Вторая key несёт в себе уже именно настоящие Ключи моего Объекта! 

//console.log(person)
//key name
// key lasName
// key age
// key langvegese и т.д


// 3 Пункт) console.log('value', person[key]) } // хочу получить например 'value:' - тоесть то значение, которое находится в этом ключе, то я могу обратиться к объекту persone. Учитываю, что key является строкой Ключа Самого объекта, то я могу написать, что обращение к его Ключу - console.log('value', person[key])
// теперь key c value выступают в виде Ключей и идут со значениями моего объекта! Чередуются между собой кароче. Хех 

// Результат Цыкла Массива

// key name
// value Daniil
// key lasName
// value Shlyapkin
// key age
// value 23
// key langvegese
// value (3) ['Ru', 'En', 'Go']
// key isFull
// value true
// key isProgrammer
// value true
// key greet
// value ƒ greet() { 
// console.log('Привет!') 
// }



// 4.) Возможный вопрос на Собесе, который могут задать - чем опасен Цикл for in? Ответ: дело в том, что цыкл for in бежит не только по ключам самого Объекта, но так же может заходить в его Прототип и из - за этого могут возникать определённые проблемы. Чтобы это избежать - нужно записать определённую проверку:

// if(person.has0wnProperty(key)) { // та самая проверка 
 // } // и теперь после неё можно писать  console.log()!

 //has0wnProperty - у него есть своё собственное свойство, которое не находится в прототипе key И после только этой проверки я могу делать console.log()!

 // Теперь это более правильно и более защищённо! 

//----------------------------------------------------------------------------------------------------------

// 5.) // Повторение - Мать Учение

 //const person = {
 //name: 'Daniil',
 //lasName: 'Shlyapkin',
 //age: 23,
 //langvegese: ['Ru', 'En', 'Go'],
 //isFull: true,
 //isProgrammer: true,
 //'complex key': 'Complex Value',
 // ['key_' + (1 + 3)]: 'Compuped key', // key_4 - хочу допустим эту строчку убрать
  //greet() { 
 // console.log('Привет!') 
  // }
//  }
 

//console.log(person) // console.log(person) должен быть выше Цыкла - иначе console.log() внутри Цыкла не будут правильно Работать! 
 
 //for(let key in person) {
 //if(person.hasOwnProperty(key)) {
 //}
 //console.log(key)
 //console.log('key:', key)
 //console.log('value:', person[key]) }



// 6.) // тот же самый результат и тоже самое, что и в Цыкле чуть выше. Но тут Object.keys не бижит по Прототипо и поэтому тут не нужно писать проверку - has0wnProperty!

//const keys = Object.keys(person) // keys при помощи объекта keys я получаю Ключи Объекта! 

//console.log(keys) // вывел Массив только со значениями Ключей 

//keys.forEach( (key) => { // forEach - Кубэк идёт перед key, но его не видно. Метот относящийся к Массиву! делает аттерацию по массиву, где 1 параметром делает Кубэк - функцию. Сам посеье Кубэк принимает каждый утрированный элемент. В моём случае - это key! 
// }) 

//const keys2 = Object.keys(person) //  метод keys получает ключи объекта
//console.log(keys2) // получил массив из ключей моего объекта
//keys2.forEach( (key) => { // метод forEach делает аттерацию по Массиву
 //console.log('key:', key) 
 //console.log('value:', person[key]) 
// })

// краткая вкрсия

//Object.keys(person).forEach( (key) => {
//console.log('key:', key) 
//console.log('value:', person[key])
// })


// Context - одна из самых интересеных тем в java.skript


//const person = {
//name1: 'Daniil',
//age: '23',
//isProgrammer: true,
//langvigis: ['ru', 'en', 'de'],
//'komplex key': 'complex Value', 
//['key_' + (1 + 3)]: 'compluted Key', //greet() {  
//console.log('greet from person')
// },
// info() { // Метод info
// console.log('this',this)

//console.info('Информация человека по имени:', this.name1 ) // в консоли тоже есть свои методы. Выывожу информацию про текущего персонажа! Тут я создал переменную - person.name1 и именно к это переменне я обращаюсь внутри метода, что Не круто. Круто - это, когда вместо person здесь я могу указать Ключевое слово this - с перевода  Это!
// this и является данным Объектом person!
// }
//  }
 
 
 //person.info()
 
 //------------------------------------------------------------------------------------------------------------
 
 // Объяснение - почему всётаки стоит использовать this, что в Context, который чуть выше?
 
 //const logger = { // сощдал новый Объект
 //keys(obj) { // метоl  keys, который будет выводить в console.log() Ключи объекта! 
 //console.log('obgect Keys', obgect.Keys(obj))
 //}
 //}
 
 //logger.keys(person) // насколько я поня - позаимствовал значения в предыдущим Объекте для своих Новых Ключей. Убедиться в Этом! 
 
 
 // Другой вариант развитие Событий
 
 //const loger = {
 //keys() { // в мкобках параметр уже убираю
 //console.log('Objekt Keys:', Object.keys(this)) // прелесть в том, что я могу пользоваться методом keys, если он написан таким образом для того, чтобы выводить в console.log() Любой Объект! 
 //}
 //}
 
 //loger.keys(person) // я выведу Objekt Keys: ['keys']! Через  Object.keys я пробегаюсь по this, а this - это и есть Объектloger! Object.keys(this)) - если в скобках напишу loger, то будеь тоже самое, а именно - Objekt Keys: ['keys']
 
 
 //------------------------------------------------------------------------------------------------------------
 
 // Вызываю методы через Методы. Методы - это и есть Объекты! 
 
 
 //const loger = {
 //keys() { 
 //console.log('Objekt Keys:', Object.keys(this)) 
 //}
 //}
 
 //const baund = loger.keys.bind(person) // у  метода keys вызываю метод bind! Метод bind по сути привязывает определённый контекст, который я сам выберу! baund - это Функция! keys.bind(loger) - Если в скобки добавлю person вместо loger, то  я выведу Ключи уже Другого Объекта! 
 
 // фишка этого способа в том, что я пользуюсь методом keys - объекта logera, котрый ничего не знает об Объекте person и при помощи метода bind(person) я указываю this - вывести Ключи уже Объекта person! 
 // в самом низу пишу baund(), чтобы вывести уже через эту функцию Ключи Объекта person! Хех 
 
 //baund() // вызываю функцию baund() и  получаю тоже, что и чуть выше -  Objekt Keys: ['keys']!
 
 //loger.keys.call(person) // аналогично - только упрощённый вариант! Метод baund возващает новую функцию и потом я вызываю её уже, когда хочу, а метод call сразу Бандит эту функцию и Сразу вызывает - тоесть я её нигде не вызываю и не создаю! 
 
 // ----------------------------------------------------------------------------------------------------------
 
 // Метод - keysAndValues
 
 
 // const loger = {
 // keys() { 
 // console.log('Objekt Keys:', Object.keys(this)) 
 // },
 // keysAndValues() {
 // 'keys', Value
 // Object.keys(this).forEach( (key) => { // keys(this) - возвращает массив. forEach, где будем получать Ключ Объекта
 // console.log(`"${key}": ${this[key]}`) // вывожу Ключ key  и после вывожу Значенине. Надо получить Value, но this - это тоже Объект - поэтому пишу ${this[key]} !
 // })
 // }
 // }
 
// loger.keysAndValues.call(loger)  // Буду видеть где и какой у меня Получившийся Ключ со Значением -  "keys": keys() { 
 
   // 1.) console.log('Objekt Keys:', Object.keys(this)) 
   // } - Первый Получившийся Ключ со Значением!!!!!!
 
 
   // 2.) "keysAndValues": keysAndValues() {
 
   //'keys', Value //  Второй Получившийся Ключ со Значением!!!!!!!! 
 
  // Object.keys(this).forEach( (key) => { // keys(this) - возвращает массив. forEach, где будем получать Ключ Объекта
   //console.log(`"${key}": ${this[key]}`) // вывожу Ключ key  и после вывожу Значенине. Надо получить Value, но this - это тоже Объект - поэтому пишу ${this[key]} !
   //})
  // }
 
 //-----------------------------------------------------------------------------------------------------------
 
 // Всё тоже самое, что и Выше Метод keysAndValues - только Химичу! Хех
 
  // 1.) loger.keysAndValues.call(person) // Если выведу person, то получу вессь Исходный Результат Объекта person!
 
  // 2.) loger.keysAndValues.call({ 'a': 1, 'b': {c: 2}}) 
 
 // Результат: "a": 1 
 // "b": [object Object]
 
 // 3.)  loger.keysAndValues.call({ 'a': 1, 'b': 2) 
 
 // Результат: "a": 1 
 // "b": 2
 











































 


























