let points = document.querySelector("span")
let div = document.querySelectorAll(".container > div")
let p = 0;

div.forEach(d => {
    let ol = d.querySelectorAll("ol");
    ol.forEach((a) => {
        let arr = a.querySelectorAll("li");
        arr.forEach(i => {
            i.addEventListener("click", (e) => {
            if(e.target.getAttribute("class") !== null){
                p++
                points.innerText = `${p}/20`
                d.style.backgroundColor = "#09a70970";
                i.style.backgroundColor = "#ffffff66"
            }else{
                d.style.backgroundColor = "#a7090970";
                i.style.backgroundColor = "red"
            }
               
                d.style.pointerEvents = "none"
                d.style.opacity = "0.8"
                
            })
        })
    })
})
