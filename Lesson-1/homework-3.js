function calculate(a, b, operation){
    if(typeof a == "number" && typeof b == "number"){
        if (operation === '+'){ 
            return a + b;
        }else if(operation === '-'){
            return a - b
        }else if(operation === '*'){
            return a * b
        }else if(operation === '/'){
            return a / b
        }else{
            return false
        }
    }else{
        return false
    }
}

console.log(calculate(2, 3, "*"));
console.log(calculate(5, 3, "%"));
console.log(calculate("9", 3, "-"));