


 const person = {
 name: 'Daniil',
 lasName: 'Shlyapkin',
 age: 23,
 langvegese: ['Ru', 'En', 'Go'],
 isFull: true,
 isProgrammer: true,
//'complex key': 'Complex Value',
//['key_' + (1 + 3)]: 'Compuped key', // key_4 - хочу допустим эту строчку убрать
 greet() { 
 console.log('Привет!') 
   },
   info () {
    //console.log('this', this)
    console.info('Информация про человека по имени:', this.name) //  this это и есть person 
   }
  }


//console.log(person.name)
//console.log(person['age'])
//const lanLan = 'langvegese' 
//console.log(person[lanLan])
//console.log(person['complex key'])

//console.log(person)
//person.greet()


//person.age ++
//person.langvegese.push('Беларусия')
//person['key_4'] = undefined
//delete(person['key_4']) // Удалил строчку
//console.log(person['key_4'])



// детарилизация------------------------------------------------------------------------

//const lel = {name, age: personAge,  langvegese} = person
// const lel = {age: personAge =10} // Если в объекте в зачении ключа age стояло бы underfind, то в итоге по умолчанию стояло бы = age: 10

//console.log(lel)


//const name1 = person.name
//const age1 = person.age
//const languages = person.langvegese

//console.log(name, personAge, langvegese) // 2 способа = одно и тоже

// использование цыкла--------------------------------------------------------------

// for(let key in person) {
// if(person.hasOwnProperty(key)) {

// } // проверка. У объекта person есть своё собственное свойство, которое не находится в прототипе key - вот только тогда можно делать console.log(). Защита кароче, чтобы цыкл for in бежал только по объекту - не заходя в прототипы  

//console.log(key) // вывел ключи в виде строк
// console.log('key:', key) // тут у меня key и key я получаю успешно
// console.log('Value', person[key]) //Хочу получить Value - то значение, которое находится в этом ключе, то могу обратиться к объекту person - через квадратные скобки обращаюсь к самому Ключу [key] 
// }
// console.log(person)


//Object.keys(person).forEach ( (key) => { // через метод keys получаю ключи объекта. При выведении  получаю массив, состоящий из ключей объкта

//console.log('key:', key) 
//console.log('Value', person[key])
//}) //должно получится тоже самое, что и в  цыкле for in со всеми console.log()

// Context -----------------------------------------------------------------------


//person.info() // вывел нужную мне строку через функцию info () {console.info()}
  


const logger = {
keys() { // метод keys выводит в консоль ключи объекта
console.log('Object Keys: ', Object.keys(this))  
},

keysAndValues () {
// "key": value
//Object.keys(this).forEach(key => {
  //console.log(`"${key}": ${this[key]}`) // вывожу ключ key и как значение хочу вывести Value. this в моём случае - это тоже объект - поэтому и могу написать - this[key]
 //}) // вот эта конструкция возвращает массив. Поэтому могу вызвать метод forEach(), где буду получать ключ объекта forEach((key => {
//})
//const salf = this
Object.keys(this).forEach(function(key)  { 
console.log(`"${key}": ${salf[key]}`)
}.bind(this))
},

withParams (top = false, bitween = false, bottom = false) { // хочу регулировать способы отображения объектов, воспользовавшись методом, который уже использовал - идёт после if - сразу чуть пониже.
  if(top) {
    console.log('----- Start --------')
  }
  Object.keys(this).forEach((key, index, array)  => {
  console.log(`"${key}": ${this[key]}`)

  if(bitween && index !== array.length -1) { // Если index не ровняется array.length -1, тоесть если это не последний элемент, тогда мы выводим. Насколько я понял  index ровняется и исходя из логики одно такое деоение (-----------------) прям перед End исчезает
    console.log('-----------------')
  }
  })

  if(bottom) {
    console.log('----- End --------')
  }
  
}
} // могу и через анонимную функцию сделать тоже самое - только везде будет  undefined, так как function(key) - именно function создаёт новый контекст this[key] и this[key] уже не это this[key]. Можно исправить ситуацию двумя способами: 1.) сохранить контекст - созать новую переменную и обращаться к selfu - const salf = this. 2.) можно через метод bind() решить проблему - там, где заканчивается функция, можно вызвать метод bind на this. Получится .bind(this) Метод Вне функции и сооттветственно он нормальный



//logger.keys(person) // через метод keys я добавляю в объект person значеня ключей объекта logger. Функции и методы в java.skript являются объектами 


//const bound = logger.keys.bind(person) // метод bind берёт и привязывает определённый констекст, который я сам выберу. bind(logger) - привязал объект logger. Обновил страницу и ничего нет, потому что метод bind возвращает новую функцию - я назову её -  bound. bound - это функция и если я вызоу bound()
//bound() -  я получу Obgect Keys: ['keys'], потому что я привязал контекст logger и this стал loggerom. Фишка в том, что я пользуюсь методом keys объекта logger, который ничего не знает про объект person. И с помощью метода bind я  говорю, что - пожалуйста в этом методе this будет тем объектом, который я сам передам. В моём случае это person. И на выходе я получаю функцию - const bound, которую я могу вызвать когда угодно и ей пользоваться 

//logger.keys.call(person) // аналогично - только тут я не задаю новую функцию, и не создаю как было с bind() - была функция - const bound. Метод call бандит эту функцию и сразу вызывает кароче - негде её дополнительно не создаю

//logger.keysAndValues.call(person) // (persone) - получу исходный результат. Если допстип напишу - logger.keysAndValues.call(a: 1, c: {b: 2}) - получу тогда
// 'a': 1
// 'c': [obgect Obgect]

// ------------------------------------------------------------------------------
// К top = false, bitween = false, bottom = false относится. Хех

logger.withParams.call(person, true, true, true) // 1 параметр отвечает за контекст, а 2 уже будет соответствовать topu

logger.withParams.apply(person, [true, true, true]) // метод apply анаалогичен методу call за одним исключением - если call принимает в себя неограниченное колличество параметров, то метод apply - может принимать в себя только 2 параметра. Второй параметр в случае с apply я оборачиваю в Массив. 2 парамерт - это всегда Массив, из тех аргументов, которые нужны для функции 







