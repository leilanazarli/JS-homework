let btn = document.querySelector(".btn")
let row=document.querySelector(".row")
let darkbtn=document.querySelector(".darkbtn")
let Base_Url="https://restcountries.com/v3.1/name/"

btn.addEventListener("click" , function(){
    window.location="index.html"
})

let name= new URLSearchParams(window.location.search).get("name")

axios(`https://restcountries.com/v3.1/name/${name}`).then(res=>{
    console.log(res.data);
    row.innerHTML=`
    <div class="img me-5 "  style="width:450px; " >
    <img src="${res.data[0].flags.svg}" style="width:500px; height: 450px ;" alt="" >
    </div>
    <div class="cards ms-3 d-flex align-items-center  flex-column bg-transparent" style="width: 450px ;height: 450px ;">
    <div class="card-body d-flex align-items-center">
    <div class="me-2" >
    <h5 class="card-title mb-5">${res.data[0].name.common}</h5>
   
    <p class="card-text"><b>Native Name</b>: ${Object.values(res.data[0].name.nativeName)[0].common}</p>
        <p class="card-text"><b>Population</b>: ${res.data[0].population}</p>
        <p class="card-text"><b>Region</b>: ${res.data[0].region}</p>
        <p class="card-text"><b>Sub Region</b>: ${res.data[0].subregion}</p>
        <p class="card-text"><b>Capital</b>: ${res.data[0].capital[0]}</p>
        </div>
        <div class="">
        <p class="card-text"><b>Top Level Domain</b>: ${res.data[0].tld[0]}</p>
        <p class="card-text"><b>Currencies</b>: ${Object.values(res.data[0].currencies)[0].name}</p>
        <p class="card-text"><b>Languages</b>: ${Object.values(res.data[0].languages)}</p>
        </div>
        </div>
        </div> 
        `
})


window.onload = function () {
    localStorage.getItem("dark") && document.body.classList.add("dark-body");
    darkbtn.addEventListener("click" ,function(){

        if (localStorage.getItem("dark")) {
          localStorage.removeItem("dark");
          document.body.classList.remove("dark-body");
        } else {
          document.body.classList.add("dark-body");
          localStorage.setItem("dark", "mode");
        }
      })
}