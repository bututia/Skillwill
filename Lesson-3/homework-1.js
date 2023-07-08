function calculate(a, b, ...args){
    return [a + b, args.reduce((a, b) => {return a * b}, 1)]
}

console.log(calculate(1, 2, 3, 4, 5, 6));