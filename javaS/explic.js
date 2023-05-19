var btnE = document.getElementsByClassName("blocExpl");

var overlay = document.getElementById('overlay');
var btnClose = document.getElementById('btnClose');
var popup = document.getElementById('popup');
var recap1 = document.getElementById('recap1');
var recap2 = document.getElementById('recap2');
var recap3 = document.getElementById('recap3');
var recap4= document.getElementById('recap4');
var recap5 = document.getElementById('recap5');
var recap6 = document.getElementById('recap6');
var recap7 = document.getElementById('recap7');

var recaps = [recap1, recap2, recap3, recap4, recap5, recap6, recap7];
var fromQuiz = false;

for (var i = 0; i < btnE.length; i++) {
  btnE[i].addEventListener('click', function (event) {
    var explicValue = event.currentTarget.getAttribute('data-explic');
    var from = new URLSearchParams(window.location.search).get('from');
    var popupText = document.getElementById('popupText');

    recaps.forEach(function (recap) {
      recap.style.display = 'none';
    });

    overlay.style.display = 'block';
    recaps[explicValue - 1].style.display = 'block';
    updateBackToQuizButton(from);
  });
}

btnClose.addEventListener('click', closePopup);
function closePopup() {
  overlay.style.display = 'none';
  fromQuiz = false;
}

function showPopupBasedOnQueryParam() {
  var searchParams = new URLSearchParams(window.location.search);
  var explicToShow = searchParams.get('explic');
  
  if (explicToShow) {
    var btn = document.querySelector('.blocExpl[data-explic="' + explicToShow + '"]');
    if (btn) {
      btn.click();
    }
  }
}

function updateBackToQuizButton(from) {
  var backToQuizButton = document.getElementById('backToQuiz');
  if (fromQuiz) {
    backToQuizButton.style.display = 'inline-block';
    backToQuizButton.addEventListener('click', function () {
      window.location.href = from + '.html';
    });
  } else {
    backToQuizButton.style.display = 'none';
  }
}

function showBackToQuizButton() {
  var searchParams = new URLSearchParams(window.location.search);
  var from = searchParams.get('from');
  fromQuiz = from !== null;
  updateBackToQuizButton(from);
}

window.addEventListener('load', showPopupBasedOnQueryParam);
window.addEventListener('load', showBackToQuizButton);



overlay.addEventListener('click', function(event) {
  if (event.target == overlay) {
    closePopup();
  }
});