function formAddTaskHandler(event){
    event.preventDefault()

    let id = new Date().getTime();
    let newTask = {
        title: this.elements.title.value,
        status: 1, // 1 - todo, 2 - inprogress, 3 - done
        edited: id,
    }

    if (!newTask.title) {
        this.elements.title.parentNode.classList.add('has-error')
        return
    }

    addTask(newTask, id)

    localStorage.setItem(id, JSON.stringify(newTask))

    $(modalAddTask).modal('hide')

    this.reset()

    updateBadges()
}

function deleteButtonHandler() {
    let taskElement = this.parentNode.parentNode

    let taskId = taskElement.dataset.id

    localStorage.removeItem(taskId)
    taskElement.parentNode.removeChild(taskElement)

    updateBadges()
}

function editButtonHandler() {
    let taskElement = this.parentNode.parentNode

    let taskId = taskElement.dataset.id

    let task = JSON.parse(localStorage.getItem(taskId))

    for (let key in task) {
        if (formEditTask.elements[key]) formEditTask.elements[key].value = task[key]
    }

    formEditTask.elements.id.value = taskId

    $(modalEditTask).modal('show')


}

function formEditTaskHandler(event) {
    event.preventDefault()

    let taskId = this.elements.id.value

    let task = {
        title: this.elements.title.value,
        status: +this.elements.status.value,
        edited: new Date().getTime(),
    }
    
    let itemElement = document.querySelector(`[data-id="${taskId}"]`)
    itemElement.parentNode.removeChild(itemElement)
    
    addTask(task, taskId)
    
    localStorage.setItem(taskId, JSON.stringify(task))
    
    $(modalEditTask).modal('hide')

    updateBadges()
}

function modalAddTaskHandler() {
    formAddTask.elements.title.parentNode.classList.remove('has-error')
    formAddTask.elements.title.focus()
}

function formRemoveAllHandler(event) {

    event.preventDefault()

    let parentNode = document.querySelector('div.active[role="tabpanel"]')

    for (let key in localStorage) {
        if (localStorage.hasOwnProperty(key)){

        let task = JSON.parse(localStorage[key])

        let currentStatus = +parentNode.children[0].dataset.status //ToDo (Изменить способ поиска статуса)

        if (task.status === currentStatus) {

            let item = parentNode.querySelector(`[data-id="${key}"]`)

            parentNode.querySelector('ul').removeChild(item)

                localStorage.removeItem(key)
            }
        }
    }
    $(modalRemoveAll).modal('hide')

    updateBadges()
}

function modalRemoveAllHandler() {
    
    let defaultText = formRemoveAllDefaultText

    formRemoveAll.innerHTML = defaultText

    let taskQuantity = document.querySelector('[role="tabpanel"].active > ul').childNodes.length

    if (!taskQuantity) {
        
        formRemoveAll.innerHTML = '';    
        formRemoveAll.innerHTML = '<i>There is nothing to delete here</i>'; return
    }

    let taskName = document.querySelector('strong#sectionName')

    taskName.innerHTML = `"${document.querySelector('[role="tablist"] > .active > a').innerHTML}"`

    document.querySelector('strong#taskQuantity').innerHTML = `(${taskQuantity})`

    let sLetter = document.querySelector('span#sLetter')

    if (taskQuantity !== 1){
        sLetter.innerHTML = 's'
    } else {
        sLetter.innerHTML = ''
    }
}

