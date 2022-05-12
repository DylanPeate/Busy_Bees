
document.addEventListener("DOMContentLoaded", (e) => {
    const listBtn = document.querySelector(".list-btn")
    const deleteBtn = document.getElementById("delete-list-btn")
    const confirmNoBtn = document.getElementById("no-confirm-btn")
    const confirmationPopUp = document.getElementById("confirm-delete");

    listBtn.addEventListener("click", (e) => {
        const form = document.getElementById("list-form-container")
        if (form.classList.contains("hidden")) {
            form.classList.remove("hidden")
        } else {
            form.classList.add("hidden")
        }
    })

    deleteBtn.addEventListener("click", (e) => {
        if (confirmationPopUp.classList.contains("hidden")) {
            confirmationPopUp.classList.remove("hidden")
        } else {
            confirmationPopUp.classList.add("hidden")
        }

    })

    confirmNoBtn.addEventListener("click", (e) => {
        if (confirmationPopUp.classList.contains("hidden")) {
            confirmationPopUp.classList.remove("hidden")
        } else {
            confirmationPopUp.classList.add("hidden")
        }

    })

})
