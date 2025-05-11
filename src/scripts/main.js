import "./hamburger.js";

document.addEventListener('DOMContentLoaded', () => {
  const images = document.querySelectorAll('img');

  if (images.length === 0) {
    console.warn('No images found on the page.');
    return;
  }

  images.forEach(image => {
    image.addEventListener('click', () => {
      if (!image.src) {
        console.warn('Image source is missing.');
        return;
      }

      const fullscreenDiv = document.createElement('div');
      fullscreenDiv.classList.add('fullscreen');

      const fullscreenImage = document.createElement('img');
      fullscreenImage.src = image.src;

      fullscreenDiv.appendChild(fullscreenImage);
      document.body.appendChild(fullscreenDiv);

      fullscreenDiv.addEventListener('click', () => {
        document.body.removeChild(fullscreenDiv);
      });
    });
  });
});