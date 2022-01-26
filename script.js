const toggleButton = document.getElementById('toggle-button')
const navbarLinks = document.getElementById('navBar-Section')

toggleButton.addEventListener('click',()=>{
    navbarLinks.classList.toggle('navactive')
    console.log("hello")
})