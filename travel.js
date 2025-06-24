let searchBtn=document.querySelector('#search-btn')
let searchForm=document.querySelector('.search-form')
let loginForm=document.querySelector('.login-form')
let formClose=document.querySelector('#form-close')
let menubar=document.querySelector('#menu-bar')
let amenu =document.querySelector('.navbar')
let vidBtn =document.querySelectorAll('.video-btn')


function showbar(){
    searchBtn.classList.toggle('fa-times')
    searchForm.classList.toggle('active')
}

function showform(){
    loginForm.classList.add('active')
}
function hideform(){
    loginForm.classList.remove('active')
}
function showMenu(){
    menubar.classList.toggle('fa-times')
    amenu.classList.toggle('active')
}
vidBtn.forEach(slide=>{
    slide.addEventListener('click',function(){
        document.querySelector('.controls .orange').classList.remove('orange')
        slide.classList.add('orange')
        let src=slide.getAttribute('data-src')
        document.querySelector('#video-slider').src=src
    })
})
var swiper = new Swiper(".review-slider", {
    spaceBetween:20,
    loop:true,
    autoplay:{
        delay:2500,
    },
    breakpoints:{
        640:{
            slidesPerView:1
        },
        768:{
            slidesPerView:2
        },
        1024:{
            slidesPerView:3
        }

    }
});
