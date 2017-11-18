document.addEventListener('DOMContentLoaded', function () {
    // Get all "navbar-burger" elements
    var $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
    // Check if there are any nav burgers
    if ($navbarBurgers.length > 0) {
        // Add a click event on each of them
        $navbarBurgers.forEach(function ($el) {
            $el.addEventListener('click', function () {
                // Get the target from the "data-target" attribute
                var target = $el.dataset.target;
                var $target = document.getElementById(target);
                // Toggle the class on both the "navbar-burger" and the "navbar-menu"
                $el.classList.toggle('is-active');
                $target.classList.toggle('is-active');
            });
        });
    }

    document.getElementById("scrollToTop").addEventListener("click", function() {
        // This script is copied from http://codepen.io/rleve/pen/iCbgy -- credit to author
        // Calculate how far and how fast to scroll
        let startLocation = window.pageYOffset;
        let endLocation = 0;
        let distance = endLocation - startLocation;
        let increments = distance/(200/16);
        let stopAnimation;
    
        // Scroll the page by an increment, and check if it's time to stop
        let animateScroll = function () {
            window.scrollBy(0, increments);
            stopAnimation();
        };
    
        stopAnimation = function () {
            let travelled = window.pageYOffset;
            if ( travelled <= (endLocation || 0) ) {
                clearInterval(runAnimation);
            }
        };
    
        // Loop the animation function
        var runAnimation = setInterval(animateScroll, 16);
    })
});