window.onscroll = function() {
    const button = document.getElementById("scrollToTop");
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        button.style.display = "block";
    } else {
        button.style.display = "none";
    }
};

function scrollToTop() {
    window.scrollTo({top: 0, behavior: 'smooth'});
}


function toggleInfo(element) {
    const info = element.nextElementSibling;
    info.style.display = info.style.display === 'none' || info.style.display === '' ? 'block' : 'none';
}