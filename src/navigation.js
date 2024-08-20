/**
 * Affiche dans l'élément #contenu de ../index.html le fichier html passé en paramètres, se trouvant dans src/vues
 * @param nomFichier{string} le nom du fichier à afficher
 */

function afficherVue(nomFichier) {

    fetch(`src/views/${nomFichier}.html`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Vue not found');
            }
            return response.text();
        })
        .then(data => {
            window.pageActuelle = nomFichier;
            document.querySelector('#contenu').innerHTML = data;
            creerCookieOuStockageLocal(nomFichier);
            window.scrollTo(0, 0);
        })
        .catch(error => {
            afficherVue('vueErreur');
        });

}


/**
 * Affiche la vue 'vueAccueil' si le cookie n'existe pas, sinon affiche la vue correspondant au cookie
 */
if (cookieExists()) {
    afficherVue(getCookie());
} else {
    afficherVue('vueAccueil');
}



Object.defineProperty(window, 'pageActuelle', {
    get() {
        return pageActuelle;
    },
    set(value) {
        if (value === 'vueAccueil') {
            setTimeout(() => {
                animerCercles();
            }, 1000);
        }
    }
});