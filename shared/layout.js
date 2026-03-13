document.addEventListener('DOMContentLoaded', () => {
    // 1. Session & Permission Check
    const sessionData = localStorage.getItem('sdv_user_session');
    if (!sessionData) {
        window.location.href = '../0. auth/login.html';
        return;
    }

    const user = JSON.parse(sessionData);
    const isAdmin = user.role === 'Admin';

    // 2. Render User Info
    renderUserInfo(user);

    // 3. Dynamic Menu Control (Admin only items)
    if (!isAdmin) {
        const adminElements = document.querySelectorAll('.admin-only');
        adminElements.forEach(el => el.remove());
    }

    // 4. Tab Navigation Logic
    initNavigation();

    // 5. Logout Logic
    document.getElementById('logoutBtn').addEventListener('click', () => {
        localStorage.removeItem('sdv_user_session');
        window.location.href = '../0. auth/login.html';
    });
});

function renderUserInfo(user) {
    document.getElementById('userName').textContent = user.id;
    document.getElementById('userRole').textContent = user.role;
    document.getElementById('avatarInitial').textContent = user.id.charAt(0).toUpperCase();
    
    const roleBadge = isAdminBadge(user.role);
    document.getElementById('userRole').insertAdjacentHTML('afterend', roleBadge);
}

function isAdminBadge(role) {
    return role === 'Admin' 
        ? ' <span class="badge badge-admin">ADMIN</span>' 
        : ' <span class="badge badge-user">AGENT</span>';
}

function initNavigation() {
    const navItems = document.querySelectorAll('.nav-item');
    const sections = document.querySelectorAll('.view-section');
    const topTitle = document.getElementById('viewTitle');

    navItems.forEach(item => {
        item.addEventListener('click', (e) => {
            const targetId = item.getAttribute('data-view');
            if (!targetId) return;

            e.preventDefault();

            // Update active state in sidebar
            navItems.forEach(nav => nav.classList.remove('active'));
            item.classList.add('active');

            // Update visible section
            sections.forEach(section => section.classList.remove('active'));
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.classList.add('active');
            }

            // Custom Initialization for specific views
            if (targetId === 'view-onboarding') {
                if (typeof initOnboardingPortal === 'function') {
                    initOnboardingPortal();
                }
            }

            // Update Header Title
            topTitle.textContent = item.textContent.trim();
        });
    });
}
