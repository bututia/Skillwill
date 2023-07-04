function newObj(obj){
    let allUsers = {
            "person-1": obj.user1.name + " " + obj.user1.surname,
            "person-2": obj.user2.name + " " + obj.user2.surname,
            "person-3": obj.user3.name + " " + obj.user3.surname,
    }

    return allUsers
}


let user = {
    user1: {
        name: "Johan",
        surname: "Liebert"
    },

    user2: {
        name: "Nina",
        surname: "Fortner"
    },

    user3: {
        name: "Kenzo",
        surname: "Tenma"
    }
}

console.log(newObj(user));