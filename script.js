document.addEventListener('DOMContentLoaded', function() {
    const overlay = document.getElementById('overlay');
    const landingPage = document.getElementById('landing-page');
    const overlayHeight = overlay.offsetHeight;
    const landingPageHeight = landingPage.offsetHeight;
    let previousScroll = 0;

    function handleScroll() {
        const currentScroll = window.pageYOffset;
        const scrollDelta = currentScroll - previousScroll;
        const opacity = 1 - (currentScroll / (landingPageHeight - overlayHeight));

        overlay.style.opacity = opacity > 0 ? opacity : 0;

        previousScroll = currentScroll;
    }

    window.addEventListener('scroll', handleScroll);
});