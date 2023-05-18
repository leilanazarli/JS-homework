let goback=document.querySelector(".goback")
let cards=document.querySelector(".cards")

goback.addEventListener("click" , function(){
    window.location='main.html'
})
let favorite=JSON.parse(localStorage.getItem("fav"))


function getFav(){
  cards.innerHTML=''
  favorite.forEach(element => {
    cards.innerHTML+=`
    <div class="card col col-2" style="width: 18rem;">
    <img src="${element.photo}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title " style="color: red;">${element.name}  ${element.username}</h5>
      <hr>
      <p class="card-text">${element.email}</p>
      <p class="card-text">${element.date}</p>
      <a href="#" class="btn btn-primary">Remove fav</a>
    </div>
    </div>
    `
    console.log(element.photo);
  });

}
getFav()