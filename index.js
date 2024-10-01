
const slides = document.querySelectorAll('.slide');
let currentSlide = 0;


function showSlide(index) {
    slides.forEach(slide => slide.classList.remove('active'));  
    slides[index].classList.add('active'); 
    
}


function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length; 
    showSlide(currentSlide); 
}

showSlide(currentSlide);


setInterval(nextSlide, 3000); 


const sidebar = document.getElementById('sidebar')
const sidebarContent = document.createElement('div');

const sidebarTrigger = document.getElementById('sidebar-button')
sidebar.className = 'block sm:hidden mx-auto'

sidebarContent.style.display = 'none';
sidebarContent.style.position = 'relative'
sidebarContent.style.top = '5px'
sidebarContent.style.right = '5px'
sidebarContent.style.background = 'white'

sidebarTrigger.addEventListener('click',() =>{
    if(sidebarContent.style.display === 'none'){
        sidebarContent.style.display = 'block'
    }else{
        sidebarContent.style.display = 'none'
    }
})
sidebarTrigger.appendChild(sidebarContent)
sidebar.appendChild(sidebarTrigger)


