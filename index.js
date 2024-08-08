    const hamburgerButton = document.querySelector('button.hamburger')
    const navbarCloseButton = document.querySelector('button.close')
    const navbar = document.querySelector('.navbar')
    const navItems = document.querySelectorAll('nav.navbar a')
    const overlay = document.querySelector('.overlay')
    const dropdowns = document.querySelectorAll('.dropdown')
    const dropdownButtons = document.querySelectorAll('.dropdown button')
    const skillCategoryDropdownButtons = document.querySelectorAll('.skill-category .dropdown')
    
    const openNavbar = () => {
        hamburgerButton.setAttribute('aria-expanded', true)
        navbar.toggleAttribute("visible");
        overlay.toggleAttribute('visible')
    }
    const menuClickHandler = () => {
        hamburgerButton.setAttribute('aria-expanded',false)
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
dropdownButtons.forEach((element) => {
    element.addEventListener('click', (e) => {
        const button = e.target;
        console.log(e.target)
        const dropdownContent = e.target.nextElementSibling
        const closeDropdown = () => {
            dropdownContent.toggleAttribute('closing')
            button.setAttribute('aria-expanded',false)
            dropdownContent.addEventListener('animationend', () => {
                dropdownContent.removeAttribute('visible')
                dropdownContent.removeAttribute('closing')
                /**  Removing event listeners here because it 
                 * can be the case that mobile cannot trigger some 
                 * listeners and are not removed */
                dropdownContent.removeEventListener('mouseleave', closeDropdown)
                dropdownContent.removeEventListener('focusout', closeDropdown)
            }, { once: true })
        }
        button.setAttribute('aria-expanded',true)
        dropdownContent.toggleAttribute('visible')
        dropdownContent.addEventListener('mouseleave', closeDropdown ,{once: true})
        dropdownContent.addEventListener('focusout', closeDropdown, {once: true})
        dropdownContent.focus()
    })
})

skillCategoryDropdownButtons.forEach((element) => {
    element.addEventListener('click', (e) => {
        const button = e.target;
        const dropdownContent = e.target.nextElementSibling;
        if(dropdownContent.hasAttribute('visible')) {
            button.setAttribute('aria-expanded', false)
            dropdownContent.toggleAttribute('closing')
            dropdownContent.addEventListener('animationend', () => {
                dropdownContent.removeAttribute('visible')
                dropdownContent.removeAttribute('closing')
            },{ once: true })
            return
        }
        button.setAttribute('aria-expanded', true)
        dropdownContent.focus()
        dropdownContent.toggleAttribute('visible')
    })
})

