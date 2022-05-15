document.addEventListener('DOMContentLoaded', async () => {

    const searchbar = document.getElementById('top-nav-search')
    searchbar.addEventListener('keyup', (e) => {
        const input = searchbar.value.toLowerCase();
        const tasks = document.getElementsByClassName('task-single');
        const boxes = document.querySelectorAll('.c-checkbox')


        for (let i = 0; i < tasks.length; i++) {
            if (!tasks[i].innerHTML.toLowerCase().includes(input)) {
                tasks[i].style.display = "none"
                boxes[i].style.display = "none"
            }
            if (tasks[i].innerHTML.toLowerCase().includes(input)) {
                tasks[i].style.display = "flex"
                boxes[i].style.display = "flex"
            }
        }

    })


})
