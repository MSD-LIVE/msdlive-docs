document.addEventListener("DOMContentLoaded", () => {
  // Only enable iframe behavior when embedded in a parent frame
  const isEmbedded = window.self !== window.top;

  if (!isEmbedded) {
    return;
  }

  // Use parent origin passed via query param if available, fallback to "*"
  const params = new URLSearchParams(window.location.search);
  const parentOrigin = params.get("parentOrigin") || "*";

  document.addEventListener("click", (event) => {
    const link = event.target.closest("a");

    if (!link) return;

    const href = link.getAttribute("href");
    if (!href) return;

    let url;
    try {
      url = new URL(link.href);
    } catch {
      return;
    }

    // Ignore external links
    if (url.origin !== window.location.origin) {
      return;
    }

    // Ignore same-page anchor links
    if (url.hash && url.pathname === window.location.pathname) {
      return;
    }

    event.preventDefault();

    window.parent.postMessage(
      { type: "docs-navigate", pathname: url.pathname },
      parentOrigin
    );
  });
});