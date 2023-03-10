const nav = document.querySelector('nav');
const togglebtn = document.getElementById('toggle-btn');
const content = document.querySelector('section');

togglebtn.onclick = function() {
   nav.classList.toggle('hide');
   content.classList.toggle('expand');   
   
}