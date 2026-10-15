/* ALL IN CLUB Immersive V3: native, progressively enhanced, no dependencies. */
(() => {
  'use strict';
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  const rows = [...document.querySelectorAll('.menu-row')];
  const filters = [...document.querySelectorAll('.gallery-filter')];
  const image = document.getElementById('menuImage');
  const spotlight = document.getElementById('menuSpotlight');
  const counter = document.getElementById('galleryCounter');
  let selected = rows[0];
  selected.classList.add('is-selected');
  selected.querySelector('button').setAttribute('aria-pressed', 'true');
  let selectionVersion = 0;

  async function select(row, reveal = false) {
    if (!row || row === selected) return;
    selected = row;
    const version = ++selectionVersion;
    rows.forEach(item => {
      const active = item === row;
      item.classList.toggle('is-selected', active);
      item.querySelector('button').setAttribute('aria-pressed', String(active));
    });
    image.classList.add('is-changing');
    const preload = new Image();
    preload.srcset = row.dataset.srcset;
    preload.sizes = image.sizes;
    preload.src = row.dataset.image;
    try { await Promise.all([preload.decode(), new Promise(resolve => setTimeout(resolve, reduced.matches ? 0 : 160))]); } catch (_) { /* Retain a working previous photo on failure. */
      if (version === selectionVersion) image.classList.remove('is-changing');
      return;
    }
    if (version !== selectionVersion) return;
    image.srcset = row.dataset.srcset;
    image.src = row.dataset.image;
    image.alt = 'Representação publicitária digital de ' + row.dataset.name;
    document.getElementById('menuName').textContent = row.dataset.name;
    document.getElementById('menuCategory').textContent = row.dataset.label;
    document.getElementById('menuNote').textContent = row.dataset.category === 'combos'
      ? 'Imagem conceitual apenas do hambúrguer. Confira a composição do combo na Saipos.'
      : 'Imagem conceitual. Confira os detalhes no cardápio oficial.';
    const order = document.getElementById('menuOrder');
    order.textContent = 'Consultar ' + row.dataset.name + ' ↗';
    order.href = row.querySelector('a').href;
    // Let the new frame paint before fading it in. Rapid clicks are versioned above.
    requestAnimationFrame(() => { if (version === selectionVersion) image.classList.remove('is-changing'); });
    if (reveal && matchMedia('(max-width: 960px)').matches) {
      spotlight.scrollIntoView({behavior: reduced.matches ? 'auto' : 'smooth', block: 'start'});
    }
  }
  rows.forEach(row => {
    const button = row.querySelector('button');
    button.addEventListener('click', () => select(row, true));
    button.addEventListener('keydown', event => {
      const visible = rows.filter(item => !item.hidden);
      const index = visible.indexOf(row);
      let target;
      if (event.key === 'ArrowDown') target = visible[(index + 1) % visible.length];
      if (event.key === 'ArrowUp') target = visible[(index - 1 + visible.length) % visible.length];
      if (event.key === 'Home') target = visible[0];
      if (event.key === 'End') target = visible.at(-1);
      if (target) { event.preventDefault(); target.querySelector('button').focus(); select(target); }
    });
  });
  filters.forEach(button => button.addEventListener('click', () => {
    const category = button.dataset.filter;
    rows.forEach(row => { row.hidden = category !== 'all' && row.dataset.category !== category; });
    filters.forEach(item => {
      const active = item === button;
      item.classList.toggle('active', active);
      item.setAttribute('aria-pressed', String(active));
    });
    const visible = rows.filter(row => !row.hidden);
    counter.textContent = visible.length + (visible.length === 1 ? ' produto nesta seleção' : ' produtos nesta seleção');
    if (!selected || selected.hidden) select(visible[0]);
    document.querySelector('.menu-list').scrollTop = 0;
  }));
  counter.textContent = rows.length + ' produtos nesta seleção';


  const logo = document.querySelector('.story-art');
  const logoObserver = new IntersectionObserver(entries => entries.forEach(entry => {
    if (entry.isIntersecting) { logo.classList.add('logo-revealed'); logoObserver.unobserve(logo); }
  }), {threshold: .2});
  logoObserver.observe(logo);

  const ember = document.getElementById('brasa');
  const emberVideo = ember.querySelector('video');
  const sparks = ember.querySelector('.ember-sparks');
  for (let i = 0; i < 14; i++) {
    const dot = document.createElement('i');
    dot.style.setProperty('--x', (25 + i * 5.1) + '%');
    dot.style.setProperty('--time', (5 + i % 4) + 's');
    dot.style.setProperty('--delay', (-i * .73) + 's');
    sparks.append(dot);
  }
  let emberVisible = false;
  const videos = [...document.querySelectorAll('video')];
  const visibleVideos = new Map(videos.map(video => [video, false]));
  function syncVideo(video) {
    const enabled = visibleVideos.get(video) && !document.hidden && !reduced.matches;
    if (video.id === 'heroVideo') video.closest('.hero')?.classList.toggle('is-scene-visible', !!enabled);
    if (enabled) {
      if (video.dataset.src && !video.getAttribute('src')) { video.src = video.dataset.src; video.load(); }
      if (video.getAttribute('src') || video.querySelector('source')) video.play().catch(() => {
        // Rejected autoplay keeps the poster; no empty or frozen foreground frame.
        if (video === emberVideo) video.classList.remove('is-ready');
      });
    } else video.pause();
  }
  const observer = new IntersectionObserver(entries => entries.forEach(entry => {
    if (entry.target === ember) {
      emberVisible = entry.isIntersecting;
      ember.classList.toggle('is-visible', emberVisible && !document.hidden && !reduced.matches);
      visibleVideos.set(emberVideo, emberVisible); syncVideo(emberVideo);
    } else {
      visibleVideos.set(entry.target, entry.isIntersecting); syncVideo(entry.target);
    }
  }), {threshold: .08});
  observer.observe(ember);
  videos.filter(video => video !== emberVideo).forEach(video => observer.observe(video));
  emberVideo.addEventListener('playing', () => emberVideo.classList.add('is-ready'));
  emberVideo.addEventListener('error', () => emberVideo.classList.remove('is-ready'));
  emberVideo.addEventListener('stalled', () => { if (emberVideo.readyState < 2) emberVideo.classList.remove('is-ready'); });
  emberVideo.addEventListener('emptied', () => emberVideo.classList.remove('is-ready'));
  function motionState() {
    videos.forEach(syncVideo);
    ember.classList.toggle('is-visible', emberVisible && !document.hidden && !reduced.matches);
  }
  reduced.addEventListener('change', motionState);
  document.addEventListener('visibilitychange', motionState);
})();
