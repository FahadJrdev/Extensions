const name = document.querySelector("#name");
const greet = document.querySelector("#greet");

name.addEventListener("keyup",()=>{
    greet.innerHTML='Hello ' + name.value;
})