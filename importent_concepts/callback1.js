let arr1 = [1,2,3,4,5,-1,-2,-3,-4];

// let pos = remove(arr1,(x)=>x>=0);
// function remove(num,callback){
//     let arr2 =[];
//     for(let i of num){
//         if(callback(i)){
//             arr2.push(i);
//         }
//     }
//     return arr2;
// }

// console.log(pos);


let pos = remove(arr1,positive);

function positive(a){
    let arr2 = [];
    for(let x of a){
    if(x>=0){
        arr2.push(x);
    }
}
return arr2;
    
}  

function remove(num,callback){
 return callback(num);   
}

 

console.log(pos);