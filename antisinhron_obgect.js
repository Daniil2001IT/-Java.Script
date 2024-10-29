
// антисинхронность - тоймаут и интервал могу использовать
// Event Loop // концепция

//const timeout = setTimeout (() => { // глобальная функция setTimeout () - включает в себя, как правило 2 аргумента. Возвращает объект timeouta
//console.log('After timeout') 
//}, 2500) // колличество мили - секунд. Делится на 1000 и получется 2.5 секунд - именно через 2.5 секунд появляется мой console.log()

//clearTimeout(timeout) // чищу timeout и нечего не выводится 

//const interval = setInterval (() => { // анологично. Уже использовал в функциях 
//console.log('After timeout') 
//}, 1000) // число говорит через, какой промежуток времени в мили секундах мне нужно запускать данный интервал - указал через каждую секунду

//clearInterval(interval)


// типичная задача -----------------------------------------------------------------

//const delay = (callback, wait = 1000) => { //  функционал timeout хочу продублировать - не могу прописать, потому что работаю с функцией delay. 
//callback - по идеи параметр, но могу использовать и как функцию - назову её callback, колличество мили - секунд
//setTimeout (callback, wait = 1000) // все теже параметры передаю 
//}
 
//delay (() => { // вызываю setTimeout, как и выше - только через функцию delay. Можно было бы вместо delay ипросто setTimeout указать. Ничего не поменялось бы.
//console.log('After 2 seconds')
//}, 2000) // в случает с setTimeout - 2000 делю на 1000 и получаю 2 секунды. Через 2 секунды появится мой console.log()


//  Промиссы - более прстой и надёжный способ


const delay = (wait = 1000) => {  // 1 параметр использую. 1000 - 1 секунду жду
const promise = new Promise((resolve, reject) => { // глобальный класс. Колбэк Promisa принимает в себя 2 параметра - функцию resolve и функцию reject. При помощи функции reject - могу говорить, что при антисинхронности кода произошла ошибка. resolve - это, когда всё хорошо. Хех
setTimeout(() => {  // передаю функцию колбэк и параметр wait, который передавал в функции delay.
//resolve()
reject('что - то пошло нетак') 
}, wait)
})
return promise
}

//delay(2500) // 2.5 секунды. функция delay вернёт промисс - return Promise. А у промисса есть методы, как:

//.then( () => { // каждый из этих методов возвращает промисс 
//console.log('After 2 seconds')
//}) 
//.catch( err => console.error('Error:', err)) // Каждый из этих методов принимает в себя коубэк. В метод кэч попадаю, если произошла какая - то ошибка. При момощи catch могу отлавливать ошибки и как - то их оформлять. при работе с проектами можно столкнуться
//.finally( () => console.log('finally'))



// другой пример -----------------------------------------------------------------

const getData = () => new Promise( resolve => resolve([ // новый более удлбный метод. Стрелочная функия внутри такой же функции. resolve => resolve - хочу заризоврить этот промисс. [] - вкинул массив, состоящий из чисел Фибоначи
1, 2, 3, 5, 8, 13
])) 


//getData().then(data => console.log(data))


async function asyncExample () {
await delay (3000) // вызвал метод delay на 3 секунды. then не использую в этом примере. Хочу дождаться пока завершится задержка - await delay (3000) и только после этого выполнил - getData()! использую синтаксис - await - просто так не могу его записать, так как он является антисинхронным и чтобы всё было чётко - перед function дописываю - asynk 
const data = await getData() // await означает, что ждём, чтобы выполнять каждую задачу поочерёдно. const data - тоже самое, что и через then - только через переменную
console.log('Data', data)
}

asyncExample()


// в промиссах могу оформлять метод catch. Как catch работает с async awaitom? Сейчас расскажу


async function asyncExample () {
try { // нативная конструкция - та, которая встроенная в язык, которая называется blook try catch 
await delay (3000) 
const data = await getData() 
console.log('Data', data)
} catch (e) {
console.log (e) // если попаду в метод catch, если будет какая - то ошибка, то попаду сразу в консоль. Напишет - ('что - то пошло нетак'), какя и указывал в reject чуть ли не в самом вверху. Будет теперь гореть не крассным, а обычном цветом, так как эту ошибку я уже обработал  
} finally {
console.log ('finally')
}   

}
asyncExample()












































