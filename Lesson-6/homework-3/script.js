let input = document.querySelector("input");
let res = document.querySelector("span:last-of-type");
let value = document.querySelector("span:first-of-type");
let btn = document.getElementById("btn");

input.addEventListener("keyup", () => {
    input.value = input.value.replace(" ", ":")
})

btn.addEventListener("click", () => {
    let arr = input.value.split(":");
    value.innerHTML = input.value
    res.innerHTML = arr.reduce((a, b) =>  +a + +b , 0) / arr.length;
    input.value = ""
})
