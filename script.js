// Array per guardar tots els alumnes que s'afegeixin
var alumnes = [];

// Quan l'usuari envia el formulari, cridem afegirAlumne()
var formulari = document.getElementById('formulariAlumne');

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

function validarFormulari(event) {
  event.preventDefault();

  var nom        = campNom.value.trim();
  var examen     = campExamen.value;
  var practiques = campPractiques.value;
  var actitud    = campActitud.value;

  // Comprovem el nom
  if (nom === '') {
    mostrarMissatge('El nom de l\'alumne és obligatori.', 'error');
    return;
  }

  // Comprovem que els camps de notes no estiguin buits
  if (examen === '' || practiques === '' || actitud === '') {
    mostrarMissatge('Totes les notes són obligatòries.', 'error');
    return;
  }

  // Comprovem que les notes siguin numèriques i estiguin entre 0 i 10
  if (isNaN(examen) || Number(examen) < 0 || Number(examen) > 10) {
    mostrarMissatge('La nota de l\'examen ha de ser un número entre 0 i 10.', 'error');
    return;
  }

  if (isNaN(practiques) || Number(practiques) < 0 || Number(practiques) > 10) {
    mostrarMissatge('La nota de pràctiques ha de ser un número entre 0 i 10.', 'error');
    return;
  }

  if (isNaN(actitud) || Number(actitud) < 0 || Number(actitud) > 10) {
    mostrarMissatge('La nota d\'actitud ha de ser un número entre 0 i 10.', 'error');
    return;
  }

  // Si tot és correcte, afegim l'alumne
  afegirAlumne(nom, Number(examen), Number(practiques), Number(actitud));
}

// Canviem l'event del formulari per cridar validarFormulari()
formulari.addEventListener('submit', validarFormulari);

function mostrarMissatge(text, tipus) {
  missatge.textContent = text;
  missatge.className = tipus; // 'error' o 'correcte'
}

function calcularNotaFinal(examen, practiques, actitud) {
  // Examen 60%, Pràctiques 30%, Actitud 10%
  return (examen * 0.6) + (practiques * 0.3) + (actitud * 0.1);
}