// Dawn closes its drawer on page navigation, but same-page anchors need an explicit close.
document.addEventListener('click', (event) => {
  if (event.defaultPrevented || event.button !== 0 || event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
  if (!(event.target instanceof Element)) return;
  const link = event.target.closest('a[data-commed-anchor]');
  const drawer = link?.closest('header-drawer');
  if (!drawer || typeof drawer.closeMenuDrawer !== 'function') return;
  const destination = new URL(link.href);
  if (destination.origin !== location.origin || destination.pathname !== location.pathname) return;
  const summary = drawer.querySelector('summary');
  drawer.closeMenuDrawer(event, summary);
  summary.setAttribute('aria-expanded', 'false');
  const target = document.getElementById(destination.hash.slice(1));
  if (target) {
    target.setAttribute('tabindex', '-1');
    target.focus({ preventScroll: true });
  }
});
