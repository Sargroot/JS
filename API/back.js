const btn = document.getElementById("bring");
const output = document.getElementById("demo");

btn.addEventListener("click",dataout);

function dataout(){
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res =>{
        if(!res.ok){
            throw new Error;
        }
        return res.json();
    })
    .then(data => {

        const a = document.createElement("p");
        a.textContent = data[0].name;
        output.appendChild(a);

        
        const b = document.createElement("p");
        b.textContent = data[0].address.city;
        output.appendChild(b);
    
    })
    .catch(error => {
        console.log("Error:", error);
    });
}

