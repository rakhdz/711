const container = document.querySelector('.rising-circles');
const isMobile = window.innerWidth < 768;
const totalCircles = isMobile ? 16 : 30;

for (let i = 0; i < totalCircles; i++) {
  const c = document.createElement('div');
  c.className = 'circle';

  const size = Math.random() * 100 + 50;
  c.style.width = c.style.height = size + 'px';
  c.style.left = Math.random() * 100 + '%';
  c.style.animationDuration = (15 + Math.random() * 20) + 's';
  c.style.animationDelay = Math.random() * 10 + 's';

  container.appendChild(c);
}

if (!isMobile) {
  document.addEventListener('mousemove', e => {
    const x = (e.clientX / window.innerWidth - 0.5) * 20;
    const y = (e.clientY / window.innerHeight - 0.5) * 20;
    container.style.transform = `translate(${x}px, ${y}px)`;
  });
}
