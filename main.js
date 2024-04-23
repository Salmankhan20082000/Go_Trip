let slide = document.querySelectorAll(".reviewCard");
let count=0;

slide.forEach(function(slides,index){
    slides.style.left=`${index * 100}%`
});

function myFun(){
    slide.forEach(function(curVal){
        curVal.style.transform=`translate(-${count * 100}%)`
    })
}

setInterval(function(){
    count++
    if(count==slide.length){
        count=0;
    }
    myFun()
},2000)

let dark = document.getElementById("dark");
let user = document.getElementById("user");
let bar = document.getElementById("bar");
let loginBtn = document.getElementById("loginBtn");


dark.addEventListener("click",function(){
    document.querySelector("body").classList.toggle("active1")
});

user.addEventListener("click",function(){
    document.querySelector(".loginPage").classList.toggle("active2")
});

loginBtn.addEventListener("click",function(){
    let email=document.getElementById("email")
    let pass=document.getElementById("pass")
    if(email.value=="" && pass.value==""){
        alert("Fill the form")
    }
    else{
        alert("Submit Your form")
    }
});

bar.addEventListener("click",function(){
    document.querySelector(".navbar").classList.toggle("active3")
})