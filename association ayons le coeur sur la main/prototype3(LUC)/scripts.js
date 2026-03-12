// scripts.js - menu mobile universel + copier numéro

document.addEventListener('DOMContentLoaded', function() {
  // Trouver tous les boutons menu
  const toggles = document.querySelectorAll('.nav-toggle');

  toggles.forEach(toggle => {
    toggle.addEventListener('click', function() {
      // Trouver le menu correspondant (même numéro que le bouton)
      const menuId = toggle.id.replace('nav-toggle', 'mobile-menu');
      const menu = document.getElementById(menuId);

      if (menu) {
        if (menu.style.display === 'block') {
          menu.style.display = 'none';
        } else {
          menu.style.display = 'block';
        }
      }
    });
  });
});

// Copier numéro au clic
function copyText(text) {
  if (!navigator.clipboard) {
    const input = document.createElement('input'); 
    input.value = text;
    document.body.appendChild(input);
    input.select();
    try {
      document.execCommand('copy');
      alert('Copié : ' + text);
    } catch (e) {
      alert('Impossible de copier');
    }
    document.body.removeChild(input);
    return;
  }
  navigator.clipboard.writeText(text).then(function() {
    alert('Copié : ' + text);
  }, function() {
    alert('Impossible de copier');
  });
}
