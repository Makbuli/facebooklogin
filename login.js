document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const createAccountBtn = document.querySelector('.create-account');
    const notification = document.getElementById('notification');
    
    // Handle login form submission
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        
        // Simple validation
        if (!email || !password) {
            showNotification('Please fill in all fields');
            return;
        }
        
        // Simulate login process
        showNotification('Logging in...');
        
        // Simulate API call delay
        setTimeout(() => {
            if (email.includes('@') && password.length >= 6) {
                showNotification('Login successful! Redirecting...');
                // In a real app, you would redirect to the dashboard
                // window.location.href = 'dashboard.html';
            } else {
                showNotification('Invalid email or password');
            }
        }, 1500);
    });
    
    // Create account button
    createAccountBtn.addEventListener('click', function() {
        showNotification('Redirecting to sign up page...');
        // In a real app, you would redirect to the sign up page
        // window.location.href = 'signup.html';
    });
    
    // Forgot password link
    document.querySelector('.forgot-password').addEventListener('click', function(e) {
        e.preventDefault();
        showNotification('Redirecting to password recovery...');
        // window.location.href = 'recover.html';
    });
    
    // Show notification function
    function showNotification(message) {
        notification.textContent = message;
        notification.classList.add('show');
        
        setTimeout(() => {
            notification.classList.remove('show');
        }, 3000);
    }
    
    // Simulate loading (just for demo)
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 300);
    
    // Initially hide the body to prevent flash of unstyled content
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.3s ease';
});