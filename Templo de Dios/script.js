function mostrarTema(id) {
    var temas = document.querySelectorAll('.tema');
    temas.forEach(function(tema) {
        tema.style.display = 'none';
    });
    document.getElementById(id).style.display = 'block';
}
