let users = [
    {name:"Lasha", age: 30}, 
    {name: "Saba", age: 20},
    {name: "Dito", age: 2},
    {name: "Anakin", age: 25},
    {name: "Padme", age: 27},
    {name: "Johan", age: 19}
]
    
function sortUsers(users){
    return users.sort((a, b) => a.age - b.age)
}

console.log(sortUsers(users));