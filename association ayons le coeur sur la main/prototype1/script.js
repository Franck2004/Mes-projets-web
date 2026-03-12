// Mobile menu toggles and small helpers
document.addEventListener('DOMContentLoaded', function() {
  function setupBtn(btnId, menuId) {
    var btn = document.getElementById(btnId);
    var menu = document.getElementById(menuId);
    if (!btn || !menu) return;
    btn.addEventListener('click', function() {
      if (menu.classList.contains('hidden')) {
        menu.classList.remove('hidden');
        menu.classList.add('block');
      } else {
        menu.classList.add('hidden');
        menu.classList.remove('block');
      }
    });
  }
  setupBtn('menu-btn','mobile-menu');
  setupBtn('menu-btn-2','mobile-menu-2');
  setupBtn('menu-btn-3','mobile-menu-3');
  setupBtn('menu-btn-4','mobile-menu-4');
  setupBtn('menu-btn-5','mobile-menu-5');
});

function copyText(text) {
  if (!navigator.clipboard) {
    // fallback
    var input = document.createElement('input');
    input.value = text;
    document.body.appendChild(input);
    input.select();
    document.execCommand('copy');
    document.body.removeChild(input);
    alert('Copié : ' + text);
    return;
  }
  navigator.clipboard.writeText(text).then(function() {
    alert('Copié : ' + text);
  }, function(err) {
    alert('Impossible de copier');
  });
}
