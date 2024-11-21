let currentIndex = 0;
function showSlide(index) {
    const slider = document.getElementById("image");
    const slides = document.getElementsByClassName("slide");
    if (index < 0)
       {
        currentIndex = slides.length - 1;
       } 
    else if (index >= slides.length)
            {
            currentIndex = 0;
            }
        else 
            {
            currentIndex = index;
            }
            const translateValue = -100 * currentIndex + '%';
            slider.style.transform = 'translateX(' + translateValue + ')';
}            
            
function prevSlide() {
    showSlide(currentIndex - 1);
}

function nextSlide() {
    showSlide(currentIndex + 1);
}

setInterval(() => {
    nextSlide();
}, 7000);