document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const togglePassword = document.getElementById('togglePassword');
    const passwordInput = document.getElementById('password');

    // Toggle password visibility
    togglePassword.addEventListener('click', () => {
        const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
        passwordInput.setAttribute('type', type);
        togglePassword.classList.toggle('fa-eye');
        togglePassword.classList.toggle('fa-eye-slash');
    });

    // Handle login
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const agentId = document.getElementById('agentId').value;
        const password = document.getElementById('password').value;

        // Find user in DB
        const foundUser = USER_DB.find(u => u.id === agentId);

        if (password === '1234' && foundUser) {
            // Success - save session and redirect
            const userData = {
                ...foundUser,
                loginTime: new Date().toISOString()
            };
            
            localStorage.setItem('sdv_user_session', JSON.stringify(userData));
            
            // Success feedback
            const btn = loginForm.querySelector('.btn-login');
            btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Authenticating...';
            btn.style.backgroundColor = '#28a745';

            setTimeout(() => {
                window.location.href = '../1. dashboard/index.html';
            }, 1000);
            return;
        }

        // Failure
        alert('Access Denied: Invalid Agent ID or Password.');
        passwordInput.value = '';
    });
});
