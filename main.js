document.addEventListener("DOMContentLoaded", function(){
    let searchIcon = document.querySelector('.btn.icon');
    let overlay = document.getElementById('search-overlay');
    let overlay_dimmer = document.getElementById('search-overlay-dimmer');
    searchIcon.addEventListener('click',function(event){
        overlay.style.display = 'block';
        overlay_dimmer.style.display = 'block'
        event.preventDefault();
    });

    function fadeOutEffect() {
        overlay.style.display = 'none';
        overlay_dimmer.style.display = 'none'
        event.preventDefault();
    }
    
    overlay.addEventListener('mouseleave', fadeOutEffect);
})