window.addEventListener('scroll', e => {
	document.documentElement.style.setProperty('--scrollTop', `${this.scrollY}px`) // Update method
})
gsap.registerPlugin(ScrollTrigger, ScrollSmoother)
ScrollSmoother.create({
	wrapper: '.wrapper',
	content: '.content'
})

const image = document.getElementById('image-container');

image.addEventListener('click', () => {
  window.location.href = 'https://example.com';
});

var details = document.querySelectorAll("details");
for(i=0;i<details.length;i++) {
  details[i].addEventListener("toggle", accordion);
}
function accordion(event) {
  if (!event.target.open) return;
  var details = event.target.parentNode.children;
  for(i=0;i<details.length;i++) {
    if (details[i].tagName != "DETAILS" || !details[i].hasAttribute('open') || event.target == details[i]) continue;
    details[i].removeAttribute("open");
  }
}

const statusBars = document.querySelectorAll('.status-bar__inner');

function updateStatusBar(statusBar) {
  const percent = statusBar.getAttribute('data-percent');
  statusBar.style.width = `calc(${percent}% - 2px)`;
}

// Пример использования: обновляем процент выполнения каждые 2 секунды
statusBars.forEach((statusBar) => {
  updateStatusBar(statusBar);
  setInterval(() => {
    const newPercent = Math.floor(Math.random() * 100);
    statusBar.setAttribute('data-percent', newPercent);
    updateStatusBar(statusBar);
  }, 2000);
});
