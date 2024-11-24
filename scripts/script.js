document.addEventListener("DOMContentLoaded", function() {
    // Smooth scrolling for links
    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault();

            const targetID = this.getAttribute("href").substring(1);
            const target = document.getElementById(targetID);

            if (target) {
                window.scrollTo({
                    top: target.offsetTop,
                    behavior: "smooth"
                });
            }
        });
    });
});
