//7
// let allInput = document.querySelectorAll(".form-control");
let exampleInputName1 = document.querySelectorAll("#exampleInputName1");
let exampleInputEmail1 = document.querySelectorAll("#exampleInputEmail1");
let exampleInputPassword1 = document.querySelectorAll("#exampleInputPassword1");
let exampleCheck1 = document.querySelectorAll("#exampleCheck1");

//8
let allUsers = JSON.parse(localStorage.getItem('usersData')) || [];

submit.addEventListener("click" ,function(event){
  event.preventDefault();
  
  let userobj= {  
    username: exampleInputName1.value,
    emailadress: exampleInputEmail1.value,
    password: exampleInputPassword1.value,
    check: exampleCheck1.checked,
    
  }
  if(userobj.username && userobj.emailadress  ){
  allUsers.push(userobj)
  }
   localStorage.setItem("usersData", JSON.stringify(allUsers))
})