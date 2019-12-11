function addTask(newTask, id){


    let taskElement = document.createElement('li')
    taskElement.classList.add('list-group-item')
    taskElement.innerText = newTask.title
    taskElement.setAttribute('data-id', id)


    let taskContainer = document.querySelector(`[data-status="${newTask.status}"]`)
    taskContainer.appendChild(taskElement)

    
    let buttons = {
  container: document.createElement('div'),
  edit: document.createElement('button'),
  delete: document.createElement('button'),
};

buttons.edit.classList.add('btn', 'btn-warning', 'btn-edit', 'btn-xs');
buttons.edit.innerHTML = '<i class="glyphicon glyphicon-pencil"></i>';
buttons.edit.addEventListener('click', editButtonHandler)


buttons.delete.classList.add('btn', 'btn-danger', 'btn-delete', 'btn-xs');
buttons.delete.innerHTML = '<i class="glyphicon glyphicon-trash"></i>';
buttons.delete.addEventListener('click', deleteButtonHandler);

buttons.container.appendChild(buttons.edit);
buttons.container.appendChild(buttons.delete);

buttons.container.classList.add('pull-right', 'buttons-container');

taskElement.appendChild(buttons.container);
    
}




