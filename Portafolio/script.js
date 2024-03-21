document.getElementById('contactForm').addEventListener('submit', function(event) {
    var nombre = document.getElementById('nombre').value.trim();
    var email = document.getElementById('email').value.trim();
    var mensaje = document.getElementById('mensaje').value.trim();
    
    if (nombre === '' || email === '' || mensaje === '') {
        event.preventDefault(); // Evitar el envío del formulario
        
        alert('Por favor, complete todos los campos del formulario.');
    } else {
        event.preventDefault(); // Evitar el envío del formulario
        
        var mensajeAlerta = 'Nombre: ' + nombre + '\nCorreo Electrónico: ' + email + '\nMensaje: ' + mensaje;
        alert(mensajeAlerta);
    }
});


