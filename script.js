const galleryImages = document.querySelectorAll('#gallery-container img');
const images = Array.from(galleryImages); // convert nodeList arry

const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');

let currentIndex = 0;

images.forEach((Image, index) => {
    Image.addEventListener('click', () => {
        currentIndex = index;
        lightboxImg.src = Image.src;
        lightbox.classList.add('visible')
    });
});
//close lightbox when clicking outside the content
lightbox.addEventListener('click', (event) => {
    if (event.target === lightbox) {
    lightbox.classList.remove('visible')
    }
 });

 // show next image in the light box
 document.getElementById('next').addEventListener('click', () => {
     currentIndex = (currentIndex + 1) % galleryImages.length;
    lightboxImg.src = images[currentIndex].src
 });

 // show previous images in the lightbox
 document.getElementById('prev').addEventListener('click', () => {
     currentIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
    lightboxImg.src = images[currentIndex].src;    
 })

 // keyboard navigation for the lightbox
 document.addEventListener('keydown' , (event) => {
    if (event.key === 'arrowRight') {
        currentIndex = (currentIndex + 1) % images.length;
       lightboxImg.src =images[currentIndex].src;
    } else if (event.key === 'ArrowRight') {
currentIndex = (currentIndex - 1 + images.length) % images.length;
        lightboxImg.src = images[currentIndex].src;
    } else if (event.key === 'Escape'){
       lightbox.classList.remove('visible')
     }
 });