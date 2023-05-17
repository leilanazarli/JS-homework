let cards=document.querySelector(".cards")
let search=document.querySelector("#search")
let select=document.querySelector(".form-select")
let darkbtn=document.querySelector(".darkbtn")

const Base_Url="https://restcountries.com/v2/all"

axios(Base_Url).then((res)=>{
    console.log(res.data);
    getData(res.data);
})

function getData(arr) {
    cards.innerHTML=""
        arr.forEach(element => {
            cards.innerHTML+=`
            <a href="./details.html?name=${element.name}" class="btn btn-light bg-transparent">
            <div class="card bg-transparent" style="width: 18rem;">
            <img src="${element.flags.svg}" class="card-img-top " style="height:190px;" alt="...">
            <div class="card-body">
             <h5 class="card-title"><b><i>${element.name}</i></b></h5>
            <p class="card-text"><b>Population</b>: ${element.population}</p>
            <p class="card-text"><b>Region</b>: ${element.subregion}</p>
            <p class="card-text"><b>Capital</b>: ${element.capital}</p>
             </div>
             </div>
             </a>
            `
        });
    }
    


let spinnerdark=document.querySelector(".spinnerdark")

window.onload=()=>{
    cards.innerHTML=""
    spinnerdark.style.display="flex";
    axios(Base_Url).then(res=>{
        spinnerdark.style.display="none";
        getData(res.data)
    })
}
search.addEventListener("input" , function(event){
    cards.innerHTML=""
    spinnerdark.style.display="flex";
    axios(Base_Url).then(res=>{
        let searched= res.data.filter((item)=>item.name.toLocaleLowerCase().includes(event.target.value.toLocaleLowerCase()))
        spinnerdark.style.display="none";
        getData(searched);
    })
})
select.addEventListener("click" , function(event){
    cards.innerHTML=""
    spinnerdark.style.display="flex";
    axios(Base_Url).then(res=>{
        let selected= res.data.filter(item=>item.region.toLocaleLowerCase()==event.target.value.toLocaleLowerCase())
        spinnerdark.style.display="none";
        getData(selected);
    })
})

window.onload=()=>{
  localStorage.getItem("dark") && document.body.classList.add("dark-body")
  darkbtn.addEventListener("click" ,function(){
    if(localStorage.getItem("dark")){
        document.body.classList.remove("dark-body")
        localStorage.removeItem("dark")
      }else{
        document.body.classList.add("dark-body")
        localStorage.setItem("dark" ,"mode")
      }
  })
}