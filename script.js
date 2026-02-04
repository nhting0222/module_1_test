// Navigation functionality
document.addEventListener('DOMContentLoaded', function() {
    // Get all navigation items
    const navItems = document.querySelectorAll('.nav-item');
    const pages = document.querySelectorAll('.page');

    // Navigation click handler
    navItems.forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();

            // Remove active class from all nav items
            navItems.forEach(nav => nav.classList.remove('active'));

            // Add active class to clicked item
            this.classList.add('active');

            // Get target page
            const targetPage = this.getAttribute('data-page');

            // Hide all pages
            pages.forEach(page => page.classList.remove('active'));

            // Show target page
            document.getElementById(targetPage).classList.add('active');
        });
    });

    // Logout button
    const logoutBtn = document.getElementById('logoutBtn');
    logoutBtn.addEventListener('click', function() {
        if (confirm('로그아웃 하시겠습니까?')) {
            alert('로그아웃 되었습니다.');
            // Here you would typically redirect to login page
            // window.location.href = '/login';
        }
    });

    // Add User button
    const addUserBtn = document.getElementById('addUserBtn');
    if (addUserBtn) {
        addUserBtn.addEventListener('click', function() {
            alert('사용자 추가 기능 (구현 예정)');
            // Here you would open a modal or redirect to add user form
        });
    }

    // Add Product button
    const addProductBtn = document.getElementById('addProductBtn');
    if (addProductBtn) {
        addProductBtn.addEventListener('click', function() {
            alert('제품 추가 기능 (구현 예정)');
            // Here you would open a modal or redirect to add product form
        });
    }

    // Search functionality
    const searchUser = document.getElementById('searchUser');
    if (searchUser) {
        searchUser.addEventListener('input', function(e) {
            const searchTerm = e.target.value.toLowerCase();
            const tableRows = document.querySelectorAll('#userTableBody tr');

            tableRows.forEach(row => {
                const text = row.textContent.toLowerCase();
                if (text.includes(searchTerm)) {
                    row.style.display = '';
                } else {
                    row.style.display = 'none';
                }
            });
        });
    }

    // Edit and Delete buttons for users
    const editButtons = document.querySelectorAll('#userTableBody .btn-small:not(.btn-danger)');
    const deleteButtons = document.querySelectorAll('#userTableBody .btn-small.btn-danger');

    editButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            const row = this.closest('tr');
            const name = row.cells[1].textContent;
            alert(`${name} 사용자 수정 (구현 예정)`);
        });
    });

    deleteButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            const row = this.closest('tr');
            const name = row.cells[1].textContent;
            if (confirm(`${name} 사용자를 삭제하시겠습니까?`)) {
                row.remove();
                alert('사용자가 삭제되었습니다.');
            }
        });
    });

    // Product edit buttons
    const productEditButtons = document.querySelectorAll('.product-card .btn-small');
    productEditButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            const productCard = this.closest('.product-card');
            const productName = productCard.querySelector('h3').textContent;
            alert(`${productName} 제품 편집 (구현 예정)`);
        });
    });

    // Settings save button
    const settingsSaveBtn = document.querySelector('.settings-section .btn-primary');
    if (settingsSaveBtn) {
        settingsSaveBtn.addEventListener('click', function() {
            alert('설정이 저장되었습니다.');
        });
    }

    // Simulate real-time updates for dashboard stats
    function updateStats() {
        const totalUsers = document.getElementById('totalUsers');
        const newOrders = document.getElementById('newOrders');
        const activeSessions = document.getElementById('activeSessions');

        if (totalUsers) {
            setInterval(() => {
                const currentValue = parseInt(totalUsers.textContent.replace(',', ''));
                const newValue = currentValue + Math.floor(Math.random() * 3);
                totalUsers.textContent = newValue.toLocaleString();
            }, 10000);
        }

        if (newOrders) {
            setInterval(() => {
                const currentValue = parseInt(newOrders.textContent);
                const newValue = currentValue + Math.floor(Math.random() * 2);
                newOrders.textContent = newValue;
            }, 15000);
        }

        if (activeSessions) {
            setInterval(() => {
                const currentValue = parseInt(activeSessions.textContent);
                const change = Math.floor(Math.random() * 5) - 2;
                const newValue = Math.max(0, currentValue + change);
                activeSessions.textContent = newValue;
            }, 8000);
        }
    }

    updateStats();

    // Add new activity to activity list
    function addActivity(text) {
        const activityList = document.getElementById('activityList');
        if (activityList) {
            const newActivity = document.createElement('div');
            newActivity.className = 'activity-item';
            newActivity.innerHTML = `
                <span class="activity-time">방금 전</span>
                <span class="activity-text">${text}</span>
            `;
            activityList.insertBefore(newActivity, activityList.firstChild);

            // Keep only last 5 activities
            if (activityList.children.length > 5) {
                activityList.removeChild(activityList.lastChild);
            }
        }
    }

    // Simulate random activities
    const activities = [
        '새로운 주문이 접수되었습니다.',
        '사용자가 로그인했습니다.',
        '제품 정보가 업데이트되었습니다.',
        '관리자가 설정을 변경했습니다.',
        '새로운 리뷰가 등록되었습니다.'
    ];

    setInterval(() => {
        const randomActivity = activities[Math.floor(Math.random() * activities.length)];
        addActivity(randomActivity);
    }, 20000);

    console.log('Admin Dashboard initialized successfully!');
});
