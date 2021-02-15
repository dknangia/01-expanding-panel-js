var panels = document.querySelectorAll('.panel');
console.log(panels);

if (panels) {
    panels.forEach((panel) => {
       
        panel.addEventListener('click', () => {
            removeActiveClass();
            panel.classList.add('active');

        })

    })

}

function removeActiveClass() {
    this.panels.forEach(panel => {
        panel.classList.remove('active');
    });
}