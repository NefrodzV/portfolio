    const hamburgerButton = document.querySelector('button.hamburger')
    const navbarCloseButton = document.querySelector('button.close')
    const navbar = document.querySelector('.navbar')
    const navItems = document.querySelectorAll('nav.navbar a')
    const overlay = document.querySelector('.overlay')
    const handleMenuClick = () => {
        navbar.toggleAttribute("visible")
        overlay.toggleAttribute('visible')
    }

navItems.forEach(item => item.addEventListener("click", handleMenuClick))
hamburgerButton.addEventListener("click", handleMenuClick)
navbarCloseButton.addEventListener("click", handleMenuClick)

