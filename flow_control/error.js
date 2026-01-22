try{
    x=y;
}catch(err){
    let text = err.name +" and "+err.message;
    console.log(err);
}


try{
    let a = b;
    b=10;
}catch(err){
    let ename = err.name;
    let emsg = err.message;
    console.log(ename);
    console.log(emsg);
}




let eligibility = (age) =>{
    try{
        if(age<=0){
            throw new Error("Can't be negative");
        }
        console.log("Login success");
    }
    catch(error){
        console.log(error);
    }
    finally{
        console.log("Runs every time");
    }
}

eligibility(-5);