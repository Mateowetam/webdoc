// // Récupération du paramètre de l'URL
// const queryString = window.location.search;
// const urlParams = new URLSearchParams(queryString);
// const personnage = urlParams.get('personnage');

// // Affichage de l'image correspondante
// const imageS = document.getElementById('image-personnage');
// switch (personnage) {
//   case 'p1':
//     imageS.src = '../img/p1.png';
//     imageS.alt = 'perso1';
//     break;
//   case 'p2':
//     imageS.src = '../img/p2.png';
//     imageS.alt = 'perso2';
//     break;
// }



var btnVrai = document.getElementById('btnV');
var btnFaux = document.getElementById('btnF');

var overlay = document.getElementById('overlay');
var btnClose = document.getElementById('btnClose');
var popupText = document.getElementById('popupText');

btnVrai.addEventListener('click', function() {
  openModal("Et non c'est faux");
});

btnFaux.addEventListener('click', function() {
  openModal("En effet, c'est la bonne réponse !");
});
btnClose.addEventListener('click', closePopup);

function openModal(text){
  popupText.innerHTML = text;
  overlay.style.display = 'block';
}

function closePopup(){
  overlay.style.display = 'none';
}

// récupère la valeur du paramètre "progress" depuis l'URL
var urlParams = new URLSearchParams(window.location.search);
var progress = urlParams.get('progress');

// si la valeur existe et qu'elle contient au moins une case
if (progress && progress.length >= 1) {
  var firstCell = document.querySelector('.progress-bar-cell');
  if (progress.charAt(0) === '1') {
    firstCell.style.backgroundColor = 'green';
  } else if (progress.charAt(0) === '0') {
    firstCell.style.backgroundColor = 'red';
  }
}
