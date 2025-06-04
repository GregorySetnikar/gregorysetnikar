document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("menu-container");
    if (container) {
        fetch("../html/nav.html")
            .then(res => res.text())
            .then(html => {
                container.innerHTML = html;
            })
            .catch(err => {
                console.error("Erreur de chargement du menu :", err);
            });
    }
});
