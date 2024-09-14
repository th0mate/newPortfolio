function change_period(period){
    var monthly = document.getElementById("monthly");
    var semester = document.getElementById("semester");
    var annual = document.getElementById("annual");
    if(period === "monthly"){
        semester.className +=  "switch semester";
        annual.className +=  "switch annual";
        setTimeout(function(){
            monthly.className +=  "switch monthly active";
        },500);
    }else if(period === "semester"){
        monthly.className +=  "switch monthly";
        annual.className +=  "switch annual";
        setTimeout(function(){
            semester.className +=  "switch semester active";
        },500);
    }else{
        monthly.className +=  "switch monthly";
        semester.className +=  "switch semester";
        setTimeout(function(){
            annual.className +=  "switch annual active";
        },500);
    }
}

function change_period2(period){
    var monthly = document.getElementById("monthly2");
    var semester = document.getElementById("semester2");
    var annual = document.getElementById("annual2");
    var selector = document.getElementById("selector");
    if(period === "clair"){
        selector.style.left = 0;
        selector.style.width = monthly.clientWidth + "px";
        selector.style.backgroundColor = "#ecb325";
        selector.innerHTML = '<img src="Ressources/img/soleil.png" alt="">';
        //on force à passer le mode clair sur le site avec @media (prefers-color-scheme: dark)


    }else if(period === "auto"){
        selector.style.left = monthly.clientWidth + "px";
        selector.style.width = semester.clientWidth + "px";
        selector.innerHTML = '<img src="Ressources/img/auto.png" alt="">';
        selector.style.backgroundColor = "#ecb325";
    }else{
        selector.style.left = monthly.clientWidth + semester.clientWidth + 1 + "px";
        selector.style.width = annual.clientWidth + "px";
        selector.innerHTML = '<img src="Ressources/img/lune.png" alt="">';
        selector.style.backgroundColor = "#ecb325";
    }
}