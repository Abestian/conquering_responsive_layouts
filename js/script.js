const nav = document.querySelector('.nav-mobile')
const navToggle = document.querySelector('.nav-toggle')
const openNav = document.querySelector('.open-nav')
const closeNav = document.querySelector('.close-nav')

const handleNavigation = () => {
	nav.classList.toggle('nav--active')
	openNav.classList.toggle('burger--hidden')
	closeNav.classList.toggle('burger--hidden')
}

navToggle.addEventListener('click', handleNavigation)
closeNav.addEventListener('click', handleNavigation)
