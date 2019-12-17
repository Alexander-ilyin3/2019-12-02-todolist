let modalAddTask = document.querySelector('#modalAddTask')
let formAddTask = document.querySelector('#formAddTask')
let modalEditTask = document.querySelector('#modalEditTask')
let formEditTask = document.querySelector('#formEditTask')
let buttonConfirm = document.querySelector('#buttonConfirm')

let formRemoveAll = document.querySelector('#formRemoveAll')
let modalRemoveAll = document.querySelector('#modalRemoveAll')

let formRemoveAllDefaultText = formRemoveAll.innerHTML

formAddTask.addEventListener('submit', formAddTaskHandler)
formEditTask.addEventListener('submit', formEditTaskHandler)

formRemoveAll.addEventListener('submit', formRemoveAllHandler)

$('[data-provide="datepicker"]').datepicker(
        {autoclose: true}
    );

$(modalAddTask).on('shown.bs.modal', modalAddTaskHandler)
$(modalRemoveAll).on('show.bs.modal', modalRemoveAllHandler)





const keysArray = Object.keys(localStorage)

keysArray.sort((prev, next) => {
    return JSON.parse(localStorage[prev]).edited - JSON.parse(localStorage[next]).edited
})

keysArray.forEach(key => {
    if(localStorage.hasOwnProperty(key)){
        let task = JSON.parse(localStorage[key])

        addTask(task, key)
    }
});

updateBadges()
refreshListOfLinks()

