function makeToys(makeTime) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(Math.random() > 0.1){
            resolve("Toy was Undefected")
        }else{
            reject("Toy was Defected")
        }
        }, makeTime)
    })
}

function deliverToys(deliverTime, status) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(status === "Toy was Undefected"){
                if(Math.random() > 0.4){
                resolve("Delivery was Successful")
             }else{
                reject("Delivery was Unsuccesful")
             }
            }
             
        }, deliverTime)
      })
}

function sellToys(sellTime, status) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(status === "Delivery was Successful"){
            if(Math.random() > 0.1){
            resolve("Toy Has Been Sold")
        }else{
            reject("Toy Was Unsuccessful")
        }
        }
        }, sellTime)
    })
}

makeToys(3000)
        .then((status) => deliverToys(2000, status))
        .then((status) => sellToys(1000, status))
        .then((res) => console.log(res))
        .catch((err) => console.log(err))



async function toyShop() {
    try {
       let made = await makeToys(3000);
       let delivered = await deliverToys(2000, made);
       let sold = await sellToys(1000, delivered)
       console.log(sold);
    }catch(err) {
        console.log(err);
    }
}

toyShop()