document.addEventListener('scroll', function () {

    if (estPageAccueil) {

        const sections = document.querySelectorAll('section');
        const icons = document.querySelectorAll('.icon');
        const texts = document.querySelectorAll('.text');

        let currentSection = '';

        sections.forEach((section, index) => {
            const sectionTop = section.offsetTop -10;
            const sectionHeight = section.clientHeight + 20;

            if (pageYOffset >= sectionTop && pageYOffset < sectionTop + sectionHeight) {
                currentSection = section.getAttribute('id');
            }
        });

        texts.forEach((text) => {
            text.classList.remove('textActive');
        });

        icons.forEach((icon) => {
            icon.classList.remove('active');
        });

        if (currentSection) {
            document.querySelector(`#icon${currentSection.replace('section', '')}`).classList.add('active');
            document.querySelector(`#text${currentSection.replace('section', '')}`).classList.add('textActive');
        }
    }
});