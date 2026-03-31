// Array per guardar tots els alumnes que s'afegeixin
var alumnes = [];

// Quan l'usuari envia el formulari, cridem afegirAlumne()
// preventDefault() evita que la pàgina es recarregui (comportament per defecte d'un form)
var formulari = document.getElementById('formulariAlumne');
formulari.addEventListener('submit', function(event) {
  event.preventDefault();
  afegirAlumne();
});