window.addEventListener("scroll", onScroll)

onScroll()
function onScroll() {
  showNavOnScroll()
  showBackTopTopButtonOnScroll()
}

function showNavOnScroll() {
  var navigation = document.getElementById("navigation")

  if (scrollY > 0) {
    navigation.classList.add("scroll")
  } else {
    navigation.classList.remove("scroll")
  }
}

function showBackTopTopButtonOnScroll() {
  var navigation = document.getElementById("backToTopButton")

  if (scrollY > 500) {
    navigation.classList.add("show")
  } else {
    navigation.classList.remove("show")
  }
}

function openMenu() {
  document.body.classList.add("menu-expanded")
}

function closeMenu() {
  document.body.classList.remove("menu-expanded")
}

ScrollReveal({
  origin: "top",
  distance: "30px",
  duration: 700
}).reveal(`
#home, 
#home img,
 #home .stats, 
 #services,
 #services header,
 #services .card,
 #about,
 #about header,
 #about .content
 `)
