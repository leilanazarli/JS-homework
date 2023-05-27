let ascBtn=document.querySelector(".asc")
let search=document.querySelector("#search")
let cards=document.querySelector(".cards")
let loadmore=document.querySelector(".loadmore")
let heart=document.querySelector(".heart")
let burger=document.querySelector(".burger")
let ul=document.querySelector(".other")

burger.addEventListener("click" , function(){
    ul.classList.toggle("show")
    burger.classList.contains("fa-bars")
    ?(this.classList="fa-solid fa-xmark")
    :(this.classList="fa-solid fa-bars")
})


let BASE_URL=("http://localhost:8888/users")
let fav=[]
let allData=[]
let num=2
let copyArr=[]
let searchArr=[]

async function getData(){
    cards.innerHTML=''
    let res=await axios(BASE_URL)
    let data=res.data
    allData=data
    searchArr=data
    copyArr=data
    fav=fav.length || search.value ?fav.slice(0,num) :data.slice(0,num)
    fav.forEach(element => {
        cards.innerHTML+=`
        <div class="card" style="width:25rem; ">
        <a href="#" class="btn btn-light" style="width:40px" onclick="addFav(${element.id})"><i class="fa-regular fa-heart heart"></i></a>
        
        <div class="d-flex justify-content-center">
        <img src="./assets/img/${element.photo}" class="card-img-top" style="width:50px; height:50px;" alt="...">
        </div>
        <div class="card-body">
                      <h5 class="card-title">${element.title}</h5>
                      <p class="card-text">${element.text}</p>
                      <p class="card-text">'${element.price}$'</p>
                      <div class="d-flex gap-2 justify-content-center">
                      <a href="#" class="btn btn-danger" onclick="deleteBtn(${element.id})">Delete</a>
                      <a href="./adduser.html?id=${element.id}" class="btn btn-danger">Edit</a>
                      <a href="./detail.html?id=${element.id}" class="btn btn-danger">Details</a>
                      </div>
                      </div>
                  </div> 
        `
    });
}
getData()

async function deleteBtn(id){
    await axios.delete(`${BASE_URL}/${id}`)
    fav=allData.filter(item=>item.id!=id)
    getData()
}

loadmore.addEventListener("click" ,async function(){
    num=num+2
    fav=copyArr
    getData()
    if(fav.length<=num){
    loadmore.innerHTML="Unload"
    }
})

ascBtn.innerHTML="Ascending"
ascBtn.addEventListener("click" , async function(){
    if(ascBtn.innerHTML=="Ascending"){
        fav.sort((a,b)=>a.price-b.price)
        ascBtn.innerHTML="Descending"
    }
    else if(ascBtn.innerHTML=="Descending"){
        fav.sort((a,b)=>b.price-a.price)
        ascBtn.innerHTML="Default"
    }
    else{
        ascBtn.innerHTML="Ascending"
    }
    getData()
})

search.addEventListener("input" ,async function(event){
  fav=searchArr
  fav=fav.filter(element=>element.title.toLocaleLowerCase().includes(event.target.value.toLocaleLowerCase()))
  getData()
})

async function addFav(id){
   let res= await axios(`${BASE_URL}/${id}`)
   let obj=res.data
//    heart.classList.contains()
   await axios.post('http://localhost:8888/fav',obj)

}