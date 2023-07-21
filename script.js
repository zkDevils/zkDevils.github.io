window.addEventListener('load', function() {
    var videoElement = document.getElementById('fullscreen-video');
    videoElement.addEventListener('ended', function() {
      // Video has ended, fade out or dissolve the video
      videoElement.style.opacity = '0'; // Example: fading out
      // You can add other effects/animations here if desired
  })})   