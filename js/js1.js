//выбрать все задачи и контейнер//
let tasks = document.querySelectorAll('.task')
let container = document.querySelector('.tasks-container')
const btn1 = document.getElementById('btn1')
const btn2 = document.getElementById('btn2')
const btn3 = document.getElementById('btn3')
const btn4 = document.getElementById('btn4')
const btn5 = document.getElementById('btn5')
const initialTasks = [...tasks]
const searchInput = document.getElementById('searchInput')

//сортировка по алфавиту//
function compare(a, b) { 
    if (a.querySelector("span").innerHTML > b.querySelector("span").innerHTML) return 1
    if (a.querySelector("span").innerHTML == b.querySelector("span").innerHTML) return 0
    if (a.querySelector("span").innerHTML < b.querySelector("span").innerHTML) return -1
}
btn1.addEventListener("click", function () {
    let newTasks = [...tasks].sort(compare);
    //очистить контейнер//
    container.innerHTML = '';
    //вывести новые задачи//
        for (let i in newTasks) {container.append(newTasks[i]) }
})
// обратный порядок//
function compareReverse(a, b) { 
    if (a.querySelector("span").innerHTML < b.querySelector("span").innerHTML) return 1
    if (a.querySelector("span").innerHTML == b.querySelector("span").innerHTML) return 0
    if (a.querySelector("span").innerHTML > b.querySelector("span").innerHTML) return -1
}
btn2.addEventListener("click", function () {
    let newTasks = [...tasks].sort(compareReverse)
    container.innerHTML = ''
        for (let i in newTasks) {container.append(newTasks[i])}
})
// срочные задачи//
btn3.addEventListener("click", function() {
    let newTasks = [...tasks]
    newTasks = newTasks.filter(function(item) {
        return item.classList.contains('immediate');})
    container.innerHTML = ''
        for (let i in newTasks) {container.append(newTasks[i])}
})


// поиск по тексту //
btn4.addEventListener("click", function() {
    let value = searchInput.value;
    // делает из колекции задач масив //
    let newTasks = [...tasks]
    newTasks = newTasks.filter(function(item){
        return item.innerHTML.indexOf(value) != -1})
    container.innerHTML = ''
        for (let i in newTasks) {
    container.append(newTasks[i])}
})
// сброс всех фильтров //
btn5.addEventListener("click", function() {
    let input = document.querySelector('input[type="text"]')
        if (input) input.value = ''
    container.innerHTML = ''
        for (let i in initialTasks) {container.append(initialTasks[i])}
})
// нахождение формы и ее элементов //
const todoForm = document.getElementById('todoForm')
const taskTextInput = document.getElementById('taskText')
const taskImmediateCheckbox = document.getElementById('taskImmediate')

// добавление задач //
todoForm.addEventListener('submit', function(e) {e.preventDefault()
    let text = taskTextInput.value.trim()
    if (text === '') return
        let newTaskDiv = document.createElement('div')
        newTaskDiv.className = 'task'
        let textSpan = document.createElement('span')
        textSpan.innerHTML = text
        newTaskDiv.append(textSpan)
        container.append(newTaskDiv)
        tasks = document.querySelectorAll('.task')
     if (taskImmediateCheckbox && taskImmediateCheckbox.checked) {
        newTaskDiv.classList.add('immediate')
        let exclamSpan = document.createElement('span')
        exclamSpan.className = 'vaznoe'
        exclamSpan.innerHTML = ' !'      
        newTaskDiv.append(exclamSpan)
    }
    container.append(newTaskDiv)
    tasks = document.querySelectorAll('.task') 
    todoForm.reset()
})
