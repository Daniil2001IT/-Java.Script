
// Объекты

//const people = {
 //name: 'Daniil',
 //vzage: 23,
 //isProgrammer: true,
 //isFull: true,
 //langveges: ['Ru', 'Ger', 'Eng'],
 //'context person': 'context pep',
 //['key_' + (1 + 3)]: 'value',
 //run () {
 //console.log('Привет')   
 //},   
//info () {
   // console.log('this', this)
   //console.info('Информация о человеке по имени:', this.name) 
//}
//}

//console.log(people.name)
//people.run()
//const age0 = 'age'
//console.log(people[age0])
//console.log(people['context person'])
//people.isFull = false

//console.log(people.langveges.reverse())
//people.age--
//people['key_4'] = undefined
//console.log(people['key_4'])
//delete people['key_4']

//console.log(people)


//const name = people.name
//const age = people['age']
//const  isProgrammer = people['isProgrammer']



//const {name, age: personAge, langveges} = people

//console.log(name, personAge, langveges)

//for (let key in people) {
//if (people.hasOwnProperty(key)) {
//console.log('key', key)
//console.log('value', people[key])
//}
//}


//Object.keys(people).forEach ( (key) => {
//console.log('key', key)
//console.log('value', people[key])
//}) 


//people.info()


//const peppep = {
//keys () {
//console.log('const pepep', Object.keys(this))    
//},

//keysAndValuset () {
//Object.keys(this).forEach( (key) => {
    //console.log(`${'value'}: ${this[key]}`)   
//})
//}
//}

//1.) const bound = peppep.keys.bind(people)
//bound()

//peppep.keys.call(peppep)
 
 //2.) peppep.keysAndValuset.call(people)



//const loger = {
 //keys () {
 //console.log('Object Keys:', Object.keys(this))    
//},

//keysAndValues () {
//Object.keys(this).forEach( (key) => {
 //console.log(`"${key}": ${this[key]}`) 
//})  

//const self = this
//Object.keys(this).forEach( function (key) {
 //console.log(`$"{key}": ${this[key]}`) 
   // }.bind(this))   
 // },

  //withParams (top = false, betveen = false, bottom = false) {

    //if(top) {
    //console.log('----- Start -----')
    //}

 //Object.keys(this).forEach( (key, index, array) => {
 //console.log(`$"{key}": ${this[key]}`) 
    //if(betveen && index !== array.length -1) { // Если index не ровняется array.length -1 (если это не последний элемент - тогда мы выводим. Следующий элемент последний - поэтому последняя полоска Не выводится!!!!)
    //console.log('----------')
    //}
   //})  

   //if(bottom) {
   // console.log('----- End -----')
   // }
  //}
//}


//const bound = loger.keys.bind(people)
//bound()

//loger.withParams.call(people, true, true, true) // call принимает в себя неогранич. кол. параметров
//loger.withParams.apply(people, [true, true, true]) // только 2 авпвметра принимает. Эдэнтично 


//const people = {
  //name: 'Daniil',
  //vzage: 23,
  //isProgrammer: false,
  //isFull: true,
  //isSaskey: true,
  //langveges: ['Ru', 'Ger', 'Eng'],
  //'context person': 'context pep',
 // ['key_' + (1 + 3)]: 'value',
 // run () {
  //console.log('Привет')   
  //},   
 //info () {
     //console.log('this', this)
    //console.info('Информация о человеке по имени:', this.name) 
 //}, info2 () {
  // console.info('Привет Мир!, Жизнь прекрасна, если ты поймёшь...')
 //}
 //}
 
 
 //const pad = {
 //els () {
   //console.log('Ну, как ты Малая?', Object.keys(this))
 //},
 
 //hasHas() {
 //Object.keys(this).forEach( (key) => {
 //console.log(`"${key}": ${this[key]}`)  
 //})
 //const self = this
 //Object.keys(this).forEach( function (key) {
 //console.log(`"${key}": ${this[key]}`)  
 //}.bind(this))
 //},
 
 //withparents (top = false, betveen = false, bottom = false) {
 //if(top) {
 //console.log('----- Start -----')  
 //}
 //Object.keys(this).forEach( (key, index, array) => {
  // console.log(`"${key}": ${this[key]}`)
  // if(betveen && index !== array.length -1) {
   //console.log('------------')
  // }
 //})
 
 //if(bottom) {
  // console.log('----- End-----')  
   // }
  //}
 //}
 
 
  //pad.els.call(pad)
  // pad.withparents.call(people, true, true, true)
  //pad.withparents.apply(people, [true, true, true])
 

// ---------------------------------------------------------------------------------

// Антисинхронность

//const timeout = setTimeout( () => {
//console.log('After timeout')
//}, 2500);

//clearTimeout(timeout)


//const interval = setInterval( () => {
 // console.log('After timeout')
  //}, 1000);
  
 // clearInterval(interval)


//const dilay = (callback, wait = 3000) => {
//setTimeout(callback, wait = 3000)
//}

//dilay( () => { // если поставить setTimeout - будет тоже самое
 //console.log('After 2 seconds') 
//}, 2000)



//const delay = (wait = 1000) => {
  //const promise = new Promise( (resolve, reject) => { // resolve верно, reject ошибка
    //setTimeout( () => {
    //reject('Что - то пошло не так. Повторите попытку')
      //resolve()
  //}, wait)
//})
//return promise
//}


//delay(2500)
  //.then( () => {
   // console.log('After 2 seconds')
  //})

  //.catch(err => console.error('Error', err))  // сюда попадаю, если произошла какая то ошибка. Позволяет отлаливать Ошибки. Меньше приходится искать самому, если есть
  
  //.finally( () => console.log('Finally')) // Если пишу - выдаёт ошибку. Закоментировал, чтобы работало всё. Не знаю в чём ошибка


//const getData = () => new Promise (resolve => resolve([1, 1, 2, 3, 5, 8, 1 ]))

//getData().then(data => console.log(data))


//async function asynkExample() {  // async теперь антисинхронная функция.
 //try { // нативная. Встроенная функция - блок try catch()
  //await delay(3000) // await - Ждём пишется для того, чтобы ждать - пока не выпонитсятся данное действие! await оператор. async и await работаю в связске
  //const data = await getData()
 //console.log('Data', data)
  //} catch(e) {
  //console.log(e)
  //} finally {
  //console.log('Finally')
  //}
 //}  
 
//asynkExample()

// ---------------------------------------------------------------------------------

// DOOM - Дерево. Java.Skript при работе с Vebom. Тэги в IPEI это узлы, тоесть - node.
// Window и document - это объекты, относящиеся к Браузеру и представляющие DOOM - Дерево! Java.Skript и IPEI Браузера - это разные вещи! При помощи Java.Skript я могу влиять на браузер, задавая HTML Динамику - оживаю кароче страницу



//const heading = document.getElementById('Hellow')
//heading.textContent = 'Change from Java.Skript'
//console.dir(heading.textContent)


//const heading2 = document.getElementsByTagName('h2')[0]// устаревшая фигня - редко используют
//const heading2 = document.getElementsByClassName('h2-class')[0] // тоже устаревший способ. Через класс вывел уже, как и через id
//const heading2 = document.querySelector('h2') // указываю в скобках Тэг и вывожу ссылку!
//const heading2 = document.querySelector('.h2-class')
// querySelector всегда возврощает один Элемент - первый попавшийся!
//const heading2 = document.querySelector('#sub-Hellow') # пишу, так как имею дело с id! 
// пишу точку, так как это css селектор и классы обозначаются точками! Выводится вся ссылка, как и через id - ('#sub-Hellow'), так и через Класс - ('.h2-class')


//const heading2 = document.querySelector('h2') // querySelector - забирает один Элемент!
//console.dir(heading2)

// 1 способ вывести Второй по счёту одинаковый Тэг
//const heading3 = heading2.nextElementSibling //через nextElementSibling вывел второй по счёту <h2>. querySelector возвращает первый попавшийся Тэг, когда оба Тэга одинаковые - поэтому и написал - nextElementSibling, чтобы вывести <h2> - 2 по счёту!


// 2 способ вывести Второй по счёту одинаковый Тэг
//const h2List = document.querySelectorAll('h2') // querySelectorAll - забирает все Элементы! Забрал все заголовки h2!
//const heading4 = h2List[1]

//console.log(heading3)
//console.log(h2List)
//console.log(heading4)




//setTimeout ( () => {
//addStylesTo(heading, 'Java.Skript', 'red', '2rem', 'lightsalmon' ) 
//}, 1500)


//const link = heading4.querySelector('a') 

//link.addEventListener('click', (event) => { // добавил ещё event и передал его в console.log(), чтобы в Click on link - PointerEvent посмотеть свойства
//event.preventDefault() // с помощью preventDefault я теперь не могу перейти по ссылке в слове Практикуйся - кликаю на слово и выскакиваю тупо События! Перехода по ссылке - нет!
//console.log('Click on link', event.target.getAttribute('href'))
//const url =  event.target.getAttribute('href')

//window.location = url // програмно перешёл на ССылку.
 // через  event.target.getAttribute('href') - получаю ссылку в браузере - могу перейти, кликая на Практикуйся - не могу!
// через эту схему я работаю с link, где задаю логику - кликну по ссылке в слове - Практикуйся и так же перейду по ссылке, только в браузере останется запись - Click on link
//})


//setTimeout ( () => {
//addStylesTo(link,  'Практикуйся!', 'blue','2rem',  'papayawhip' ) // querySelector('a') - тэг <a></a> - это дочерний элемент heading4. Написал всё сюда, чтобы текст в HTML не стёр ссылку и, чтобы она Сохранилась
//}, 3000)


//setTimeout ( () => {
//addStylesTo(heading2,  'И у Тебя Уё Получится:)', 'white', '2rem', 'indigo' ) 
//}, 4500)
  


//function addStylesTo(node, text, color = 'red', fontSize, background = 'red') {
//node.textContent = text
//node.style.color = color
//node.style.background = background
//node.style.textAlign = 'center'
//node.style.padding = '2rem'
//node.style.display = 'block'
//node.style.width = '100%'
// falsy - это такие значения, как: '' - пустакая строка, undefind, null, 0, false. Хочу, чтобы работала логика в if - не повторяю значений falsy!
//if(fontSize) {
//node.style.fontSize = fontSize
//  }
//}


//heading.onclick = () => {
//if (heading.style.color === 'red') {
//heading.style.color = 'black'
//heading.style.backgroundColor = 'white'
// } else {
//heading.style.color = 'red'
//heading.style.backgroundColor = 'darksalmon'
// }
//}

// heading2.addEventListener - у меня почему - то не работал 
//heading2.addEventListener = ('dblclick', () =>  { // 2 параметра идут - текст - в виде события и функция
//if (heading2.style.color === 'white') {
//heading2.style.color = '#000'
//heading2.style.backgroundColor = '#fff'
//} else {
//heading2.style.color = 'white'
//heading2.style.backgroundColor = '#000'
//  }
//})





















