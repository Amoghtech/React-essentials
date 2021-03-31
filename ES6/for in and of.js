// array is group of ibjects so we use For of
var array=[1,2,3]
for(let value of array){
    console.log(value);
}

// In case of objects we use For in
const object={
    apple:1,
    orange:2,
    mango:4
}
for(let key in object){
    console.log(key);
    console.log(object[key]);//Will print value of key
}