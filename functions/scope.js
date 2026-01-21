var car = 'audi' ;/*global var*/

let a = (s) => {

    let model="petrol engine";/*local var*/
    return car+" "+s+" with "+model;
}
console.log(a("Has V8"));

console.log(car);
try{
console.log(model);
}
catch(err){
    console.log(err.name+" "+err.message);
}

let val1 = "hello";
{
    let val2="Welcome"/*block var*/
    console.log(val2);
}
console.log(val1);
try{
console.log(val2);
}
catch(err){
    console.log(err.name+" "+err.message);
}
