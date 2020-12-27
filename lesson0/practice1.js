console.log("First")
console.log("second")
console.log("third")
console.log("fourth")
setTimeout(()=>{

    console.log("I am async");
},4000)
console.log("First")
console.log("second")
console.log("third")
console.log("fourth")


var myCar = { name: 'Nissan xr', year:1988}


let name = myCar[(()=>{ return 'Nissan xr'})()] === 'Nissan xr' ? "not my car": "my Car"

console.log((()=>{ return 'Nissan xr'})())


