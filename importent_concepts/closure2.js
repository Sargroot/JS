function sum(a){
    return function(b){
        return function(c){
            return function(d){
                return function(e){
                    return a+b+c+d+e;
                };
            };
        };
    };
}

console.log(sum(1)(1)(1)(1)(1));


function outer(){
    const val1 = "hello form outer";
    function inner(){
        console.log(val1);
    }
    inner();
}

outer();
