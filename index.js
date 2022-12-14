const tasks = [
    {
        id: '1138465078061',
        completed: false,
        text: 'Посмотреть новый урок по JavaScript',
    },
    {
        id: '1138465078062',
        completed: false,
        text: 'Выполнить тест после урока',
    },
    {
        id: '1138465078063',
        completed: false,
        text: 'Выполнить ДЗ после урока',
    },
];



let taskList = document.querySelector('.tasks-list')
function createTask (arrId, arrText) {
    let taskItem = document.createElement('div')
    taskList.append(taskItem)
    taskItem.className = 'task-item'
    taskItem.setAttribute('data-task-id', arrId)
    let taskItemMainContainer = document.createElement('div')
    taskItemMainContainer.className = 'task-item__main-container'
    taskItem.prepend(taskItemMainContainer)
    let taskItemMainContent = document.createElement('div')
    taskItemMainContent.className = "task-item__main-content"
    taskItemMainContainer.prepend(taskItemMainContent)
    let checkBoxForm = document.createElement('form')
    checkBoxForm.className = 'checkbox-form'
    taskItemMainContent.prepend(checkBoxForm)
    let inputCheckBox = document.createElement('input')
    inputCheckBox.className = "checkbox-form__checkbox"
    inputCheckBox.type = "checkbox"
    inputCheckBox.id = arrId
    checkBoxForm.prepend(inputCheckBox)
    let label = document.createElement('label')
    label.htmlFor = arrId
    checkBoxForm.append(label)
    let taskText = document.createElement('span')
    taskText.className = "task-item__text"
    taskText.innerText = arrText
    taskItemMainContent.append(taskText)
    let button = document.createElement('button')
    button.className = "task-item__delete-button"
    button.classList.add('default-button')
    button.classList.add('delete-button')
    button.dataset.deleteTaskId = '5'
    button.innerText = 'Удалить'
    taskItemMainContainer.append(button)

}

tasks.forEach(task => {
    const taskItem = createTask(task.id, task.text)

})
console.log(taskList)

const createTaskBlock = document.querySelector('.create-task-block')
createTaskBlock.addEventListener('submit', (event) => {
    event.preventDefault()
    const {target} = event
    const createTaskBlockInput = target.taskName
    const inputValue = createTaskBlockInput.value
    tasks.push({id: String(Date.now()), completed: false, text: inputValue})
    createTask(Date.now(), inputValue)

})
console.log(tasks)

