let change = document.getElementById("change");
let input = document.querySelector("input");

change.addEventListener("click", () => {
    switch(input.value.toLocaleLowerCase()) {
        case "black" : 
         document.body.style.backgroundColor = "black";
         break;
         case "red" : 
         document.body.style.backgroundColor = "red";
         break;
         case "blue" : 
         document.body.style.backgroundColor = "blue";
         break;
         case "green" : 
         document.body.style.backgroundColor = "green";
         break;
         case "white" : 
         document.body.style.backgroundColor = "white";
         break;
         default: 
         alert("Available Colors : red, blue, green, black, white")
    }
})