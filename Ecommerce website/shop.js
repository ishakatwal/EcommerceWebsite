let Home = document.getElementById("Home");
let Cloths = document.getElementById("Cloths");
let Blogs = document.getElementById("Blogs");
let Review = document.getElementById("Review");
let ContactUs = document.getElementById("ContactUs");




// Cloths.addEventListener("click",function(){
//     cloths.style.color= " rgb(179, 134, 134)";
//     home.style.color="black";
//     review.style.color="black";
//     blog.style.color="black";
//     contact.style.color="black";
// });

// Home.addEventListener("click",function(){
//     cloths.style.color= "black";
//     home.style.color=" rgb(179, 134, 134)";
//     review.style.color="black";
//     blog.style.color="black";
//     contact.style.color="black";
// });

// Blogs.addEventListener("click",function(){
//     cloths.style.color= " black";
//     home.style.color="black";
//     review.style.color="black";
//     blog.style.color=" rgb(179, 134, 134)";
//     contact.style.color="black";
// });

// Review.addEventListener("click",function(){
//     cloths.style.color= " black";
//     home.style.color="black";
//     review.style.color=" rgb(179, 134, 134)";
//     blog.style.color="black";
//     contact.style.color="black";
// });

// ContactUs.addEventListener("click",function(){
//     cloths.style.color= "black";
//     home.style.color="black";
//     review.style.color="black";
//     blog.style.color="black";
//     contact.style.color=" rgb(179, 134, 134)";
// });


 let login = document.getElementById("login");

 login.addEventListener("click", function(){
      document.querySelector(".loginpage").style.display="block";
   });


let loged = document.getElementById("loged");

loged.addEventListener("click", function(){
    let Email = document.getElementById("Email");
    let pass = document.getElementById("pass");

    if(Email.value =="" || pass.value==""){
        alert("Please enter your Email and Password");
    }
    else{
        alert("You Loged In");
        document.querySelector(".loginpage").style.display="none";
    }
})

// contact

let submit = document.getElementById("submit")
submit.addEventListener("click", function(){
    let name = document.getElementById("name");
    let passs =  document.getElementById("passs");

    if(name.value == "" || passs.value == ""){
        alert("please enter your username and Password");
    }
    else{
        alert(name.value +" "+ "Thanks for connecting");
    }
})


let icon = document.querySelector(".icon");
let ul = document.querySelector("ul");

icon.addEventListener("click", function(){
    ul.classList.toggle("showData");
 if(ul.className == "showData"){
    document.getElementById("bars").className="fa-solid fa-xmark"
 }else{
    document.getElementById("bars").className="fa-solid fa-bars"

 }

})