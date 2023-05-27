let cards=document.querySelector(".cards")
let burger=document.querySelector(".burger")
let ul=document.querySelector(".other")

burger.addEventListener("click" , function(){
    ul.classList.toggle("show")
    burger.classList.contains("fa-bars")
    ?(this.classList="fa-solid fa-xmark")
    :(this.classList="fa-solid fa-bars")
})

let id=new URLSearchParams(window.location.search).get("id")
let BASE_URL=("http://localhost:8888/users")


let fav=[]
async function getDetails(){
//    cards.innerHTML=""
   let res=await axios(`${BASE_URL}/${id}`)
   let data=res.data
    cards.innerHTML=`
    <img src="./assets/img/${data.photo}" class="card-img-top w-90" alt="...">
    <div class="card w-100" >
                    <div class="card-body">
                      <h5 class="card-title">${data.title}</h5>
                      <p class="card-text">${data.text}</p>
                      <p class="card-text">${data.price}</p>
                      </div>
                    </div> 
    `
}
getDetails()