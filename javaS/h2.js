// Récupération du paramètre de l'URL
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const personnage = urlParams.get('personnage');

// Affichage de l'image correspondante
const image = document.getElementById('image-personnage');
switch (personnage) {
  case 'p1':
    image.src = '../img/p1.png';
    image.alt = 'perso1';
    break;
  case 'p2':
    image.src = '../img/p2.jpg';
    image.alt = 'perso2';
    break;
  default:
    console.error('Personnage inconnu');
}

