window.addEventListener('scroll', function() {
  var scrollPosition = window.scrollY;
  var background = document.getElementById('background');
  if (scrollPosition > 0) {
    background.classList.add('fixed');
  } else {
    background.classList.remove('fixed');
  }
});

    document.addEventListener('DOMContentLoaded', function() {
        const esqueciSenhaLink = document.getElementById('esqueciSenha');
        const mensagemDiv = document.getElementById('mensagem');
        const okButton = document.getElementById('okButton');

        if (esqueciSenhaLink && mensagemDiv && okButton) {
            esqueciSenhaLink.addEventListener('click', function(event) {
                event.preventDefault();
                mensagemDiv.style.display = 'block';
            });

            okButton.addEventListener('click', function() {
                mensagemDiv.style.display = 'none';
            });
        }
    });
