

/**
 * Permet d'afficher le texte de description des projets si la largeur de l'écran est supérieure à 700px
 * @param numer
 */
function centerElement(numer) {
    var element = document.getElementById('p' + numer);
    if (element) {
        var hoverredElement = element.querySelector('.hoverred');
        if (hoverredElement) {
            hoverredElement.style.height = "100px";
            var children = hoverredElement.children;

            for (var i = 0; i < children.length; i++) {
                children[i].style.display = "flex";
            }
        }
    }
}

/**
 * Permet d'enlever le texte des projets si la largeur de l'écran est inférieure à 700px
 * @param numer le numéro du projet
 */
function uncenterElement(numer) {
    var element = document.getElementById('p' + numer);
    if (element) {
        var hoverredElement = element.querySelector('.hoverred');
        if (hoverredElement) {
            if (window.innerWidth < 700) {
                hoverredElement.style.height = "0px";
                var children = hoverredElement.children;

                for (var i = 0; i < children.length; i++) {
                    children[i].style.display = "none";
                }
            }
        }
    }
}

var elements = document.querySelectorAll('[id^="p"]');

var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
        if (entry.target && entry.isIntersecting) {
            var id = entry.target.id;
            if (id) {
                var numer = id.substring(1);
                if (window.innerWidth < 900) {
                    centerElement(numer);
                }
            }
        }
    });
}, {threshold: [0.9, 1]});

elements.forEach(function (element) {
    if (element) { // Vérifiez si l'élément existe
        observer.observe(element);
    }
});

//si la visibilité des éléments est inférieure à 0.7, on les cache
var observer2 = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
        if (entry.target && entry.isIntersecting) {
            var id = entry.target.id;
            if (id) {
                if (window.innerWidth < 900) {
                    var numer = id.substring(1);
                    uncenterElement(numer);
                }
            }
        }
    });
}, {threshold: [0, 0.9]});

elements.forEach(function (element) {
    if (element) { // Vérifiez si l'élément existe
        observer2.observe(element);
    }
});