let closebtn = document.querySelector(".closebtn")
let openbtn = document.querySelector(".hamburger")
let navbar_mobile = document.querySelector(".navbar-mobile")
let container = document.querySelector("#contain")
let aHref = document.querySelector("a")




navbar_mobile.style.display="none"
closebtn.addEventListener("click" , function(){
    navbar_mobile.style.display="none"
   container.style.display="hidden"
})

openbtn.addEventListener("click" , function(){
   navbar_mobile.style.display="flex"

})
