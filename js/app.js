const imagenes = document.querySelectorAll('.galeria .contenedor-imagen');
const imagenModal = document.getElementById('imagen-modal');

imagenes.forEach((imagen) => {
	imagen.addEventListener('click', () => {
		const ruta = imagen.querySelector('img').src;
		imagenModal.src = ruta;
	});
});


/* Scroll to Top */

const handleScroll = () => {
    const scrollY = window.scrollY;
    const scrollToTopBtn = document.getElementById("scroll-to-top");

    if (scrollY > 300) {
        scrollToTopBtn.style.display = "block";
    } else {
        scrollToTopBtn.style.display = "none";
    }
};

const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
};

window.addEventListener("scroll", handleScroll);

const ScrollTop = () => {
    return `
        <button id="scroll-to-top" class="btn" onclick="scrollToTop()">
			<i class="fas fa-arrow-up"></i>
        </button>
    `;
};

document.body.insertAdjacentHTML("beforeend", ScrollTop());
