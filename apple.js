const toggel = document.querySelector(".toggle-icon")
const lineToggle = document.querySelector(".toggle-line-1")
const lineToggle2 = document.querySelector(".toggle-line-2")
const shoppingIcoon = document.querySelector("#shopping-icon")
const searchbar = document.querySelector(".search-bar-response")
const listMenuBar = document.querySelector(".list-navbar-response")
const section = document.querySelector(".section")
console.log("ssss", shoppingIcoon);

let toggleClose = false

function toggleMenu() {

    if (!toggleClose) {
        lineToggle.style.transform = "rotate(45deg)"
        lineToggle.style.transition = "all 0.5s cubic-bezier(0.4, 0, 1, 1) 0s"
        lineToggle2.style.transform = "rotate(-45deg)"
        lineToggle2.style.transition = "all 0.5s cubic-bezier(0.4, 0, 1, 1) 0s"
        lineToggle2.style.top = "25px"
        shoppingIcoon.style.visibility = "hidden"
        searchbar.style.display = "block"
        searchbar.style.transition = "all 0.7s cubic-bezier(0, 0, 0.46, 0.53) 0s"
        listMenuBar.style.display = "flex"
        listMenuBar.style.transition = "all 0.7s cubic-bezier(0, 0, 0.46, 0.53) 0s"
        section.style.display = "none"
        toggleClose = true
    } else {
        lineToggle.style.transform = "rotate(0deg)"
        lineToggle.style.transition = "all 0.5s cubic-bezier(0.4, 0, 1, 1) 0s"
        lineToggle2.style.transform = "rotate(0deg)"
        lineToggle2.style.transition = "all 0.5s cubic-bezier(0.4, 0, 1, 1) 0s"
        lineToggle2.style.top = "30px"
        shoppingIcoon.style.visibility = "visible"
        searchbar.style.display = "none"
        searchbar.style.transition = "visibility 0s linear 1s"
        listMenuBar.style.display = "none"
        listMenuBar.style.transition = "visibility 0s linear 1s"
        section.style.display = "block"
        toggleClose = false
    }



}
toggel.addEventListener("click", toggleMenu)

const listNavbarFooter = document.querySelectorAll(".list-navbar-footer")
console.log(listNavbarFooter);


function toggleListFootr(iconName) {

    let getUlId = document.getElementById(iconName)
    if (getUlId.style.display === "flex") {
        getUlId.style.display = "none"
    } else {
        getUlId.style.display = "flex"

    }

}