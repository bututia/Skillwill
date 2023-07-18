let openBtn = document.getElementById("open-btn")
let modal = document.querySelector("dialog")
let closeBtn = document.getElementById("close-btn")

openBtn.addEventListener("click", () => {
    modal.showModal()
    modal.style.display = "flex"
})

closeBtn.addEventListener("click", () => {
    modal.close()
    modal.style.display = "none"
})