document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.querySelector('.search-item');
    const searchIcon = document.querySelector('.icon');

    // Add click event listener to search input
    searchInput.addEventListener('click', function() {
        // Hide search icon
        searchIcon.style.display = 'none';
    });
});

