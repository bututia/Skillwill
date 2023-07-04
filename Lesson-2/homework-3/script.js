let player1 = document.querySelector("#player1 > button");
let number1 = document.querySelector("#player1 span");
let dice1 = document.querySelector("#player1 div");
let tries1 = document.querySelector("#player1 + p span")
let player2 = document.querySelector("#player2 > button");
let number2 = document.querySelector("#player2 span");
let dice2 = document.querySelector("#player2 div");
let tries2 = document.querySelector("#player2 + p span");
let dialog = document.querySelector("dialog");
let retry = document.querySelector("dialog button");
let winner = document.querySelector("dialog h3")
let count1 = 0;
let count2 = 0;


player1.addEventListener("click", () => {
    number1.innerHTML = " "
    dice1.classList.add("rolling");
    count1++  
    tries1.innerHTML = count1 
    setTimeout(() => {
        let num = Math.floor(Math.random() * 6) + 1;
        number1.innerHTML = num
        dice1.classList.remove("rolling");
        if(num == 3){
            document.getElementById("player1").classList.add("play")
            document.getElementById("player2").classList.remove("play")
        }
    }, 500)
})

player2.addEventListener("click", () => {
    number2.innerHTML = " "
    dice2.classList.add("rolling");
    count2++ 
    tries2.innerHTML = count2
    setTimeout(() => {
        let num = Math.floor(Math.random() * 6) + 1;
        number2.innerHTML = num
        dice2.classList.remove("rolling");
        if(num == 3){  
            document.getElementById("player2").classList.add("play");
            finish()
        }
    }, 500)
})

retry.addEventListener("click", () => {
    dialog.close();
    dialog.style.display = "none";
    location.reload()
})


function finish() {
    if(count1 < count2){
        dialog.style.display = "flex"
        winner.innerHTML = "player 1 won !"
        dialog.showModal()
    }else if(count1 == count2){
        dialog.style.display = "flex"
        winner.innerHTML = "tie !"
        dialog.showModal()
    }else{
        dialog.style.display = "flex"
        winner.innerHTML = "player 2 won !"
        dialog.showModal()
    }
}

