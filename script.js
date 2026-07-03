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
document.getElementById("bookingForm").addEventListener("submit", function(event){
event.preventDefault();
emailjs.sendForm(
"service_7gxwa8e",
"template_s2chnui",
this
)
.then(function(){
alert("✅ Table Booked Successfully!");
document.getElementById("bookingForm").reset();
})
.catch(function(error){
    console.log("EmailJS Error:", error);
    alert(JSON.stringify(error));
});
});
