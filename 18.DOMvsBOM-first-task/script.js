let startbtn=document.querySelector(".start")
let stopbtn=document.querySelector(".stop")
let result=document.querySelector("#result")
let resetbtn=document.querySelector(".reset")
let incrementbtn=document.querySelector(".increment")
let decrementbtn=document.querySelector(".decrement")

let counter=0;
let interval;
startbtn.addEventListener("click" , function(){
   interval =setInterval(()=>{
    counter++;
    result.innerText=counter;
   },1000)
})
stopbtn.addEventListener("click",function(){
    clearInterval(interval)

})
resetbtn.addEventListener("click", function(){
    result.innerText=0
    counter=0
    clearInterval(interval)
})
incrementbtn.addEventListener("click",function(){
        result.innerText=counter++
})
decrementbtn.addEventListener("click",function(){
        result.innerText=--counter
})
var i=1;
function buttonClick(){
    document.getElementById("incrementvalueinput").value=++i*4;
}



