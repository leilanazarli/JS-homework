let closebtn = document.querySelector(".closebtn")
let openbtn = document.querySelector(".hamburger")
let navbar_mobile = document.querySelector(".navbar-mobile")

window.addEventListener("load" , function(){
   this.alert(`Welcome , Dear ${localStorage.getItem("userName")}`)
})


navbar_mobile.style.display="none"
closebtn.addEventListener("click" , function(){
    navbar_mobile.style.display="none"
   container.style.display="hidden"
})

openbtn.addEventListener("click" , function(){
   navbar_mobile.style.display="flex"
   container.style.display="none"

})
