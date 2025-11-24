document.addEventListener("DOMContentLoaded", function () {
  const galeria = document.getElementById("galeria-gestante");

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        const prefixo = "2025-11-171";

        let indicators = "";
        let inner = "";
        let slideIndex = 0;

        for (let i = 2; i <= 32; i++) {
          const nome = `${prefixo}${i}.jpg`;
          const active = slideIndex === 0 ? "active" : "";

          indicators += `
            <button type="button" data-bs-target="#carouselGestante"
              data-bs-slide-to="${slideIndex}" class="${active}"
              aria-current="${active ? "true" : ""}" aria-label="Slide ${slideIndex + 1}">
            </button>
          `;

          inner += `
            <div class="carousel-item ${active}">
              <img src="fotos/gestante/${nome}"
                   class="d-block w-100"
                   loading="lazy"
                   alt="Foto gestante ${i}">
            </div>
          `;

          slideIndex++;
        }

        galeria.innerHTML = `
          <div id="carouselGestante" class="carousel slide" data-bs-ride="carousel">

            <div class="carousel-indicators">
              ${indicators}
            </div>

            <div class="carousel-inner">
              ${inner}
            </div>

            <button class="carousel-control-prev" type="button"
              data-bs-target="#carouselGestante" data-bs-slide="prev">
              <span class="carousel-control-prev-icon"></span>
            </button>

            <button class="carousel-control-next" type="button"
              data-bs-target="#carouselGestante" data-bs-slide="next">
              <span class="carousel-control-next-icon"></span>
            </button>

          </div>
        `;

        obs.unobserve(galeria);
      });
    },
    { threshold: 0.15 }
  );

  observer.observe(galeria);
});
