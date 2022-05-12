document.addEventListener('DOMContentLoaded', async () => {
    // obtain the elements needed to interact

    const createForm = (csrfToken, lists, editNameVal, taskId) => {
        console.log(lists)

        const editTaskForm = document.createElement('form');
        editTaskForm.setAttribute('dataset-taskid', taskId)
        editTaskForm.setAttribute('id', 'edit-task-form');


        const csrfInput = document.createElement('input');
        csrfInput.setAttribute('type', 'hidden');
        csrfInput.setAttribute('name', '_csrf');
        csrfInput.setAttribute('value', csrfToken); // <--- csrfToken pass in 

        const editName = document.createElement('input');
        editName.setAttribute('type', 'text');
        editName.setAttribute('name', 'edit-name-box');
        editName.setAttribute('id', 'edit-name');
        editName.value = editNameVal;

        // DATE 
        const dateDiv = document.createElement('div');
        dateDiv.setAttribute('id', 'date-div');
        const dateLabel = document.createElement('label');
        dateLabel.setAttribute('id', 'date-label');
        dateLabel.setAttribute('for', 'date');
        dateLabel.innerText = 'Due';

        const dateInput = document.createElement('input');
        dateInput.setAttribute('type', 'date');
        dateInput.setAttribute('name', 'date');
        dateInput.setAttribute('id', 'task-form-date');

        dateDiv.append(dateLabel);
        dateDiv.append(dateInput);
        // DATE 

        // New List Select Dropdown 
        const newListDiv = document.createElement('div');
        newListDiv.setAttribute('id', 'list-div');
        const newListLabel = document.createElement('for', 'select-list')
        newListLabel.setAttribute('id', 'list-label')
        newListLabel.innerText = 'List'
        const newListInput = document.createElement('select');
        newListInput.setAttribute('name', 'select-list')
        newListInput.setAttribute('id', 'task-form-select')

        newListDiv.appendChild(newListLabel);
        newListDiv.appendChild(newListInput);
        // new List Select Dropdown 

        for (let i = 0; i < lists.length; i++) {
            console.log(lists[i].name)
            const option = document.createElement('option');
            option.innerText = lists[i].name;
            option.setAttribute('value', lists[i].name)
            newListInput.appendChild(option);
        }

        const submitButton = document.createElement('input');
        submitButton.setAttribute('type', 'submit');
        submitButton.setAttribute('id', 'edit-task-submit');

        editTaskForm.appendChild(editName);
        editTaskForm.appendChild(csrfInput);
        editTaskForm.appendChild(dateDiv);
        editTaskForm.appendChild(newListDiv);
        editTaskForm.appendChild(submitButton);

        return editTaskForm;
    }

    const newTaskBtn = document.getElementById('new-task-btn');
    const taskContainer = document.querySelector('.tasks-container');
    const taskName = document.getElementById('new-task-input');
    const eachTask = document.querySelectorAll('.task-single')
    const listSummary = document.getElementById('list-summary');
    

    // On click of new task button, create new task
    // without redirecting 
    newTaskBtn.addEventListener('click', async(e) => {
        e.preventDefault();
    const taskElement = document.createElement('p');
    taskElement.innerText = taskName.value;
    taskElement.className = 'task-single'
    taskContainer.appendChild(taskElement);

    
    const name = taskName.value;
    const body = {name};
    try {
        // fetch request to our api
    const res = await fetch('http://localhost:8080/api/tasks',{
        method: "POST",
        body: JSON.stringify(body),
        headers: {
            "Content-Type": "application/json"
        },
    }).then(response => response.json())
    taskElement.setAttribute('id', res.task)

    // Possible: You may need to add a check for res.ok status
    } catch (e) {
       // TODO - throw a custom error 
       console.log(e)
    }
        })  




        let editTaskClicked = false;
        // On click of task, open edit task menu 
    taskContainer.addEventListener('click', async(e) => {
        const taskEle = e.target;
        if (taskEle.className === 'task-single') {
            editTaskClicked = true;
            const taskName = taskEle.innerText;
            const taskId =  Number(taskEle.getAttribute('id'));
            


            //Create the div form 
            const editTaskDivHeader = document.createElement('div');
            editTaskDivHeader.setAttribute('id', 'edit-task-header')
            editTaskDivHeader.innerText = 'Edit Task'
            const editTaskDiv = document.createElement('div');
            editTaskDiv.setAttribute('id', 'edit-task');

            // make fetch request to add the csrfToken
            const fetchInfo = await fetch('http://localhost:8080/api/tasks/taskid')
            const data = await fetchInfo.json();
            
            const csrfToken = data.csrfToken
            const lists = data.lists;

            const createdForm = createForm(csrfToken, lists, taskEle.innerText, taskEle.getAttribute('id'))

        
            
            editTaskDiv.appendChild(editTaskDivHeader)
            editTaskDiv.appendChild(createdForm);
            listSummary.appendChild(editTaskDiv);
        }
    })

    // edit-task-submit
    
    // task-form-date - DATE 
    // select-list - LIST 
    // edit-name-box - NAME 
    console.log(editTaskClicked)
    if (editTaskClicked === true) {
    const submitEditTask = document.getElementById('id', 'edit-task-submit');
    console.log(submitEditTask);
    submitEditTask.addEventListener('click', async(e) => {
        e.preventDefault();
        e.stopPropagation();
        const newDate = document.getElementById('task-form-date');
        const newList = document.getElementById('select-list');
        const newName = document.getElementById('edit-name-box');
        const formData = document.getElementById('edit-task-form');
        const taskId = formData.dataset.taskId;
        console.log(taskId);
        const body = {
            date: newDate.value,
            list: newList.value,
            name: newName.value,
            taskId: taskId
        }
        try {
            await fetch('http://localhost:8080/api/tasks/edit-task', {
            method: "PUT",
            body: JSON.stringify(body),
            header: {
                "Content-Type": "application/json"
            }})
        } catch (e) {
            console.log(e);
        }
            editTaskClicked = false; 
    })
}


});


