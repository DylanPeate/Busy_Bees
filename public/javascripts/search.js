document.addEventListener('DOMContentLoaded', async () => {

    const searchbar = document.getElementById('top-nav-search')
    searchbar.addEventListener('keyup', (e) => {
        const input = searchbar.value.toLowerCase();
        const tasks = document.getElementsByClassName('task-single');


        for (let i = 0; i < tasks.length; i++) {
            if (!tasks[i].innerHTML.toLowerCase().includes(input)) {
                tasks[i].style.display = "none"
            }
            if (tasks[i].innerHTML.toLowerCase().includes(input)) {
                tasks[i].style.display = "flex";
            }
        }

    })


})
