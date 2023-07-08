let person = {
        name: "Rodrigo ჭuჭu",
        age: "22",
        visited: [
            {country: "georgia", city: "tbilisi"},
            {country: "korea", city: "seoul"},
            {country: "japan", city: "tokyo"}
        ],
        family: [
           {
            name: "rodrigo pirveli ჭuჭu",
            age: "45",
            gender: "male"
           },
           {
            name: "lia vigacishvili",
            age: "36",
            gender: "female"
           },
           {
            name: "rodrigo ჭuჭua junior",
            age: "20",
            gender: "male"
           },
           {
            name: "madagaskari ჭuჭu",
            age: "16",
            gender: "gei"
           },
        ]
}

function newObj(person){
    return {
        name: person.name,
        age: person.age,
        visited: [...person.visited],
        family: [
           ...person.family
        ]
    }
}

console.log(newObj(person));