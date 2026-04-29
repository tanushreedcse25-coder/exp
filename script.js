function showPage(pageId) {
    console.log("Clicked:", pageId);

    let pages = document.querySelectorAll('.page');

    pages.forEach(page => {
        page.classList.remove('active-page');
    });
    let targetPage = document.getElementById(pageId);
    if (targetPage) {
        targetPage.classList.add('active-page');
    }
}

function filterMenu(type) {
    let items = document.querySelectorAll('.menu-item');

    items.forEach(item => {
        if (type === 'all') {
            item.style.display = 'block';
        } else if (item.classList.contains(type)) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}

function bookTable() {
    alert("Table Booked Successfully!");
    return false;
}
