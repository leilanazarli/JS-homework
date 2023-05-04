let adduser = document.querySelector(".adduser")
let boxes = document.querySelector(".boxes")


let UsersData=JSON.parse(localStorage.getItem("users"))||[]

adduser.addEventListener("click" , ()=>{
        window.location.href='http://127.0.0.1:5500/'
})

function CreateData(){
    boxes.innerHTML=""
    let box = document.createElement("div")
    UsersData.forEach(item => {
         box.innerHTML+=`
         <div class="card card-body col-3 " style="width: 18rem;">
         <h5 class="card-title">User</h5>
         <p class="card-text">UserName: ${item.username}</p>
         <p class="card-text">Email: ${item.email}</p>
         <button  class="btn btn-danger delete" onclick='deletee(${item.id})'>DELETE</button>
       </div>
     </div>
         `
         boxes.append(box)
         localStorage.setItem("users" , JSON.stringify(UsersData))
        });
    
}
CreateData()

function deletee(id){
    UsersData=UsersData.filter((elem)=>elem.id!=id)
    localStorage.setItem("users" , JSON.stringify(UsersData))
    CreateData()
}

