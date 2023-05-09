let submit=document.querySelector(".submit")
let form=document.querySelector(".form")
let username =document.querySelector("#text")
let email =document.querySelector("#mail") 

    async function  editUser(obj){
            const res = await fetch(`http://localhost:8000/users`,obj)
            const data = await res.json()
            console.log(data);
            data.filter((element)=>{
                username.value=element.name,
                email.value=element.email
            })
}

editUser()
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