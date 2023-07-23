function expo(num, x, cb) {
    let res = 1;
       for(let i = 0; i < x; i++){
        res = cb(num, res)
       }
       return res
}

console.log(expo(2, 5, (num, res) => {
    return res = res * num
}));