document.addEventListener("DOMContentLoaded", async (e) => {
    const listBtn = document.querySelector(".list-btn")
    const createListBtn = document.getElementById('create-list-btn')
    const stupidTextField = document.getElementById('listName')

    stupidTextField.addEventListener("keydown", (e) => {
        if (e.keyCode == 13) {
            e.stopPropagation()
            e.preventDefault()
        }

    })

    listBtn.addEventListener("click", (e) => {
        e.preventDefault()
        const form = document.getElementById("list-form-container")
        if (form.classList.contains("hidden")) {
            form.classList.remove("hidden")
        } else {
            form.classList.add("hidden")
        }
    })


    createListBtn.addEventListener("click", async (e) => {
        e.preventDefault()
        e.stopPropagation()
        const input = document.getElementById('listName')
        const form = document.getElementById("list-form-container")
        console.log(input.value, "<-------")
        const name = input.value
        const body = { name }


        if (name.length < 1) {
            //error
            form.classList.add("hidden")
        } else {
            try {
                const res = await fetch('http://localhost:8080/api/new-list', {
                    method: "POST",
                    body: JSON.stringify(body),
                    headers: {
                        "Content-Type": "application/json"
                    }
                }).then(res => {
                    return res.json()
                })
                form.classList.add("hidden")
                return window.location.href = `/home/list/${res.createdTask.id}`
            } catch (error) {
                console.log(error)
            }
        }


    })
})
