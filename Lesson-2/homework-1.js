let user = [
    {name: 'Temo', age: 25},
    {name: 'Lasha', age: 21}, 
    {name: 'Ana', age: 28}
]

function findYoungestUser(user){
    user.sort((a, b) => {
        return a.age - b.age
    })

    return user[0].name
}

console.log(findYoungestUser(user));