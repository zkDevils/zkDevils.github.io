document.addEventListener('DOMContentLoaded', function() {
    const overlay = document.getElementById('overlay');
    const content = document.getElementById('content');
    const landingPage = document.getElementById('landing-page');
    const overlayHeight = overlay.offsetHeight;
    const landingPageHeight = landingPage.offsetHeight;
    const scrollThreshold = 150; // Adjust this value to control the scroll threshold for the animation
    const overlaySpeed = 1.5; // Adjust this value to control the scrolling speed

    function handleScroll() {
        const currentScroll = window.pageYOffset;
        const overlayOffset = Math.min(currentScroll * overlaySpeed, scrollThreshold);
        const contentOpacity = 1 - (currentScroll / scrollThreshold);
    

        overlay.style.top = `calc(50% + ${overlayOffset}px)`;
        content.style.opacity = contentOpacity > 0 ? contentOpacity : 0;

        if (currentScroll >= scrollThreshold) {
            overlay.style.display = 'none';
        } else {
            overlay.style.display = 'block';
        }
    }

    window.addEventListener('scroll', handleScroll);
});
