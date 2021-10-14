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

let bodyColor
let menuColor
let columnColor
let lineColor
let aboutBlocksColor
let menubarColor

function newColors(point) {
    if (point.target.classList.contains("point__cyber")) {
        console.log("poooooiny")
        bodyColor = "#1c1c1c"
        menuColor = "#313a5c"
        columnColor = "#232a42"
        lineColor = "#1f1b38"
        aboutBlocksColor = "#232a42"
        menubarColor = "#fff"
        changeBackground(bodyColor, menuColor, columnColor, lineColor, aboutBlocksColor, menubarColor)

    } else if (point.target.classList.contains("point__classic")) {
        bodyColor = "#fff"
        menuColor = "#e6e6e6"
        columnColor = "#e6e6e6"
        lineColor = "#000"
        aboutBlocksColor = "#e6e6e6"
        menubarColor = "#000"
        changeBackground(bodyColor, menuColor, columnColor, lineColor, aboutBlocksColor, menubarColor)
    }
}


function changeBackground(...args) {
    document.body.style.backgroundColor = bodyColor;
    menu_body.style.backgroundColor = menuColor;


}
