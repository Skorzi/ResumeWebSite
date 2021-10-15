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
let point_cyber = document.querySelector(".point__cyber")
let point_japan = document.querySelector(".point__japan")
let point_classic = document.querySelector(".point__classic")


menu_icon.addEventListener("click", function (event) {
    menu_icon.classList.toggle("_active")
    menu_body.classList.toggle("_active")
    menu_list.classList.toggle("_active")
    menu.classList.toggle("_active")
    document.body.classList.toggle("_lock")
})

let cyberTheme = "{% static 'mainApp/css/cyberTheme.css' %}"
let classicTheme = "{% static 'mainApp/css/classicTheme.css' %}"
var link = document.getElementById('theme-link')

point_cyber.addEventListener("click", function (event) {
    checkActivePoint(event)
})
point_japan.addEventListener("click", function (event) {
    checkActivePoint(event)
})
point_classic.addEventListener("click", function (event) {
    checkActivePoint(event)
})

function checkActivePoint(point) {
    let point_active = document.querySelector(".point._active")
    if (point.target == point_active) {
        console.log(point_active)
        // pass
    } else {
        point_active.classList.remove("_active")
        point.target.classList.add("_active")
        newColors(point)
    }

}

// let bodyColor
// let menuColor
// let columnColor
// let lineColor
// let aboutBlocksColor
// let menubarColor

function newColors(point) {
    let currTheme = link.getAttribute("href")
    let theme = ""
    if (point.target.classList.contains("point__cyber")) {
        console.log("cyber")
        currTheme = cyberTheme
        theme = "cyber"

    } else if (point.target.classList.contains("point__classic")) {
        console.log("classic")
        currTheme = classicTheme
        theme = "classic"
    }
    link.setAttribute('href', currTheme)
    
}


// function changeBackground(...args) {
//     document.body.style.backgroundColor = bodyColor;
//     menu_body.style.backgroundColor = menuColor;


// }


