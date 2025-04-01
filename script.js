const myObserver = new IntersectionObserver((entries) =>{
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            entry.target.classList.add('show')
        }else{
            entry.target.classList.remove('show')
        }
    })
})

const elements = document.querySelectorAll('.hidden')
const test = document.querySelectorAll('.inside')

test.forEach((element) => myObserver.observe(element))

elements.forEach((element) => myObserver.observe(element))

document.addEventListener("DOMContentLoaded", function () {

    setTimeout(function () {
        document.getElementById("loader").style.display = "none";
        document.getElementById("content").style.display = "block";
    }, 5000);
});