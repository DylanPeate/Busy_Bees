// window.addEventListener("load", (event)=>{
// })
document.addEventListener('DOMContentLoaded', async () => { 
    const newTaskBtn = document.getElementById('new-task-btn');
    
    // newTaskBtn.addEventListener('click', () => {
    //     console.log('CLICKED')
    // })


    const res = await fetch('http://localhost:8080/api/tasks')
    const data = await res.json();
    console.log(data)
})