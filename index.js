const hamburgerButton = document.querySelector('button.hamburger')
const navbarCloseButton = document.querySelector('button.close')
const navbar = document.querySelector('.navbar')
const navItems = document.querySelectorAll('nav.navbar a')
const overlay = document.querySelector('.overlay')
const dropdowns = document.querySelectorAll('.dropdown')
const dropdownButtons = document.querySelectorAll('.dropdown button')
const skillCategoryDropdownButtons = document.querySelectorAll('.skill-category .dropdown')
const contactForm = document.getElementById('contact-form')
const errorElements = document.querySelectorAll('.error')
const emailInput = document.getElementById('email')
const messageTextarea = document.getElementById('message')
const projectCards = document.querySelectorAll('.card')
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
                // dropdownContent.removeEventListener('focusout', closeDropdown)
            }, { once: true })
        }
        button.setAttribute('aria-expanded',true)
        dropdownContent.toggleAttribute('visible')
        dropdownContent.addEventListener('mouseleave', closeDropdown ,{once: true})
        // dropdownContent.addEventListener('focusout', closeDropdown, {once: true})
        dropdownContent.focus()
    })
})

// Setup an intersection observer to the work/project section
const options = {
    root: null,
    rootMargin: "0px",
    threshold: [.5]
}
let step = 0
// Need to add an observer to the single element perse or the card themselves
const workSectionObserver = new IntersectionObserver((entries, observer) =>{
    console.log("Intersection observer entries", entries
    )
    entries.forEach((entry, i)=> {
        const direction = entry.target.getAttribute('data-animation')

        if(entry.isIntersecting) {
            if(direction === 'left') {
                entry.target.classList.remove('leave-out-left')
                entry.target.classList.add('show-in-left')
            } else {
                entry.target.classList.remove('leave-out-right')
                entry.target.classList.add('show-in-right')
            }
        } else {
            if(direction === 'left') {
                entry.target.classList.remove('show-in-left')
                entry.target.classList.add('leave-out-left')
            } else {
                entry.target.classList.remove('show-in-right')
                entry.target.classList.add('leave-out-right')
            }
        }
    })
},options)

// setting observer to the project cards
projectCards.forEach((card) => workSectionObserver.observe(card))


