let result=document.querySelector(".result")
let value1=document.querySelector(".value1")
let value2=document.querySelector(".value2")
let addition=document.querySelector(".addition")
let substract=document.querySelector(".substract")
let multiply=document.querySelector(".multiply")
let division=document.querySelector(".division")
let reset=document.querySelector(".reset")


addition.addEventListener("click" , function(){
    if(value1.value=="" || value2.value==""){
        alert("empty!")
    }
    else {let sum = +value1.value+ +value2.value
    result.innerText =sum}
})
substract.addEventListener("click" , function(){
    if(value1.value=="" || value2.value==""){
        alert("empty!")
    }
    else {let substract =+value1.value- +value2.value
   result.innerText=substract}
})
multiply.addEventListener("click" , function(){
    if(value1.value=="" || value2.value==""){
        alert("empty!")
    }
    else {let multip =+value1.value* +value2.value
   result.innerText=multip}
})
division.addEventListener("click" , function(){
    if(value1.value=="" || value2.value==""){
        alert("empty!")
    }
    else {let divis =+value1.value/ +value2.value
    result.innerText=divis}
})

reset.addEventListener("click",function(){
    value1.value=""
    value2.value=""
    result.innerText=0
})
