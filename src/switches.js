

function change_period2(period) {
    var monthly = document.getElementById("monthly2");
    var semester = document.getElementById("semester2");
    var annual = document.getElementById("annual2");
    var selector = document.getElementById("selector");
    if (period === "clair") {
        selector.style.left = 0;
        selector.style.width = monthly.clientWidth + "px";
        selector.style.backgroundColor = "#ecb325";
        selector.innerHTML = '<img src="Ressources/img/soleil.png" alt="">';
        document.querySelector('.dark').classList.remove('dark');


    } else if (period === "auto") {
        selector.style.left = monthly.clientWidth + "px";
        selector.style.width = semester.clientWidth + "px";
        selector.innerHTML = '<img src="Ressources/img/auto.png" alt="">';
        selector.style.backgroundColor = "#ecb325";

        if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
            document.querySelector('html').classList.add('dark');
        }
    } else {
        selector.style.left = monthly.clientWidth + semester.clientWidth + 1 + "px";
        selector.style.width = annual.clientWidth + "px";
        selector.innerHTML = '<img src="Ressources/img/lune.png" alt="">';
        selector.style.backgroundColor = "#ecb325";
        document.querySelector('html').classList.add('dark');
    }
}

change_period2("auto");