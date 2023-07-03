document.addEventListener('DOMContentLoaded', function() {
    const overlay = document.getElementById('overlay');
    const landingPage = document.getElementById('landing-page');

    window.addEventListener('scroll', function() {
        const scrollPercentage = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);

        if (scrollPercentage > 0.1) {
            overlay.classList.add('hide-overlay');
            landingPage.classList.add('expand-landing-page');
        } else {
            overlay.classList.remove('hide-overlay');
            landingPage.classList.remove('expand-landing-page');
        }
    });
});