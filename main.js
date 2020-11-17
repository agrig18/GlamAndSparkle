document.addEventListener("DOMContentLoaded", function(){
    let searchIcon = document.querySelector('.btn.icon');
    searchIcon.addEventListener('click',function(event){
        let overlay = document.getElementById('search-overlay');
        overlay.style.display = 'block';
        let overlay_dimmer = document.getElementById('search-overlay-dimmer');
        overlay_dimmer.style.display = 'block'
        event.preventDefault();
    });
})