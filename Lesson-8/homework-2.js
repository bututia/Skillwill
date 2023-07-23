let person = {
    name: "Johan Liebert",
    age: "22",
    gender: "male",
    visited: [
        {country: "georgia", city: "tbilisi"},
        {country: "korea", city: "seoul"},
        {country: "japan", city: "tokyo"}
    ],
    family: [
       {
        name: "Johan first Liebert",
        age: "45",
        gender: "male"
       },
       {
        name: "Vera Cerna",
        age: "36",
        gender: "female"
       },
       {
        name: "Johan Liebert junior",
        age: "20",
        gender: "male"
       },
       {
        name: "Anna Liebert",
        age: "16",
        gender: "female"
       },
    ]
}


function newObj(person){
   return new Promise((resolve, reject) => {
    if(typeof person === "object"){
        resolve(
            {
             name: person.name,
             age: person.age,
             gender: person.gender,
             visited: [...person.visited],
             family: [
                ...person.family
                ]
            }
        )
    }else{
        reject("parameter is not an object")
    }
   })
}

newObj(person)
      .then(res => console.log(res))
      .catch(err => console.log(err))