document.addEventListener("DOMContentLoaded", function() {
  // Configuration de l'Intersection Observer
  const lazyImageObserver = new IntersectionObserver(function(entries, observer) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        const lazyImage = entry.target;
        lazyImage.src = lazyImage.dataset.src;
        lazyImage.classList.remove("lazy");
        observer.unobserve(lazyImage);
      }
    });
  }, {
    rootMargin: "200px" // Charge 200px avant d'arriver à l'élément
  });

  // Observer toutes les images lazy
  const lazyImages = document.querySelectorAll("img.lazy");
  lazyImages.forEach(function(lazyImage) {
    lazyImageObserver.observe(lazyImage);
  });

  // Fallback pour les navigateurs sans IntersectionObserver
  if (!('IntersectionObserver' in window)) {
    const lazyImages = document.querySelectorAll("img.lazy");
    lazyImages.forEach(function(lazyImage) {
      lazyImage.src = lazyImage.dataset.src;
    });
  }
});