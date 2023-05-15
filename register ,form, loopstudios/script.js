let text=document.querySelector("#text")
let email=document.querySelector("#email")
let password=document.querySelector("#password")
let repeatpassword=document.querySelector("#repeatpassword")
let checkbox=document.querySelector("#checkbox")
let form=document.querySelector("form")
let registerbutton=document.querySelector(".registerbutton")


let usersData=JSON.parse(localStorage.getItem("users")) || []

form.addEventListener("submit" , function(e){
    e.preventDefault()
   if(text.value!="" && email.value!="" && password.value!="" && repeatpassword.value!="" && checkbox.value!=""){
    let data={
        id:Date.now(),
        name:text.value,
        email:email.value,
        password:password.value,
        repeatpassword:repeatpassword.value,
        checkbox:checkbox.checked,
    }
    usersData.push(data)
    localStorage.setItem("users",JSON.stringify(usersData))
    window.location.href="http://127.0.0.1:5501/signin.html"
   }
   else{
    alert("Empty value !!!")
   }
})