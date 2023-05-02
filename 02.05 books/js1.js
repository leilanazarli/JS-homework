let btn=document.querySelector(".btn-success")
let deleteBtn=document.querySelector(".btn-danger")
let emptyBtn=document.querySelector(".btn-warning")
let submit=document.querySelector(".submit")

btn.addEventListener("click" , ()=>{
    localStorage.setItem("firstName", "Leyla")
    localStorage.setItem("lastName", "Nazarli")
    localStorage.setItem("age", "23")
})
//1.1
console.log(localStorage.length);
//2
for(let i=0; i<localStorage.length; i++) {
    let key = localStorage.key(i);
    console.log(`${key}`);
  }
//3
for(let i=0; i<localStorage.length; i++) {
    let key = localStorage.key(i);
    console.log(` ${localStorage.getItem(key)}`);
  }
//4
 
    let key = localStorage.key(0)
    console.log(key);

//4.1
let arr=[]
for(let i=0; i<localStorage.length; i++) {
    let key = localStorage.key(i);

}
//5
let value = localStorage.key(0)
console.log(`${JSON.stringify(localStorage.getItem(value))}`);
//5.1
for(let i=0; i<localStorage.length; i++) {
    let key = localStorage.key(i);
    console.log(`${JSON.stringify(localStorage.getItem(key))}`);
}
//6
deleteBtn.addEventListener("click" , function(){
   
        let key = localStorage.key(0);
        localStorage.removeItem(key)
    
})
//6.1
emptyBtn.addEventListener("click" , function(){
    console.log(localStorage.clear());
})
//7
let allInput = document.querySelectorAll(".form-control");
let allUsers = JSON.parse(localStorage.getItem('usersData')) || [];

submit.addEventListener("submit" ,function(event){
  event.preventDefault();

  let userobj= {  
      username: allInput[0].value,
      emailadress: allInput[1].value,
      password: allInput[2].value,
      check: allInput[3].checked,
      
    }
    if(allInput[0].value && allInput[1].value && allInput[2].value && allInput[3].checked){
        allUsers.push(userobj)
        localStorage.setItem("usersData", JSON.stringify(allUsers))
    }
})

//8
for(let i=0; i<localStorage.length; i++) {
    let key = localStorage.key(i);
    console.log(JSON.parse(localStorage.getItem(key)));}

  
