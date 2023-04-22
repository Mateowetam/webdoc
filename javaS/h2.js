// Récupération du paramètre de l'URL
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const personnage = urlParams.get('personnage');

// Affichage de l'image correspondante
const imageS = document.getElementById('image-personnage');
switch (personnage) {
  case 'p1':
    imageS.src = '../img/p1.png';
    imageS.alt = 'perso1';
    break;
  case 'p2':
    imageS.src = '../img/p2.png';
    imageS.alt = 'perso2';
    break;
}

var btnVrai = document.getElementById('btnV');
var btnFaux = document.getElementById('btnF');

var overlay = document.getElementById('overlay');
var btnClose = document.getElementById('btnClose');
var popupText = document.getElementById('popupText');

btnVrai.addEventListener('click', function() {
  openModal("Et oui c'est vrai !");
});

btnFaux.addEventListener('click', function() {
  openModal("Hélas non c'est bien vrai");
});
btnClose.addEventListener('click', closePopup);

function openModal(text){
  popupText.innerHTML = text;
  overlay.style.display = 'block';
}

function closePopup(){
  overlay.style.display = 'none';
}