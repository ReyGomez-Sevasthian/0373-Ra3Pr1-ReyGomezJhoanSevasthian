// Array per guardar tots els alumnes que s'afegeixin
var alumnes = [];

// Quan l'usuari envia el formulari, cridem afegirAlumne()
var formulari = document.getElementById('formulariAlumne');
formulari.addEventListener('submit', function(event) {
  event.preventDefault();
  afegirAlumne();
});

// Guardem tots els elements HTML que necessitarem en variables
var cosTaula    = document.getElementById('cosTaula');
var missatge    = document.getElementById('missatge');
var campNom     = document.getElementById('nom');
var campExamen  = document.getElementById('examen');
var campPractiques = document.getElementById('practiques');
var campActitud = document.getElementById('actitud');

// Botons
document.getElementById('ordenarAsc').addEventListener('click', function() {
  ordenarAlumnes('asc');
});
document.getElementById('ordenarDesc').addEventListener('click', function() {
  ordenarAlumnes('desc');
});