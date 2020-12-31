let myPromise = new Promise((resolve,reject)=>{

    setTimeout( ()=>{

        var mycar = {name:"Mercedes", year:2005}
        resolve(mycar)

    },5000)
    

})

myPromise.then( (data)=>{

    console.log(data)
})


console.log("I cannot wait for promise")


