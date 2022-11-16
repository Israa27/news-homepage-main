const mediaQuery = window.matchMedia('(max-width: 600px)')
let menu=document.querySelector('.menu')
let itemsOfMenu=document.querySelector('ul')
console.log(menu.firstElementChild.nextElementSibling)
if (mediaQuery.matches) {
    menu.addEventListener('click',function(){
        itemsOfMenu.classList.toggle('change-menu')
        menu.classList.toggle('active')
        menu.firstElementChild.classList.toggle('first')
        menu.firstElementChild.nextElementSibling.classList.toggle('second')
        menu.lastElementChild.classList.toggle('third')
    })
   
  }