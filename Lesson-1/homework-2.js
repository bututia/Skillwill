function toCelsius(f) {
    if(typeof f === "number"){
        return 5/9 * (f - 32);
    }else{
        return false;
    }
}

console.log(toCelsius(185));
console.log(toCelsius("pepa pig"));