"use strict"

// if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {

//     document.body.classList.add('_touch')

// } else { 	
// 	document.body.classList.add('_pc')
// }


let menu_icon = document.querySelector(".menu__icon")
let menu_body = document.querySelector(".menu__body")
let menu_list = document.querySelector(".menu__list")
let menu = document.querySelector(".menu")


menu_icon.addEventListener("click", function(event){
    menu_icon.classList.toggle("_active")
    menu_body.classList.toggle("_active")
    menu_list.classList.toggle("_active")
    menu.classList.toggle("_active")
    document.body.classList.toggle("_lock")
})

