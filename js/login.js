const validEmail = "admin@correo.com";
const validPassword = "123456";

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevenir el envío del formulario
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const status = document.getElementById('loginStatus');

    if (email === validEmail && password === validPassword) {
        status.textContent = "Inicio de sesión exitoso!";
        status.style.color = "green";
        // Redirigir a otra página después de dos segundos
        setTimeout(() => {
            window.location.href = "layoutInicioAdmin.html";
        }, 1000);
    } else {
        status.textContent = "Usuario o contraseña incorrectos.";
        status.style.color = "red";
    }
});

function toggleSidebar() {
    const sidebar = document.getElementById("sidebar");
    const content = document.getElementById("main-content");
    sidebar.classList.toggle("expanded");
 }