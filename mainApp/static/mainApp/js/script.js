"use strict"

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

let cyberTheme = "../../static/mainApp/css/cyberTheme.css"
let classicTheme = "../../static/mainApp/css/classicTheme.css"
let japanTheme = "../../static/mainApp/css/japanTheme.css"
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

function getCookie(name) {
    let matches = document.cookie.match(new RegExp(
        "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
}

function setCookie(name, value, options = {}) {

    options = {
        path: '/',
        // при необходимости добавьте другие значения по умолчанию
        ...options
    };

    if (options.expires instanceof Date) {
        options.expires = options.expires.toUTCString();
    }

    let updatedCookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);

    for (let optionKey in options) {
        updatedCookie += "; " + optionKey;
        let optionValue = options[optionKey];
        if (optionValue !== true) {
            updatedCookie += "=" + optionValue;
        }
    }

    document.cookie = updatedCookie;
}

function deleteCookie(name) {
    setCookie(name, "", {
        'max-age': -1
    })
}


function newColors(point) {

    let currTheme = link.getAttribute("href")
    let theme = ""

    if (point.target.classList.contains("point__cyber")) {
        console.log("cyber")
        theme = "cyber"
        setCookie("theme", theme)
        currTheme = cyberTheme

    } else if (point.target.classList.contains("point__classic")) {
        console.log("classic")
        theme = "classic"
        setCookie("theme", theme)
        currTheme = classicTheme

    } else if (point.target.classList.contains("point__japan")) {
        console.log("japan")
        theme = "japan"
        setCookie("theme", theme)
        currTheme = japanTheme
    }
    link.setAttribute('href', currTheme)
}

function addActivePoint(point){
    let point_active = document.querySelector(".point._active")
    point_active.classList.remove("_active")
    point.classList.add("_active")
}

if (getCookie('theme') == 'cyber') {
    link.setAttribute('href', cyberTheme)
    addActivePoint(point_cyber)
}
if (getCookie('theme') == 'classic') {
    link.setAttribute('href', classicTheme)
    addActivePoint(point_classic)
}
if (getCookie('theme') == 'japan') {
    link.setAttribute('href', japanTheme)
    addActivePoint(point_japan)

}


