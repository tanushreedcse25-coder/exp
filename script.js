
function showPage(pageId) {
    let pages = document.querySelectorAll('.page');

    pages.forEach(function(page) {
        page.classList.remove('active-page');
    });
    let target = document.getElementById(pageId);
    if (target) {
        target.classList.add('active-page');
    }
}
function filterMenu(type) {
    let items = document.querySelectorAll('.menu-item');
    items.forEach(function(item) {
        if (type === 'all' || item.classList.contains(type)) {
            item.style.display = "block";
        } else {
            item.style.display = "none";
        }
    });
}

// Booking
function bookTable() {
    alert("Table Booked Successfully!");
    return false;
}
