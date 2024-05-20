document.getElementById('code-form').addEventListener('submit', function(event) {
  event.preventDefault();
  var code = document.getElementById('code').value;

  // Cache tous les indices au départ
  var indices = document.querySelectorAll('.indice');
  indices.forEach(function(indice) {
    indice.style.display = 'none';
  });

  // Vérifie le code et affiche l'indice correspondant
  var codesIndices = {
    'SECRET123': 'indice1',
    'MYSTERY456': 'indice2',
    'CLUE789': 'indice3'
  };

  if (codesIndices[code]) {
    document.getElementById(codesIndices[code]).style.display = 'block';
  } else {
    alert('Code incorrect. Veuillez réessayer.');
  }
});
