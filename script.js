const bar = document.getElementById('bar');
const nav= document.getElementById('navbar');
const close = document.getElementById('close');

if (bar) {
    bar.addEventListener('click',() =>{ //addEventListener when i click on bar this function gonna happen:
        nav.classList.add('active'); //this function gonna add a class named active to a list then i go to the style.css file to style it
    })
}
if (close) {
    close.addEventListener('click',() =>{ 
        nav.classList.remove('active'); 
    })
}