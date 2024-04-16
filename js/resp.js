burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar')
nav-list = documnet.querySelector('.nav-list')
rightnav = document.querySelector('.rightnav')


burger.addEventListener('click', ()=>{
  nav-list.classList.toggle('v-class-resp');
  rightnav.classList.toggle('v-class-resp');
  navbar.classList.toggle('h-nav-resp');

})
