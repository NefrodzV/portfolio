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
    
// const onSubmitContactForm = (e) => {
//     e.preventDefault()
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
//     const emailError = errorElements[0]
//     const messageError = errorElements[1]
//     const data = Object.fromEntries(new FormData(e.target))
//     let hasErrors = false
// 
//     // If this is not empty a bot is filling the form
//     if(data.fullname.length != 0) return
// 
//     if(data.email.length === 0) {
//         hasErrors = true
//         emailError.textContent = 'Please write your email before submitting!'
//         emailError.setAttribute('visible', "")
//         
//     }
// 
//     if(!emailRegex.test(data.email)) {
//         hasErrors = true
//         emailError.textContent = 'Invalid email'
//         emailError.setAttribute('visible', "")
//         
//     }
// 
//     if(data.message.length === 0) {
//         console.log('Message is empty')
//         hasErrors = true
//         messageError.textContent = "There is no message to send"
//         messageError.setAttribute('visible', '')
//     }
// 
//     
// 
//     if(hasErrors) return
//     // Removing animations if there is no errors
//     if(emailError.hasAttribute('visible')) {
//         emailError.setAttribute('closing', '')
//         emailError.addEventListener('animationend', () => {
//             emailError.removeAttribute('visible')
//             emailError.removeAttribute('closing')
//         }, { once : true})
//     }
// 
//     if(messageError.hasAttribute('visible')) {
//         messageError.setAttribute('closing', '')
//         messageError.addEventListener('animationend', () => {
//             messageError.removeAttribute('visible')
//             messageError.removeAttribute('closing')
//         }, { once : true })
//     }
//     // Theres no errors continue the logic here
// }

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

