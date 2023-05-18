let firstname=document.querySelector("#firstname")
let lastname=document.querySelector("#lastname")
let email=document.querySelector("#email")
let photoinput=document.querySelector("#photo")
let form=document.querySelector("form")
const BASE_URL = "http://localhost:2080/users";
 
let id= new URLSearchParams(window.location.search).get("id")

let status=false
// let editid=id
 axios(`${BASE_URL}/${id}`).then((res)=>{
       status=true
         firstname.value=res.data.name 
         lastname.value=res.data.username
         email.value=res.data.email
        //  photoinput.value=res.data.photo   
    })
    

form.addEventListener("submit" , function(event){
    event.preventDefault()
    const date=new Date()
    let user={
        name:firstname.value,
        username:lastname.value,
        email:email.value,
        photo:`./img/${photo.value.split("\\")[2]}`,
        date: date.toLocaleString()
    }
    if(status){
        axios.patch(`${BASE_URL}/${id}`,user)
    }else{
        axios.post(BASE_URL,user)
    }
    window.location.href="main.html"
})