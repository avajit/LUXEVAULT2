
// Toggle the sidebar menu
function toggleMenu() {
    document.getElementById("menu").classList.toggle("hidden");
}

// Toggle product submenu
function toggleProductSubmenu() {
    document.getElementById("productSubmenu").classList.toggle("hidden");
}

// Close the sidebar when clicking outside of it
document.addEventListener("click", function(event) {
    var menu = document.getElementById("menu");
    var menuButton = document.querySelector("button[onclick='toggleMenu()']");
    if (!menu.contains(event.target) && !menuButton.contains(event.target)) {
        menu.classList.add("hidden");
    }
});

// Toggle search sidebar visibility
function toggleSearchSidebar() {
    document.getElementById("searchSidebar").classList.toggle("translate-x-full");
}

// Close sidebar if clicked outside
document.addEventListener("click", function(event) {
    var sidebar = document.getElementById("searchSidebar");
    var searchButton = document.querySelector("button[onclick='toggleSearchSidebar()']");
    
    // If the click is outside the sidebar and search button, close the sidebar
    if (!sidebar.contains(event.target) && !searchButton.contains(event.target)) {
        sidebar.classList.add("translate-x-full");
    }
});

    // Function to update the cart count
    function updateCartCount() {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        const cartCount = document.getElementById('cartCount');
        cartCount.innerText = cart.length > 0 ? cart.length : ''; // Show count or hide if 0
    }

    // Call the function to update the cart count on page load
    window.onload = updateCartCount;

    // JavaScript to toggle dropdown menu 
   
        document.querySelector('.dropdown-toggle').addEventListener('click', function () {
            var dropdown = document.querySelector('.language-dropdown-menu');
            dropdown.classList.toggle('hidden');
        });
    
        // Close dropdown when clicking outside
        document.addEventListener('click', function(event) {
            var dropdown = document.querySelector('.language-dropdown-menu');
            if (!dropdown.contains(event.target) && !event.target.closest('.dropdown-toggle')) {
                dropdown.classList.add('hidden');
            }
        });
        // Toggle the heart popup visibility
        function toggleHeartPopup() {
            document.getElementById("heartPopup").classList.toggle("hidden");
        }
        // <!-- JavaScript for User Popup -->
    
            // Toggle the user popup visibility
            function toggleUserPopup() {
                document.getElementById("userPopup").classList.toggle("hidden");
            }

          
            