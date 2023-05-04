let username = document.querySelector("#username")
let email = document.querySelector("#email")
let password = document.querySelector("#password")
let check = document.querySelector("#check")
let submit = document.querySelector("#submit")

 let UsersData=JSON.parse(localStorage.getItem("users"))||[]

submit.disabled=true

username.addEventListener,email.addEventListener,password.addEventListener,check.addEventListener("input" , ()=>{
    allInput()
})

function allInput(){
    if(username.value && email.value && password.value && check.checked){
            submit.disabled=false
    }
    else{
            submit.disabled=true
    }
}


submit.addEventListener("click", function(){
   let data={
    id: Date.now(),
    username: username.value,
    email: email.value,
    password: password.value,
    check: check.checked,
   }
   UsersData.push(data)
  localStorage.setItem("users" , JSON.stringify(UsersData))
})
