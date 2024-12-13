const button = document.getElementById("js--menu");
const navigation = document.getElementById("js--nav");
const body = document.getElementById("js--body");
const hamMenu = document.querySelector('.ham-menu')
const offScreenMenu = document.querySelector('.off-screen-menu')

hamMenu.addEventListener('click', () => {
   hamMenu.classList.toggle('active');
   offScreenMenu.classList.toggle('active');
   document.body.classList.toggle("body_no_scroll_pls");
})
