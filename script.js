document.addEventListener('DOMContentLoaded', function() {
    const overlay = document.getElementById('overlay');
    const landingPage = document.getElementById('landing-page');
    let previousScroll = 0;

    function handleScroll() {
        const currentScroll = window.pageYOffset;
        const scrollDelta = currentScroll - previousScroll;

        if (scrollDelta > 0) {
            overlay.style.opacity = 1 - (currentScroll / (document.documentElement.scrollHeight - window.innerHeight));
        }

        previousScroll = currentScroll;
    }

    window.addEventListener('scroll', handleScroll);
});
