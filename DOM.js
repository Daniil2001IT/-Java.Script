// Старые методы и они доступны в Браузерном IPEI. document и window это Методы
// Глобальный объект window отоносится только к Браузеру. Каждый из Тэгов это узел. Каждый из Тэгов в HTML является Нодой. Dom дерево - не является частью HTML и Java.Skript!!!! DOM дерево является IPEI Браузера и просто  Java.Skript имеет к этому доступ! Изучаю сейчас работу Java.Skript с IPEI Браузера!

//window.alert('1') // window глобальный объект. У объекта window  вызываю функцию alert()

//window.prompt('как тебя зовут?') // тоже глобальная функция, как и window.alert('1')

//window.confirm('как тебя зовут?') // метод confirm - при помощи него лишний раз подтверждаю - окей или отмена - сразу после promta
// ----------------------------------------------------------------------------------


//const heading = document.getElementById('Hellow') // Объект, представляющий Дом - дерево. document - это Глобальный объект в Браузере, доступный в Java.Skript, который представляет документ - котором я Работаю! getElementById - метод, который берёт и возвращает ссылку на тот объект, который находится в DOM - дереве - на id в js.HTML посмотри и всё поймёшь

//console.log(heading) // heading это у нас - <h1 id = "Hellow">Привет Мир!</h1>, котрый я получил через метод getElementById. Через console.log вывел  <h1 id = "Hellow">Привет Мир!</h1>

//console.dir(heading.textContent) // позволит раскрыть сам это объект и глянуть на его свойства 


//heading.textContent = 'Как дела?' // при помощи метода textContent я напрямую изменяю в js.html строку - Привет Мир на строку - Как дела?. Новая строка высвечивается на главном экране Браузера

//heading.style.color = 'red' // пишу это в Браузере в разделе консоль. Записываю всё в строчку, так как это java.skript. Поменял цвет
//'red' 

//heading.style.textAlign = 'center' //  через textAlign переместил всё в центр
//'center'

//heading.style.backgroundColor = 'blue' // фон 
//'blue'

//heading.style.padding = '2rem' // ругулировка paddinga
//'2rem'
// ----------------------------------------------------------------------------------


//setTimeout ( () => { // сделал живую анимацию через кубэк функцию - setTimeout. Хех
//heading.textContent = 'Как дела?'
//heading.style.color = 'red'
//heading.style.textAlign = 'center'
//heading.style.backgroundColor = 'blue'
//heading.style.padding = '2rem'
//}, 1500)

// ----------------------------------------------------------------------------------

const heading = document.getElementById('Hellow') // обращать внимание на окончание - getElement - в единственном числе, значит могу применить к одному тэгу с id например

//const heading2 = document.getElementsByTagName('h2')[0] // устаревший метод - лучше пользоваться другим
// обращаюсь к нулевому методу, если <h2><</h2> допустим 1 в приложении или если не нуждаюсь в использовании методов map, reduce и так далее 
// Такой же принцип - создаю новую переменную, пишу document.getElementsByTagName()
// Тут уже getElements в множественном числе - значит к нескольким

//const heading2 = document.getElementsByClassName('h2-class')[0] // тоже метод устаревший 
// вывел кароче через этот способ теперь - <h2 class="h2-class">This is heading 2</h2>
// уже ищу элементы не по TagName, как в предыдущем варианте, а по ClassName().

//const heading2 = document.querySelector('.h2-class') // Современный способ и болле универсальный! Хех. Здесь я прописываю css селектор - их может быть нескольько, они  позволют получить какой - либо элемент. Напрмер - могу вывести сразу свой тэг - сразу после метода querySelector - ('.h2'). Могу забрать по ClassName - ('.h2-class') - пишу точку, потому что это css селектор и классы обозначаются точками!

//const heading2 = document.querySelector('#sab-hellow') // querySelector возвращает всегда 1 ЭЛЕМЕНТ - первый попавшийся!!!!!! Тоесть, если у меня 2 тэга <h2></h2>, то querySelector выведет тот, который идёт самым первым!
// хочу вывести через id - пишу тогда #, как ранее при работе с css. Хех. Вывел полную ссылку с тэгом - h2!

const heading2 = document.querySelector('h2') // хочу вывести h2 после первого h2. Хех. heading2 тоже является узлом - я у него могу вызывать так же querySelector например, потому что в этом плане - heading2 такого же типа, как и документ 
console.dir(heading2)

//----------------------------------------------------------------------------------
//const heading3 = heading2.nextElementSibling // при помощи метода nextElementSibling я вывел элемент с тэгом <h2>Усссссссссссссссс</h2>, хотя он у меня идёт вторым по счту после такого же тыга <h2></h2> и по логике - первый попавшийся и одинаковый элемент должен выводиться в Браузере, но из - за nextElementSibling вывел Нужный мне элемент, который 2 по счёту! 
//----------------------------------------------------------------------------------

const h2List = document.querySelectorAll('h2') // забирает в себя множество элементов - как в массивах - (...all). Тут я забираю все заголовки h2
console.log(h2List)

const heading3 = h2List[h2List.length -1] // - 1 пишу, потому что index всегда на единицу меньше. 
// Самый Адэкватный Спопсоб h2List[1] - такой же результат
console.log(heading3) // вывел <h2>Усссссссссссссссс</h2> сред других выведенных h2


setTimeout ( () => { // через функцию делаю тоже самое
addStylesTo(heading, 'javaSkript')
}, 1500)


setTimeout ( () => { 
addStylesTo(heading2, 'Красавелло - Бомбалэло!', color = 'white', '2rem')
}, 3000)


const link = heading3.querySelector('a') // 'a' - это Ссылка. Ссылку в js.html могу отдельно получить через children[] и через qwarySelector(). Сейчас я получу её отдельно через переменную link


setTimeout ( () => { 
addStylesTo( a, 'Практикуйся! У Тебя Всё Получится! Хех :)', color = 'yellow')
}, 4500) 
// 1 способ) - Хочу теперь, чтобы по строке практикуйся... я мог перейти по ссылке, которую оставил в одном из тэгов h2 - в js.html! Без qwarySelector() ссылка не высветится, так как я беру и Убираю Сслку в  Браузере - Самим Текстовым Контентом!  Поэтому я передаю Дочерний Элемент, который на самом деле является Ссылкой - делаю это путём добавления - qwarySelector. Хех.
// 2 спопсоб) - Это использовать свойство ond - children и меня интересует нулевой элемент - [0], потому что у меня там единственный Дочерний Элемент находится. qwarySelector(),
//  Чисто Сюда так же использовал - (node.style.display = 'blook') и (node.style.width = '100%'), котрые нифина не работают - 3 строка в Браузере не занимает всё пространство, как Верхние 2



function addStylesTo (node, text, color = 'red', fontsize) {  // fontsize стоит по умолчанию. // function addStylesTo() - тоже самое - только обращаюсь уже не к heading, а к node. Работает в связске с setTimeout!
node.textContent = text
node.style.color = color
node.style.textAlign = 'center'
node.style.backgroundColor = 'blue'
node.style.padding = '2rem'
//node.style.display = 'blook' // при Обучении у меня это Не работало!
//node.style.width = '100%%'   // при Обучении у меня это Не работало!
// falsy - это такие значения, как: '' - пустакая строка, undefind, null, 0, false
// Если fontsize равен какому - то из значений в falsy, то заданный мной уже fontsize в функциях setTimeout, которые выше не сработает и в Блок if я Не попаду! Поэтому Значения falsy Не повторяю! 
if(fontsize) { // такая проверка спросит - если fontsize не в falsy
node.style.fontsize = fontsize
}
}

// События - при помощи них я добавляю Динамики. Есть 2 простых способа:

heading.onclick =  () => { // событие начинаю с on и пишу уже название самого события. Как вариант - через стрелочную функцию могу обращаться. mdn события доступные в WB - вбиваю и нахожу справочник по событиям! 
// https://developer.mozilla.org/ru/docs/Web/Events
if(heading.style.color === 'red') {
heading.style.color = '#000'
heading.style.backgroundColor = '#fff'
} else { // а иначе нужно сделать всё наоборот
heading.style.color = 'red'
heading.style.backgroundColor = '#000'
}
}


//heading2.addEventListener('dblclick', () => {  // К каждому события приписываю on, чтобы оно Работало! addEventListener - добавляет событие в слушатель. Через функцию могу вызвать нужное мне Событие. 2 параметра включает - строку, в котрой указал Событие - dblclick и функцию - стрелочную например!
//if(heading2.style.color === 'white') {
//heading2.style.color = 'gray'
//heading2.style.backgroundColor = 'aqua'
//} else { // а иначе нужно сделать всё наоборот
//heading2.style.color = 'white'
//heading2.style.backgroundColor = 'aqua'
//}
//}) // Этот вариант почему - то не работает. Разобраться! Вместо него укажу варик, начинающий сразу с Метода!!!!!



heading2.onclick = () => {
if(heading2.style.color === 'white') {
heading2.style.color = 'navy'
heading2.style.backgroundColor = 'aqua'
} else { // а иначе нужно сделать всё наоборот
heading2.style.color = 'white'
heading2.style.backgroundColor = 'cornflowerblue'
}
}


heading3.onclick =  () => { // событие начинаю с on и пишу уже название самого события. Как вапиант - через стрелочную функцию иогу обращаться. mdn события доступные в WB - вбиваю и нахожу справочник по событиям! 
// https://developer.mozilla.org/ru/docs/Web/Events
if(heading3.style.color === 'yellow') {
heading3.style.color = 'coral'
heading3.style.backgroundColor = 'cornsilk'
} else { // а иначе нужно сделать всё наоборот
heading3.style.color = 'floralwhite'
heading3.style.backgroundColor = 'darksalmon'
}
}
















