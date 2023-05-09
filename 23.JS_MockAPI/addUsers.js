let form =document.querySelector(".form")
let submit =document.querySelector(".submit")
let username =document.querySelector("#text")
let email =document.querySelector("#mail")

// let  Main_Url = fetch("http://localhost:8000/users")


form.addEventListener("submit",function(event){
    event.preventDefault()
   function addUsers(obj){
    try{
        axios.post("http://localhost:8000/users",obj)
    }
    catch(err){
        console.log(err);
    }
   }
   addUsers({
    name:username.value,
    email:email.value
   })
})

submit.addEventListener("click",function () {
    window.location=("http://127.0.0.1:5500/index.html")
})
