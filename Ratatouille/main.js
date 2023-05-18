let menuIcon = document.querySelector("#menu-bar");
let mobileUl = document.querySelector("ul");
let tbody = document.querySelector("tbody");
const cards = document.querySelector("#cards");
const BASE_URL = "http://localhost:2080/users";

menuIcon.addEventListener("click", function () {
  mobileUl.classList.toggle("show");
  this.classList.contains("fa-bars")
    ? (this.classList = "fa-solid fa-xmark")
    : (this.classList = "fa-solid fa-bars");
});

let date = Date.now();

async function getData() {
  const res = await axios(BASE_URL);
  const data = await res.data;
  tbody.innerHTML = "";
  cards.innerHTML = "";
  console.log(data);
  data.forEach((element) => {
    let div = document.createElement("div");
    div.innerHTML += `
         <div class="card  mb-4 " style="background-color: rgb(221, 219, 219);" > 
         <h5 class="card-title"><span style="color:blue">Id:${element.id}</span>  <span style="color:green"> Date:${element.date}</span></h5>
         <div class="card-body d-flex gap-2">
             <img style="width: 40px; height: 40px;border-radius: 50%;"  src="${element.photo}" alt="">
          <div class="d-block">
             <p class="card-text m-0">${element.name} ${element.username}</p>
             <p class="card-text">${element.email}</p>
          </div>
         </div>
         <div class="d-flex h-25 gap-2 justify-content-end" > 
            <a href="./adduser.html?id=${element.id}" class="btn btn-success">Edit</a>
            <button class="btn btn-danger" onclick=deleteBtn("${element.id}")>Delete</button>
            <a href="#" class="btn btn-primary" onclick=addFavBtn("${element.id}")>Add Fav</a>
        </div>
        </div>`;

        let tr =document.createElement("tr")
tr.innerHTML+=`
<td>${element.id}</td>
<td><img style="width: 40px; height: 40px;border-radius: 50%;" src="${element.photo}" alt=""></td>
<td>${element.name}</td>
<td>${element.username}</td>
<td>${element.email}</td>
<td>${element.date}</td>
<td class="d-flex">
    <a href="./adduser.html?id=${element.id}" class="btn btn-success" onclick=editBtn("${element.id}")>Edit</a>
     <button class="btn btn-danger" onclick=deleteBtn("${element.id}")>Delete</button>
     <a href="#" class="btn btn-primary" onclick=addFavBtn("${element.id}")>Add Fav</a>
</td>
`


    tbody.append(tr);
    cards.append(div);
  });
}
getData();

function deleteBtn(id){
  axios.delete(`http://localhost:2080/users/${id}`).then(res=>{
    getData(res.data)
  })
  console.log(id);
}

let favorite=JSON.parse(localStorage.getItem("fav"))||[]

async function addFavBtn(id){
  const res = await axios.get(`${BASE_URL}/${id}`)
  const data = await res.data

  
    let exists= favorite.find((item)=>item.id == data.id)
     if(!exists){
      favorite.push(data)
      localStorage.setItem("fav",JSON.stringify(favorite))
     }else{
      alert('already exists')
     }
   }