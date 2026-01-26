//this fixes the bug where no vertical scrollbar appears in the nav:
function fixCarbonSideNavHeight() {
  const sideNav = document.querySelector('cds-side-nav-items');
  const sidebar = document.querySelector('.md-sidebar--primary');

  if (!sideNav || !sidebar) return;

  const header = document.querySelector('.md-header');
  const headerHeight = header ? header.offsetHeight : 64;

  const height = window.innerHeight - headerHeight;

  sideNav.style.maxHeight = `${height}px`;
  sideNav.style.overflowY = 'auto';
}

// Run after Carbon upgrades components
window.addEventListener('load', () => {
  setTimeout(fixCarbonSideNavHeight, 0);
});

// Recalculate on resize
window.addEventListener('resize', fixCarbonSideNavHeight);

