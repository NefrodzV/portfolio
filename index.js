    const hamburgerButton = document.querySelector('button.hamburger')
    const navbarCloseButton = document.querySelector('button.close')
    const navbar = document.querySelector('.navbar')
    const navItems = document.querySelectorAll('nav.navbar a')
    const overlay = document.querySelector('.overlay')

    const openNavbar = () => {
        navbar.toggleAttribute("visible");
        overlay.toggleAttribute('visible')
    }
    const menuClickHandler = () => {
        navbar.setAttribute('closing',"")
        overlay.setAttribute('closing',"")
        navbar.addEventListener('animationend', () => {
            console.log('running animation en')
            navbar.removeAttribute('visible')
            overlay.removeAttribute('visible')
            navbar.removeAttribute('closing')
            overlay.removeAttribute('closing')
        }, { once: true })
        
    }
    

navItems.forEach(item => item.addEventListener("click", menuClickHandler))
hamburgerButton.addEventListener("click", openNavbar)
navbarCloseButton.addEventListener("click", menuClickHandler)

