function animerCercles() {
    let animatedCircleEls = document.querySelectorAll(".circle-animation-number");

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const element = entry.target;
                console.log('handler');
                const circle = element.querySelector(".circle");
                const percentage = element.querySelector(".percentage");
                const duration = 1000;
                const dataNumber = parseInt(percentage.getAttribute("data-number"), 10);
                circle.setAttribute("stroke-dasharray", dataNumber + ", 100");
                circle.style.animation = "progress " + duration + "ms ease-out forwards";

                let start;
                const step = (ts) => {
                    if (!start) {
                        start = ts;
                    }
                    let progress = (ts - start) / duration;
                    //percentage.textContent = Math.floor(progress * dataNumber) + "%"; INUTILE
                    if (progress < 1) {
                        requestAnimationFrame(step);
                    }
                };
                requestAnimationFrame(step);

                observer.unobserve(element);
            }
        });
    }, {
        threshold: 0.9
    });

    animatedCircleEls.forEach((element) => {
        observer.observe(element);
    });
}
