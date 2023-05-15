let emailinput=document.querySelector("#email")
let passwordinput=document.querySelector("#password")
let checkbox=document.querySelector("#checkbox")
let form=document.querySelector("form")



form.addEventListener("submit",function(e){
    e.preventDefault()
    let usersData=JSON.parse(localStorage.getItem("users")) 
     
    if(emailinput.value!="" && passwordinput.value!=""){
        if(usersData.find((item)=>
        item.email===emailinput.value &&
        item.password===passwordinput.value
        )){
           let userName=usersData.find((item)=>item.email===emailinput.value && item.password=== passwordinput.value).name
        //    console.log(userName);
            localStorage.setItem("userName",JSON.stringify(userName))
            alert("Login Successful")
            window.location.href="http://127.0.0.1:5501/home.html"
        }
        else{
            alert("Invalid Login")
        }
    }
    else{
        alert("Empty!!!")
    }
})
checkbox.addEventListener("click" , function(){
    if(checkbox.checked){
        usersData.find((item)=>
        item.name===textinput.value )
    }
})