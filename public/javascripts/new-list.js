
document.addEventListener("DOMContentLoaded", (e) => {
    const listBtn = document.querySelector(".list-btn")

    listBtn.addEventListener("click", (e) => {
        console.log("helloooooooooooooo")
        const form = document.getElementById("list-form-container")
        if (form.classList.contains("hidden")) {
            form.classList.remove("hidden")
        } else {
            form.classList.add("hidden")
        }
    })
})
