let title=document.querySelector("#title")
let text=document.querySelector("#text")
let price=document.querySelector("#price")
let photo=document.querySelector("#photo")
let submitBtn=document.querySelector(".submitBtn")
let add=document.querySelector(".add")
let form=document.querySelector("form")
let burger=document.querySelector(".burger")
let ul=document.querySelector(".other")

burger.addEventListener("click" , function(){
    ul.classList.toggle("show")
    burger.classList.contains("fa-bars")
    ?(this.classList="fa-solid fa-xmark")
    :(this.classList="fa-solid fa-bars")
})

let id=new URLSearchParams(window.location.search).get("id")
let BASE_URL="http://localhost:8888/users"

async function createUser(){
    let obj={
        title:title.value,
        text:text.value,
        price:price.value,
        photo:`${photo.value.split("\\")[2]}`
    }

    await axios.post(`${BASE_URL}`,obj)
    window.location="index.html"
}
async function editUser(){
    let obj={
        title:title.value,
        text:text.value,
        price:price.value,
        photo:`${photo.value.split("\\")[2]}`
    }
    await axios.patch(`${BASE_URL}/${id}`,obj)
    window.location="index.html"
}


if(id){
    async function forEdit(){
     await axios(`${BASE_URL}/${id}`).then(res=>{
        title.value=res.data.title
        text.value=res.data.text
        price.value=res.data.price
     })

    }
    forEdit()
    submitBtn.innerHTML="Edit"
    add.innerHTML="Edit User"
}
form.addEventListener("submit", async function(event){
    event.preventDefault()
    if(id){
        editUser()
    }
    else{
        createUser()
    }
})