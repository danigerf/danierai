document.addEventListener("DOMContentLoaded", function () {
  const galeria = document.getElementById("galeria-gestante");

  const observer = new IntersectionObserver(
    async (entries, obs) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;

        const prefixo = "2025-11-17";

        let indicators = "";
        let inner = "";
        let slideIndex = 0;

        // Função que verifica se o arquivo existe
        async function arquivoExiste(url) {
          try {
            const resp = await fetch(url, { method: "HEAD" });
            return resp.ok;
          } catch (e) {
            return false;
          }
        }

        // Loop das fotos
        for (let i = 1; i <= 59; i++) {
          const nome = `${prefixo}${i}.jpg`;
          const url = `fotos/gestante/${nome}`;

          const existe = await arquivoExiste(url);
          if (!existe) continue; // pula se o arquivo não existir

          const active = slideIndex === 0 ? "active" : "";

          indicators += `
            <button type="button" data-bs-target="#carouselGestante"
                data-bs-slide-to="${slideIndex}" class="${active}"
                aria-current="${active ? "true" : ""}"
                aria-label="Slide ${slideIndex + 1}">
            </button>
          `;

          inner += `
            <div class="carousel-item ${active}">
              <img src="${url}"
                  class="d-block w-100"
                  loading="lazy"
                  alt="Foto gestante ${i}">
            </div>
          `;

          slideIndex++;
        }

        // Se não tiver nenhuma imagem válida
        if (slideIndex === 0) {
          galeria.innerHTML = `
            <p class="text-muted p-3">Nenhuma foto encontrada.</p>
          `;
          return;
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
      }
    },
    { threshold: 0.15 }
  );

  observer.observe(galeria);
});
