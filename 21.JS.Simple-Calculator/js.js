let result=document.querySelector(".result")
let value1=document.querySelector(".value1")
let value2=document.querySelector(".value2")
let addition=document.querySelector(".addition")
let substract=document.querySelector(".substract")
let multiply=document.querySelector(".multiply")
let division=document.querySelector(".division")
let reset=document.querySelector(".reset")


addition.addEventListener("click" , function(){
  let sum = +value1.value+ +value2.value
    result.value =sum
})
substract.addEventListener("click" , function(){
   let substract =+value1.value- +value2.value
   result.value=substract
})
multiply.addEventListener("click" , function(){
    let multip =+value1.value* +value2.value
   result.value=multip
})
division.addEventListener("click" , function(){
    let divis =+value1.value/ +value2.value
    result.value=divis
})

reset.addEventListener("click",function(){
    value1.value=0
    value2.value=0
    result.value=0
})
