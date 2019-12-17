function addTask(newTask, id){

    let taskElement = document.createElement('li')
    taskElement.classList.add('list-group-item')
    
    taskElement.setAttribute('data-id', id)
    
    let taskContainer = document.querySelector(`[data-status="${newTask.status}"]`)

    taskContainer.appendChild(taskElement)

    taskElement.insertAdjacentHTML("beforeend", `
    <div class="panel-group">
    <div class="panel panel-default">
      <div class="panel-heading" id="${id}">

      </div>
      <div id="${'c-'+id}" class="panel-collapse collapse">
        <div class="panel-body">${newTask.description || 'No description'}</div>
        <div class="panel-footer">${newTask.dateTime}</div>
      </div>
    </div>
    </div>`
  )
    let taskLink = document.createElement('a')
        taskLink.innerText = newTask.title
        taskLink.setAttribute('data-toggle', 'collapse')
        taskLink.setAttribute('href', `#${'c-'+id}`)

        document.querySelector(`[id="${id}"]`).appendChild(taskLink)

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

  document.querySelector(`[id="${id}"]`).appendChild(buttons.container);
}

const updateBadges = () => {
  const statisticBages = document.querySelectorAll('#statistic span.badge')//.childNodes[1].childNodes[1].childNodes[3].childNodes[1]

  document.querySelectorAll('[role="tabpanel"] > ul').forEach( (ul, i) => {
      statisticBages[i].innerHTML = ul.childNodes.length
  })
}

const refreshListOfLinks = function ()  { 
  
  let links = document.querySelectorAll('[role="tabpanel"] a') 

  links.forEach(key => {
      key.addEventListener('click', linkHandler)
  }); 

}
