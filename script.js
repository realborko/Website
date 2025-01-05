// Flicker Effect for Anxiety
const body = document.body;
setInterval(() => {
  const randomOpacity = Math.random() * 0.3 + 0.7; // Random opacity for flicker
  body.style.backgroundColor = `rgba(10, 10, 10, ${randomOpacity})`;
}, 100);

// Optional: Dynamic Fog Speed
document.querySelector('.fog').addEventListener('mouseover', () => {
  document.querySelector('.fog').style.animationDuration = '10s';
