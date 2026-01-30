function walk(){
    return new Promise((resolve,reject)=>{
        let a = false;
        if(a){
            resolve("u have moved");
        }
        else{
            resolve("u have not moved");
        }
    });
}

function sleep(){
    return new Promise((resolve,reject)=>{
        let a = true;
        if(a){
            resolve("u have slept");
        }
        else{
            resolve("u have not slept");
        }
    });
}


async function work(){
    let wk = await walk();
    console.log(wk);

    let sl = await sleep();
        console.log(sl);
    
}

work();