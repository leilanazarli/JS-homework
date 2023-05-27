let cards=document.querySelector(".cards")
let burger=document.querySelector(".burger")
let ul=document.querySelector(".other")

burger.addEventListener("click" , function(){
    ul.classList.toggle("show")
    burger.classList.contains("fa-bars")
    ?(this.classList="fa-solid fa-xmark")
    :(this.classList="fa-solid fa-bars")
})


let BASE_URL='http://localhost:8888/fav'
let fav=[]
let allData=[]

async function favData(){
    cards.innerHTML=""
    let res=await axios(BASE_URL)
    let data=res.data
    allData=data
    fav=data
    fav.forEach(element => {
       cards.innerHTML+=`
       <div class="card" style="width:25rem; ">
       <a href="#" class="btn btn-light" style="width:40px" onclick="addFav(${element.id})"><i class="fa-solid fa-heart text-danger"></i></a>
       
       <div class="d-flex justify-content-center">
       <img src="./assets/img/${element.photo}" class="card-img-top" style="width:50px; height:50px;" alt="...">
       </div>
       <div class="card-body">
                     <h5 class="card-title">${element.title}</h5>
                     <p class="card-text">${element.text}</p>
                      <p class="card-text">${element.price}</p>
                     <div class="d-flex justify-content-center">
                     <a href="#" class="btn btn-danger" onclick="deleteBtn(${element.id})">Delete</a>
                     </div>
                     </div>
                 </div> 
       ` 
    });
}
favData()

async function deleteBtn(id){
    await axios.delete(`${BASE_URL}/${id}`)
    fav=allData.filter(item=>item.id!=id)
    favData()
}
