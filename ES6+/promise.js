// let even  = new Promise(function(resolve,reject){
//     let num = 11;
//     if(num%2==0)resolve("even");
//     else reject("Odd")
// });

// even
//     .then((message) => console.log(message)) 
//     .catch((error) => console.log(error)); 

// Promise.allSettled([
//     Promise.resolve("Task 1 completed"),
//     Promise.reject("Task 2 failed"),
//     Promise.resolve("Task 3 completed")
// ])
//     .then((results) => console.log(results))


// Promise.all([
//     Promise.resolve("one"),
//     Promise.reject("two"),
//     Promise.resolve("three")
// ])

// .then((results)=>console.log(results))
// .catch((error)=>console.error(error));


const ride = new Promise((resolve,reject)=>{
    if(0){
        resolve("success");
    }
    else{
        reject("fail");
    }
})

ride
    .then(value=>{
        console.log(value);
    })
    .catch(error=>{
        console.log(error)
    });