document.addEventListener("click", (event) => {
  const target = event.target;
  if (!(target instanceof Element)) return;

  const link = target.closest("a");
  if (!link) return;

  const url = new URL(link.href);

  // Leave external links alone
  if (url.origin !== window.location.origin) return;

  event.preventDefault();

  const destination = new URL(
    `https://msd-live.github.io/msdlive-docs${url.pathname}${url.search}${url.hash}`
  );

  window.open(destination.href, "_blank", "noopener,noreferrer");
});