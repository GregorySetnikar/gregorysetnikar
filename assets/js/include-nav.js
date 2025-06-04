document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("menu-container");
    if (container) {
        fetch("/assets/html/nav.html")
            .then((res) => res.text())
            .then((html) => {
                container.innerHTML = html;

                // Initialisation de Dropotron après l’insertion
                if (window.jQuery) {
                    $('#nav > ul').dropotron({
                        alignment: 'right',
                        mode: 'fade',
                        noOpenerFade: true
                    });
                } else {
                    console.warn("jQuery non chargé !");
                }
            })
            .catch((err) => {
                console.error("Erreur lors du chargement du menu :", err);
            });
    }
});
