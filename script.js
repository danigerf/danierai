document.addEventListener("DOMContentLoaded", function () {
  const galeria = document.getElementById("galeria-reels");

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          galeria.innerHTML = `
            <blockquote class="col-auto instagram-media"
              data-instgrm-captioned
              data-instgrm-permalink="https://www.instagram.com/reel/DQXTtTZDmlL/"
              data-instgrm-version="14"></blockquote>

            <blockquote class="col-auto instagram-media"
              data-instgrm-captioned
              data-instgrm-permalink="https://www.instagram.com/reel/DJC5t7_ulUb/"
              data-instgrm-version="14"></blockquote>

            <blockquote class="col-auto instagram-media"
              data-instgrm-captioned
              data-instgrm-permalink="https://www.instagram.com/reel/DJcVLj5OU2N/"
              data-instgrm-version="14"></blockquote>

            <blockquote class="col-auto instagram-media"
              data-instgrm-captioned
              data-instgrm-permalink="https://www.instagram.com/reel/DJKYUlgpd2W/"
              data-instgrm-version="14"></blockquote>
          `;

          const script = document.createElement("script");
          script.src = "https://www.instagram.com/embed.js";
          script.async = true;
          script.onload = () => {
            if (window.instgrm) window.instgrm.Embeds.process();
          };
          document.body.appendChild(script);

          obs.unobserve(galeria);
        }
      });
    },
    { threshold: 0.2 }
  );

  observer.observe(galeria);
});
