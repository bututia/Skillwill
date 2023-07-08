let user = {
    banks: [
        {
            name: "shtota g",
             address: {
                street: "gdzeta adin",
                city: "gdzeta dva"
             }

        },

        {
            name: "shtota d",
            address: {
                street: "gdzeta adin nol",
                city: "gdzeta dva nol"
             }
        },
        {
            name: "shtota f",
            address: {
                street: "gdzeta adin nol nol",
             }
        }
    ]
}


function returnCity({banks: [ , , {address: {city}}]}) {
    return city
}


console.log(returnCity(user));
