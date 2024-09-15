<script>
// Mock user data for login and registration (only used if no backend is available)
    const users = [];

    // Helper function to handle alerts and redirection
    function showAlertAndRedirect(message, redirectUrl) {
        alert(message);
    if (redirectUrl) {
        window.location.href = redirectUrl;
    }
}

    // Registration logic
    const registerForm = document.getElementById('register-form');
    if (registerForm) {
        registerForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const name = document.getElementById('register-name').value;
            const email = document.getElementById('register-email').value;
            const password = document.getElementById('register-password').value;

            // Basic form validation
            if (!name || !email || !password) {
                alert('All fields are required.');
                return;
            }

            // Push to mock users array if backend is not being used
            if (!window.useBackend) {
                users.push({ name, email, password });
                showAlertAndRedirect('Registration successful! Please login.', 'login.html');
            } else {
                // Use backend (PHP) for registration
                const response = await fetch('register.php', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                    body: new URLSearchParams({ name, email, password })
                });

                const result = await response.json();
                if (result.success) {
                    showAlertAndRedirect('Registration successful! Please login.', 'login.html');
                } else {
                    alert(result.message);
                }
            }
        });
}

    // Login logic
    const loginForm = document.getElementById('login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const email = document.getElementById('login-email').value;
            const password = document.getElementById('login-password').value;

            // Basic validation
            if (!email || !password) {
                alert('Both email and password are required.');
                return;
            }

            // Check with mock data if backend is not used
            if (!window.useBackend) {
                const user = users.find(u => u.email === email && u.password === password);
                if (user) {
                    showAlertAndRedirect('Login successful!', 'dashboard.html');
                } else {
                    alert('Invalid credentials!');
                }
            } else {
                // Use backend (PHP) for login
                const response = await fetch('login.php', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                    body: new URLSearchParams({ email, password })
                });

                const result = await response.json();
                if (result.success) {
                    showAlertAndRedirect('Login successful!', 'dashboard.html');
                } else {
                    alert(result.message);
                }
            }
        });
}

    // Logout logic
    const logoutBtn = document.getElementById('logout-btn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', () => {
            showAlertAndRedirect('Logged out!', 'login.html');
        });
}
</script>
