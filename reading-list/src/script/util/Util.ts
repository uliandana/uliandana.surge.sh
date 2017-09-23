export default class Util {
    static assetsUrl: string = "http://127.0.0.1:8090";

    static textEncode(text: string) {
        return text.toLowerCase().replace(/[^0-9A-Za-z\-\s]/g, '').replace(/\-/g, ' ').replace(/\s+/g, '-').replace(/\-$/g, '');
    }

    static scrollToTop() {
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
    }
}