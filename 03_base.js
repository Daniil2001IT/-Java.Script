
//const person = {
//name1: 'Daniil',
//age: '23',
//isProgrammer: true,
//langvigis: ['ru', 'en', 'de'],
//'komplex key': 'complex Value', // так как 'komplex key:' в кавычках, то могу писать с пробелом
//['key_' + (1 + 3)]: 'compluted Key',
//greet() { // идёт ключ и затем Анонимная функция. Функция является методом. greet - Метод, потому что внутри объекта person
//console.log('greet from person')
 // }
// }

//console.log(person.name) 
//const alAl = 'age'
//console.log(person[alAl])
//console.log(person['komplex key'])
//console.log(person)
//person.greet()


//person.age ++
//person.langvigis.push('Belarusiy')
//person['key_4'] = undefined

//console.log(person)
//console.log(person['key_4'])
//delete person.key_4

// Диструктуризация-----------------------------------------------------------------------------------------


// const name1 = person.name
// const age = person.age
// const langvigis = person.langvigis

// console.log(name1, age, langvigis)

//const lasLas = {name1, age: personAge, langvigis} = person

//console.log(name1, personAge, langvigis)


// Цыклы Объекта--------------------------------------------------------------------------------------------------


//console.log(person) // console.log(person) должен быть выше Цыкла - иначе console.log() внутри Цыкла не будут правильно Работать! 

// for (let key in person) {
// if (person.hasOwnProperty(key)) { 
// console.log(key)
// console.log('key:', key) // тут будет 'key' и  key мы получаем успешно
// console.log('Value:', person[key]) // так как хочу получить 'Value' - то значение, котрое находится в этом ключе, то мы обращаемся к объекту person
 //    }
 // }

// Методы Object-----------------------------------------------------------------------------------------------

//const person = {
//name1: 'Daniil',
//age: '23',
//isProgrammer: true,
//langvigis: ['ru', 'en', 'de'],
//'komplex key': 'complex Value', 
//['key_' + (1 + 3)]: 'compluted Key',
//greet() {  
//console.log('greet from person')
// }
//   }


  // Получится тоже самое, что и в Цыкле, который Выше! Принцип один и тоже - теперь тут Методы и по другому расписано! 
   
  //const keys = Object.keys(person) // метод  keys получает Ключи Объекта. метод  keys не бежит по прототипу, как в Цыкле и поэтому проверку можно не использовать!  
  //console.log(keys) // вывожу Ключи в виде Массива! 
  //keys.forEach( (key) => {
  //console.log('key', key) 
  //console.log('Value:', person[key])
  //}) // метод forEach() делает аттерацию по Массиву, где 1 параметром принимает кубэк функцию. (// кубэк функция key) =>...

// краткая вкрсия

//Object.keys(person).forEach( (key) => {
//console.log('key:', key) 
//console.log('value:', person[key])
// })

//-------------------------------------------------------------------------------------------------------------

// Context - одна из самых интересеных тем в java.skript


const person = {
 name1: 'Daniil',
  age: '23',
  isProgrammer: true,
  langvigis: ['ru', 'en', 'de'],
  //'komplex key': 'complex Value', 
  //['key_' + (1 + 3)']: 'compluted Key',
  greet() {  
  console.log('greet from person')
  },
   info() { // Метод info
   console.log('this',this)
   console.info('Информация человека по имени:', this.name1 ) // в консоли тоже есть свои методы. Выывожу информацию про текущего персонажа! Тут я создал переменную - person.name1 и именно к это переменне я обращаюсь внутри метода, что Не круто. Круто - это, когда вместо person здесь я могу указать Ключевое слово this - с перевода  Это!
   // this и является данным Объектом person!
   }
     }


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


//const loger = {
//keys() { 
//console.log('Objekt Keys:', Object.keys(this)) 
//},
//keysAndValues() {
//'keys', Value
//Object.keys(this).forEach( (key) => { // keys(this) - возвращает массив. forEach, где будем получать Ключ Объекта
//console.log(`"${key}": ${this[key]}`) // вывожу Ключ key  и после вывожу Значенине. Надо получить Value, но this - это тоже Объект - поэтому пишу ${this[key]} !
//})
//}
//}

//loger.keysAndValues.call(loger)  // Буду видеть где и какой у меня Получившийся Ключ со Значением -  "keys": keys() { 

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






















