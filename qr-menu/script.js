function loadPage(pageId) {
  const sections = document.querySelectorAll('main section');
  sections.forEach(section => {
    section.classList.remove('active');
    if (section.id === pageId) {
      section.classList.add('active');
    }
  });
}
