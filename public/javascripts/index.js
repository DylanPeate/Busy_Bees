document.addEventListener('DOMContentLoaded', async () => {
    // obtain the elements needed to interact
    // Anthony - Brian
    const submitButton = document.createElement('input');
    submitButton.setAttribute('type', 'submit');
    submitButton.setAttribute('id', 'edit-task-submit');
    // Edit task form creation function

    const listSummary = document.getElementById('list-summary');

    const createForm = (csrfToken, lists, editNameVal, taskId) => {
        const editTaskForm = document.createElement('form');
        editTaskForm.setAttribute('data-taskId', taskId)
        editTaskForm.setAttribute('id', 'edit-task-form');

        // hidden csrf input element
        const csrfInput = document.createElement('input');
        csrfInput.setAttribute('id', 'token');
        csrfInput.setAttribute('type', 'hidden');
        csrfInput.setAttribute('name', '_csrf');
        csrfInput.setAttribute('value', csrfToken); // <--- csrfToken pass in

        // edit name text box
        const editName = document.createElement('input');
        editName.setAttribute('type', 'text'); // [edit name] text box
        editName.setAttribute('name', 'edit-name-box');
        editName.setAttribute('id', 'edit-name');
        editName.value = editNameVal;

        // change date input element
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


        // New List Select Dropdown
        const newListDiv = document.createElement('div');
        newListDiv.setAttribute('id', 'list-div'); // Choose new list
        const newListLabel = document.createElement('for', 'select-list')
        newListLabel.setAttribute('id', 'list-label')
        newListLabel.innerText = 'List'
        const newListInput = document.createElement('select');
        newListInput.setAttribute('name', 'select-list')
        newListInput.setAttribute('id', 'task-form-select')

        newListDiv.appendChild(newListLabel);
        newListDiv.appendChild(newListInput);

        // new List Select Dropdown
        // loop over current lists in db
        for (let i = 0; i < lists.length; i++) {
            const option = document.createElement('option');
            option.innerText = lists[i].name; //
            option.setAttribute('value', lists[i].name)
            newListInput.appendChild(option);
        }

        // [edit task] form submit button


        editTaskForm.appendChild(editName);
        editTaskForm.appendChild(csrfInput);
        editTaskForm.appendChild(dateDiv);
        editTaskForm.appendChild(newListDiv);
        editTaskForm.appendChild(submitButton);
        return editTaskForm;
    }

    // get elements on page for new task creation
    const newTaskBtn = document.getElementById('new-task-btn');
    const taskContainer = document.querySelector('.tasks-container');
    const taskName = document.getElementById('new-task-input');


    // POST request -> create new task on click of 'new task' button
    // (front-end api)
    newTaskBtn.addEventListener('click', async (e) => {
        e.preventDefault();

        const taskElement = document.createElement('p');
        taskElement.innerText = taskName.value;
        taskElement.className = 'task-single'
        taskContainer.appendChild(taskElement);


        const name = taskName.value;
        const body = { name };

        try {
            // FETCH -> post request
            const res = await fetch('http://localhost:8080/api/tasks',
                {
                    method: "POST",
                    body: JSON.stringify(body),
                    headers: {
                        "Content-Type": "application/json"
                    },
                }).then(response => response.json())


            taskElement.setAttribute('id', res.task)

        } catch (e) {
            console.log(e)
        }
    })

    // GET request -> gets info for popup form creation
    // when user clicks on task
    taskContainer.addEventListener('click', async (e) => {
        const taskEle = e.target;
        if (taskEle.className === 'task-single') {
            const task = taskEle.id;

            console.log(task); // STEP ONE
            if (document.getElementById('edit-task') !== null) {
                console.log('HELLO');
            }

            //Create the div form
            const editTaskDivHeader = document.createElement('div');
            editTaskDivHeader.setAttribute('id', 'edit-task-header')
            editTaskDivHeader.innerText = 'Edit Task'
            const editTaskDiv = document.createElement('div');
            editTaskDiv.setAttribute('id', 'edit-task');

            // FETCH - get request
            const fetchInfo = await fetch('http://localhost:8080/api/tasks/taskid')

            // get data from fetch request
            const data = await fetchInfo.json();
            const csrfToken = data.csrfToken;
            const lists = data.lists;

            // create form function with fetched info
            const createdForm = createForm(csrfToken, lists, taskEle.innerText, taskEle.getAttribute('id'))


            // append the popup form to the list summary

            editTaskDiv.appendChild(editTaskDivHeader)
            editTaskDiv.appendChild(createdForm);
            listSummary.appendChild(editTaskDiv);
            editTaskDiv.style.transition = 'transform 1s linear forward'

            // Remove form on detection of click outside of form
            document.addEventListener("click", function (event) {
                var obj = editTaskDiv;
                if (!obj.contains(event.target)) {
                    for (let i = 100; i > 0; i--) {
                        return obj.remove();
                    }
                }
            });

            // PUT Request (edit task)
            const submitBtn = document.getElementById('edit-task-submit')
            submitBtn.addEventListener('click', async (e) => {
                e.preventDefault();
                const formData = document.getElementById('edit-task-form')
                const date_due = document.getElementById('task-form-date').value;
                const list_id = document.getElementById('task-form-select').value;
                const name = document.getElementById('edit-name').value;

                // const csrfTkn = document.getElementById('token').value;
                const id = formData.getAttribute('data-taskId')

                const body = {
                    date_due,
                    list_id,
                    name,
                    id,
                };

                try {
                    // FETCH -> put request
                    const editTask = await fetch('http://localhost:8080/api/tasks/edit-task',
                        {
                            method: "PUT",
                            body: JSON.stringify(body),
                            headers: {
                                "Content-Type": "application/json"
                            }
                        }).then(res => res.json())

                } catch (e) {
                    console.log(e);
                }
            })
        }
    })
    // Anthony - Brian




    const name = taskName.value;
    const body = { name };
    try {
        // fetch request to our api
        const res = await fetch('http://localhost:8080/api/tasks', {
            method: "POST",
            body: JSON.stringify(body),
            headers: {
                "Content-Type": "application/json"
            },
        });
        taskName.value = ''
        if (!res.ok) {
            throw res;
        }
    } catch (e) {
        // TODO - throw a custom error
        console.log(e)
    }
})
