let modalAddTask = document.querySelector('#modalAddTask')
let formAddTask = document.querySelector('#formAddTask')
let modalEditTask = document.querySelector('#modalEditTask')
let formEditTask = document.querySelector('#formEditTask')
let buttonConfirm = document.querySelector('#buttonConfirm')

// $(formDeleteTask).modal('show')
// $(modalEditTask).modal('show') Проверка. Всплывает при загрузке страницы


formAddTask.addEventListener('submit', formAddTaskHandler)
formEditTask.addEventListener('submit', formEditTaskHandler)
// modalAddTask.addEventListener('shown.bs.modal', modalAddTaskHandler)
$(modalAddTask).on('shown.bs.modal', modalAddTaskHandler)

// buttonConfirm.addEventListener('click', buttonConfirmHandler)

for(let key in localStorage) {
    if(localStorage.hasOwnProperty(key)){
        let task = JSON.parse(localStorage[key])
        console.log(task)
        addTask(task, key)
    }
}

