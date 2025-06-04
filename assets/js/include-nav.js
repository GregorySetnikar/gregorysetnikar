document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("menu-container");
    if (container) {
        fetch("/includes/nav.html")
            .then(res => res.text())
            .then(html => {
                container.innerHTML = html;

                // ➕ Réinitialiser Dropotron après insertion
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
            .catch(err => {
                console.error("Erreur de chargement du menu :", err);
            });
    }
});
