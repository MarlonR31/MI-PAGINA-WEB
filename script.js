document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que el formulario se envíe

    const email = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === 'Marlon' && password === 'Liliana') {
        document.getElementById('message').innerText = 'Inicio de sesión exitoso!';
        window.location.href = "Portalmarlon.html";
    } else {
        document.getElementById('message').innerText = 'Usuario o contraseña incorrectos.';
        document.getElementById('message').style.color = 'red';
    }
});