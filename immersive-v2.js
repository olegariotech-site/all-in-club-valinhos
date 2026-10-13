/* ALL IN CLUB · Immersive horizontal storytelling · no dependencies */
(() => {
  'use strict';
  const section = document.getElementById('experiencia');
  if (!section) return;
  const viewport = section.querySelector('.experience-viewport');
  const track = section.querySelector('.experience-track');
  const panels = [...section.querySelectorAll('.experience-panel')];
  const prev = section.querySelector('[data-exp-prev]');
  const next = section.querySelector('[data-exp-next]');
  const counter = section.querySelector('[data-exp-index]');
  const blast = section.querySelector('.experience-panel--blast .experience-product');
  const motionQuery = window.matchMedia('(min-width: 961px) and (prefers-reduced-motion: no-preference)');
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  let pinned = false;
  let travel = 0;
  let currentIndex = 0;
  let raf = 0;

  function clamp(value, min, max) {
    return Math.max(min, Math.min(max, value));
  }

  function indexFor(offset) {
    return clamp(Math.round(offset / Math.max(1, viewport.clientWidth)), 0, panels.length - 1);
  }

  function updateUI(offset) {
    const width = Math.max(1, track.scrollWidth - viewport.clientWidth);
    const progress = clamp(offset / width, 0, 1);
    section.style.setProperty('--exp-progress', String(progress));
    const index = indexFor(offset);
    currentIndex = index;
    panels.forEach((panel, i) => {
      panel.classList.toggle('is-active', i === currentIndex);
      // Keeps off-screen scenes outside keyboard tab order while pinned.
      panel.inert = pinned && i !== currentIndex;
    });
    if (counter) counter.textContent = String(index + 1).padStart(2, '0') + ' / ' + String(panels.length).padStart(2, '0');
    if (prev) prev.disabled = index === 0;
    if (next) next.disabled = index === panels.length - 1;
    if (blast) {
      const center = 2 * viewport.clientWidth;
      const intensity = pinned
        ? clamp(1 - Math.abs(offset - center) / Math.max(1, viewport.clientWidth * 1.15), 0, 1)
        : (index === 2 ? .77 : 0);
      blast.style.setProperty('--burst', intensity.toFixed(3));
    }
  }

  function paint() {
    raf = 0;
    let offset;
    if (pinned) {
      const start = section.getBoundingClientRect().top + window.scrollY;
      const position = clamp(window.scrollY - start, 0, Math.max(0, section.offsetHeight - window.innerHeight));
      offset = travel ? position / Math.max(1, section.offsetHeight - window.innerHeight) * travel : 0;
      track.style.transform = 'translate3d(' + (-Math.round(offset * 10) / 10) + 'px,0,0)';
    } else {
      track.style.transform = '';
      offset = viewport.scrollLeft;
    }
    updateUI(offset);
  }

  function schedulePaint() {
    if (raf) return;
    raf = window.requestAnimationFrame(paint);
  }

  function configure() {
    pinned = motionQuery.matches;
    section.classList.toggle('experience--pinned', pinned);
    section.style.height = '';
    track.style.transform = '';
    travel = Math.max(0, track.scrollWidth - viewport.clientWidth);
    if (pinned) {
      const vh = window.innerHeight;
      section.style.height = (travel + vh) + 'px';
      viewport.scrollLeft = 0;
    } else {
      panels.forEach(panel => { panel.inert = false; });
    }
    schedulePaint();
  }

  function scrollToIndex(index) {
    index = clamp(index, 0, panels.length - 1);
    const offset = index * viewport.clientWidth;
    if (pinned) {
      const top = section.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({ top: top + offset, behavior: reducedMotion.matches ? 'auto' : 'smooth' });
    } else {
      viewport.scrollTo({ left: offset, behavior: reducedMotion.matches ? 'instant' : 'smooth' });
    }
  }

  viewport.addEventListener('keydown', event => {
    // Do not take arrow keys away from a focused child CTA.
    if (event.target !== viewport) return;
    if (event.key === 'ArrowRight') { event.preventDefault(); scrollToIndex(currentIndex + 1); }
    if (event.key === 'ArrowLeft') { event.preventDefault(); scrollToIndex(currentIndex - 1); }
  });
  prev?.addEventListener('click', () => scrollToIndex(currentIndex - 1));
  next?.addEventListener('click', () => scrollToIndex(currentIndex + 1));
  viewport.addEventListener('scroll', schedulePaint, { passive: true });
  window.addEventListener('scroll', schedulePaint, { passive: true });
  let resizing = false;
  window.addEventListener('resize', () => {
    if (resizing) return;
    resizing = true;
    window.requestAnimationFrame(() => {
      resizing = false;
      configure();
    });
  }, { passive: true });
  motionQuery.addEventListener?.('change', configure);

  // Decorative gold sparks belong to the burger scene, never to the food description.
  const sparks = blast?.querySelector('.experience-burst');
  if (sparks) {
    for (let i = 0; i < 26; i += 1) {
      const dot = document.createElement('span');
      dot.className = 'burst-spark';
      dot.setAttribute('aria-hidden', 'true');
      dot.style.setProperty('--rot', (i * 137.5078) + 'deg');
      dot.style.setProperty('--dist', (85 + i % 7 * 26) + 'px');
      dot.style.width = dot.style.height = (i % 4 + 2) + 'px';
      sparks.append(dot);
    }
  }

  // Small pointer response on editorial product photography, never shifts actual content.
  if (window.matchMedia('(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)').matches) {
    document.querySelectorAll('#favoritos .featured-photo').forEach(photo => {
      photo.addEventListener('pointermove', event => {
        const rect = photo.getBoundingClientRect();
        const x = (event.clientX - rect.left) / rect.width - .5;
        const y = (event.clientY - rect.top) / rect.height - .5;
        photo.style.backgroundPosition = 'calc(50% + ' + (x * 9).toFixed(1) + 'px) calc(50% + ' + (y * 9).toFixed(1) + 'px)';
      }, { passive: true });
      photo.addEventListener('pointerleave', () => { photo.style.backgroundPosition = ''; });
    });
  }
  configure();
  window.addEventListener('load', configure, { once: true });
})();