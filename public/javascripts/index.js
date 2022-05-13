document.addEventListener('DOMContentLoaded', async () => {
    // obtain the elements needed to interact
    // Anthony - Brian
    const submitButton = document.createElement('input');
    submitButton.setAttribute('type', 'submit');
    submitButton.setAttribute('id', 'edit-task-submit');
    submitButton.setAttribute('class', 'btn');
    // Edit task form creation function

    // Added by Danny
    const deleteTaskButton = document.createElement("p");
    deleteTaskButton.innerHTML = '<button class="btn" id="delete-task-button">Delete</button>'
    deleteTaskButton.setAttribute('type', 'submit')



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
        editName.setAttribute('placeholder', 'Edit task name here...');
        editName.value = editNameVal;

        // change date input element
        const dateDiv = document.createElement('div');
        dateDiv.setAttribute('id', 'date-div');
        const dateLabel = document.createElement('label');
        dateLabel.setAttribute('id', 'date-label');
        dateLabel.setAttribute('for', 'date');
        dateLabel.setAttribute('class', 'text')
        dateLabel.innerText = 'Due';

        const dateInput = document.createElement('input');
        dateInput.setAttribute('type', 'date');
        dateInput.setAttribute('name', 'date');
        dateInput.setAttribute('id', 'task-form-date');
        dateInput.setAttribute('class', 'text');

        dateDiv.append(dateLabel);
        dateDiv.append(dateInput);


        // New List Select Dropdown
        const newListDiv = document.createElement('div');
        newListDiv.setAttribute('id', 'list-div'); // Choose new list
        const newListLabel = document.createElement('for', 'select-list')
        newListLabel.setAttribute('id', 'list-label')
        newListLabel.setAttribute('class', 'text')
        newListLabel.innerText = 'List'
        const newListInput = document.createElement('select');
        newListInput.setAttribute('name', 'select-list')
        newListInput.setAttribute('id', 'task-form-select')

        const noneOption = document.createElement('option');
        noneOption.setAttribute('value', 'no changes')
        noneOption.innerText = 'No Changes';

        newListInput.appendChild(noneOption);
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
        editTaskForm.append(deleteTaskButton);
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
            const res = await fetch('/api/tasks',
                {
                    method: "POST",
                    body: JSON.stringify(body),
                    headers: {
                        "Content-Type": "application/json"
                    },
                }).then(response => response.json())


            taskElement.setAttribute('id', res.task)
            taskName.value = ''

            // IN PROGRESS CHECKBOX FUNCTIONALITY
            if (taskElement.nextSibling === null) {
                const checkboxForm = document.createElement('form');
                checkboxForm.setAttribute('id', 'completed-checkbox')

                const checkbox = document.createElement('input');
                checkbox.setAttribute('type', 'checkbox')
                checkbox.setAttribute('id', `c-${res.task}`)
                checkbox.setAttribute('class', 'c-checkbox')
                checkboxForm.appendChild(checkbox);

                taskContainer.appendChild(checkboxForm);
            }

        } catch (e) {
            console.log(e)
        }
    })

    // GET request -> gets info for popup form creation
    // when user clicks on task
    taskContainer.addEventListener('click', async (e) => {
        const taskEle = e.target;
        if (taskEle.className === 'task-single') {
            //Create the div form
            const editTaskDivHeader = document.createElement('div');
            editTaskDivHeader.setAttribute('id', 'edit-task-header')
            editTaskDivHeader.setAttribute('class', 'text')
            editTaskDivHeader.innerText = 'EDIT TASK'
            const editTaskDiv = document.createElement('div');
            editTaskDiv.setAttribute('id', 'edit-task');

            // FETCH - get request
            const fetchInfo = await fetch('/api/tasks/taskid')

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
                    const editTask = await fetch('/api/tasks/edit-task',
                        {
                            method: "PUT",
                            body: JSON.stringify(body),
                            headers: {
                                "Content-Type": "application/json"
                            }
                        }).then(res => res.json())
                    // if successful do here:
                    const resListId = editTask.list_id;
                    const resTaskId = editTask.id;
                    const resName = editTask.name;
                    if (resListId) {
                        window.location.href = `/home/list/${resListId}`
                    } else {
                        taskEle.innerText = resName
                    };


                } catch (e) {
                    console.log(e);
                }
            })
            deleteTaskButton.addEventListener('click', async (e) => {
                e.stopPropagation();
                e.preventDefault();

                // get data from fetch request
                const formData = document.getElementById('edit-task-form')
                const date_due = document.getElementById('task-form-date').value;
                const list_id = document.getElementById('task-form-select').value;
                const name = document.getElementById('edit-name').value;

                // const csrfTkn = document.getElementById('token').value;
                const id = formData.getAttribute('data-taskId')
                const taskEle = document.getElementById(id)
                const checkEle = document.getElementById(`c-${id}`)
                const body = {
                    id
                };
                try {
                    const deleteTask = await fetch('/api/tasks/delete-task',
                        {
                            method: "DELETE",
                            body: JSON.stringify(body),
                            headers: {
                                "Content-Type": "application/json"
                            }
                        }).then(res => res.json())
                    taskEle.remove()
                    checkEle.remove()

                } catch (error) {
                    console.log(error, "<-- ERROR");
                }


            })

        }

        if (e.target.className === 'c-checkbox') {

            const unparsedTask = e.target.id;
            const taskId = unparsedTask.split("c-").join("");

            const body = {
                taskId,
                completed: true,
            }
            await fetch('/api/tasks/completed', {
                method: "PUT",
                body: JSON.stringify(body),
                headers: {
                    "Content-Type": "application/json"
                }
            })



        }
    })

    // Anthony - Brian

    // What we have so far:
    // - We have the checkbox come up on creation of task with a task id
    // - We are able to redirect the user when editing a task + setting new list
    // - We keep the user on the same page + update the task name if new list is not selected


    // What we need done:
    // - If the user selects the 'completed' checkbox, we should be able to make a fetch to the database to update the tasks 'completed' state.

    // - If the user reloads the page, the task should still be checked

    // Pseudo code
    // - Figure out how to tell whether or not a check box has been selected

    // - Associate that selected checkbox with it's task id



})
