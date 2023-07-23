let cont = document.querySelector(".container")

async function fetchData() {
    let res = await fetch("https://jsonplaceholder.typicode.com/posts")
    let dt = await res.json()
    dt.forEach(m => {
        let html = `
        <div class="box">
            <h1>${m.title}</h1>
            <p>${m.body}</p>
        </div>`

        cont.insertAdjacentHTML("beforeend", html)
    })
}


fetchData()