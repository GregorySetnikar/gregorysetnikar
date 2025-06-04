document.addEventListener("DOMContentLoaded", () => {
    const includes = document.querySelectorAll('[include-html]');
    includes.forEach(el => {
        const file = el.getAttribute("include-html");
        fetch(file)
            .then(res => res.text())
            .then(data => {
                el.innerHTML = data;
                el.removeAttribute("include-html");
            })
            .catch(err => console.error("Include failed: ", err));
    });
});
