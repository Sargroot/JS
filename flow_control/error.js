try{
    x=y;
}catch(err){
    let text = err.name +" and "+err.message;
    console.log(text);
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

