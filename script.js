document.addEventListener('DOMContentLoaded', function() {
    const overlay = document.getElementById('overlay');
    const content = document.getElementById('content');
    const landingPage = document.getElementById('landing-page');
    let previousScroll = 0;

    function handleScroll() {
        const currentScroll = window.pageYOffset;
        const scrollDelta = currentScroll - previousScroll;
        const scrollThreshold = 300; // Adjust this value to control the scroll threshold for the animation

        if (currentScroll > scrollThreshold) {
            overlay.style.transform = `scale(${1 - (scrollThreshold / currentScroll)})`;
            content.style.opacity = 0;
        } else {
            overlay.style.transform = 'scale(1)';
            content.style.opacity = 1;
        }

        previousScroll = currentScroll;
    }

    window.addEventListener('scroll', handleScroll);
});
