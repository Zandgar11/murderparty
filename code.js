document.getElementById('code-form').addEventListener('submit', function(event) {
  event.preventDefault();
  var code = document.getElementById('code').value;
  var correctCode = 'SECRET123'; // Remplacez par le code correct

  if (code === correctCode) {
    document.getElementById('indice').style.display = 'block';
  } else {
    alert('Code incorrect. Veuillez réessayer.');
  }
});
