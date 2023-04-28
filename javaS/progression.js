// récupère l'état de la barre de progression pour la page actuelle à partir du localStorage
var state = localStorage.getItem(window.location.pathname);

// si l'état existe, applique les styles appropriés à chaque case de la barre de progression
if (state) {
    var cells = document.querySelectorAll('.progress-bar-cell');
    for (var i = 0; i < cells.length; i++) {
        if (state.charAt(i) === '1') {
            cells[i].style.backgroundColor = 'green';
        } else if (state.charAt(i) === '0') {
            cells[i].style.backgroundColor = 'red';
        }
    }
}

// enregistre l'état de la barre de progression dans le localStorage lorsque l'utilisateur clique sur une réponse
document.addEventListener('click', function(event) {
    if (event.target.classList.contains('btnVF')) {
        var isCorrect = event.target.getAttribute('data-correct') === 'true';
        var index = Array.prototype.indexOf.call(event.target.parentNode.children, event.target);
        var newState = state ? state.substr(0, index) + (isCorrect ? '1' : '0') + state.substr(index + 1) : '0'.repeat(cells.length);
        localStorage.setItem(window.location.pathname, newState);
    }
});
