let addbtn =document.querySelector(".addbtn")
let cards=document.querySelector(".cards")

addbtn.addEventListener("click" ,function(){
    window.location=("http://127.0.0.1:5500/addUsers.html")
})


async function getData(){
    const res = await fetch("http://localhost:8000/users")
    const data = await res.json()
    console.log(data);
    data.forEach(element => {
        let card =document.createElement("div")
        card.innerHTML=`
        <div class="card-body  m-1 p-4 d-flex justify-content-between align-items-center  w-100 " style="border:1px solid grey " > 
   <div>  
   <h5>${element.name}</h5>
    <p >${element.email}</p>
   </div>
   <div>
 <i class="fa-solid fa-pen " style="color: rgb(20, 100, 40);" onclick=edit("${element.id}")></i>
   <i class="fa-solid fa-trash-can delete" style="color: red;" onclick=remove("${element.id}")></i>
   </div>   
   </div>
        `
        cards.append(card)
    });
}
getData()

async function remove(id){
  await  fetch(`http://localhost:8000/users/${id}`, {
    method: "DELETE"
  } )
}
async function edit(id){
    
    await  fetch(`http://localhost:8000/users/${id}`, {
        method: "PUT"
     })
        window.location='http://127.0.0.1:5500/edituser.html'
    } 



