var btnE = document.getElementsByClassName("bloc lien");

var overlay = document.getElementById('overlay');
var btnClose = document.getElementById('btnClose');
var popup = document.getElementById('popup');

var fromQuizz = false;


for (var i = 0; i < btnE.length; i++) {
  btnE[i].addEventListener('click', function (event) {
    var explicValue = event.target.getAttribute('data-explic');
    var from = new URLSearchParams(window.location.search).get('from');
    var popupText = document.getElementById('popupText');

    if (explicValue === "1") {
      overlay.style.display = 'block';
      changeBoxShadow(popup, '#c25631');
      popupText.innerHTML = "Texte pour 1";
      updateBackToQuizzButton(from);
    } else if (explicValue === "2") {
      overlay.style.display = 'block';
      popupText.innerHTML = "Texte pour 2";
      updateBackToQuizzButton(from);
    }
  });
}




btnClose.addEventListener('click', closePopup);
function closePopup() {
  overlay.style.display = 'none';
  fromQuizz = false;
}

function changeBoxShadow(element, color) {
  element.style.setProperty('box-shadow', '10px 8px 0 ' + color + ', 0 0 0 ' + color);
}

function showPopupBasedOnQueryParam() {
  var searchParams = new URLSearchParams(window.location.search);
  var explicToShow = searchParams.get('explic');
  
  if (explicToShow) {
    var btn = document.querySelector('.bloc.lien[data-explic="' + explicToShow + '"]');
    if (btn) {
      btn.click();
    }
  }
}

function updateBackToQuizzButton(from) {
  var backToQuizzButton = document.getElementById('backToQuizz');
  if (fromQuizz) {
    backToQuizzButton.style.display = 'inline-block';
    backToQuizzButton.addEventListener('click', function () {
      window.location.href = from + '.html';
    });
  } else {
    backToQuizzButton.style.display = 'none';
  }
}

function showBackToQuizzButton() {
  var searchParams = new URLSearchParams(window.location.search);
  var from = searchParams.get('from');
  fromQuizz = from !== null;
  updateBackToQuizzButton(from);
}

window.addEventListener('load', showPopupBasedOnQueryParam);
window.addEventListener('load', showBackToQuizzButton);
