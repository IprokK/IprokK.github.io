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
