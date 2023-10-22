console.log("Hello js")
const menuIcon = document.querySelector(".menu-icon")
const menu = document.querySelector(".menu")
const items = document.querySelectorAll(".item")
const handleMenuClick = () => {
    menuIcon.toggleAttribute("active")
    menu.toggleAttribute("show")
console.log("menu click")
}


items.forEach( item => item.addEventListener("click", handleMenuClick))
menuIcon.addEventListener("click", handleMenuClick)