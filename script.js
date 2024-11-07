function validateForm() {
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    
    let isValid = true;

    // Limpiar mensajes de error
    document.getElementById('emailError').textContent = '';
    document.getElementById('passwordError').textContent = '';

    // Validar email
    if (!validateEmail(email)) {
        document.getElementById('emailError').textContent = 'Por favor, introduce un email válido.';
        isValid = false;
    }

    // Validar contraseña
    if (password.length === 0) {
        document.getElementById('passwordError').textContent = 'La contraseña no puede estar vacía.';
        isValid = false;
    }

    if (isValid) {
        alert("Formulario enviado con éxito!");
        // Aquí podrías agregar la lógica para enviar el formulario
        // Por ejemplo, hacer una llamada a la API del servidor.
        document.getElementById('loginForm').reset(); // Reiniciar el formulario
    }
}

function validateEmail(email) {
   const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Expresión regular básica para validar el email
   return re.test(String(email).toLowerCase());
}