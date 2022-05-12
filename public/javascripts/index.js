document.addEventListener('DOMContentLoaded', async () => {
    // obtain the elements needed to interact
    const newTaskBtn = document.getElementById('new-task-btn');
    const taskContainer = document.querySelector('.tasks-container');
    const taskName = document.getElementById('new-task-input');


    // on click, grab info from text box and send post request
    // to our API
    newTaskBtn.addEventListener('click', async (e) => {
        e.preventDefault();

        const taskElement = document.createElement('p');
        taskElement.innerText = taskName.value;
        taskElement.className = 'task-single'
        taskContainer.appendChild(taskElement);


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

            if (!res.ok) {
                throw res;
            }
        } catch (e) {
            // TODO - throw a custom error
            console.log(e)
        }
    })
})
