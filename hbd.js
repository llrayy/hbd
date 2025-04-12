let dragged = false;
const dragArea = document.getElementById('dragArea');
const scrollHint = document.getElementById('scrollHint');

const unlockScrollHint = () => {
  if (!dragged) {
    scrollHint.style.opacity = 1;
    dragged = true;
  }
}

// PC
dragArea.addEventListener('mousedown', () => {
  unlockScrollHint();
});

// Mobile
dragArea.addEventListener('touchstart', () => {
  unlockScrollHint();
});

// Scroll animations
window.addEventListener('scroll', () => {
  document.querySelectorAll('.section').forEach(section => {
    const rect = section.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      section.classList.add('visible');
    }
  });

  const last = document.getElementById('lastImage');
  const rect = last.getBoundingClientRect();
  if (rect.top < window.innerHeight - 100) {
    last.classList.add('visible');
  }

  const final = document.getElementById('finalText');
  const finalRect = final.getBoundingClientRect();
  if (finalRect.top < window.innerHeight - 100) {
    final.classList.add('visible');
    setTimeout(() => {
      document.getElementById('nextButton').style.display = 'block';
    }, 5000);
  }
});
