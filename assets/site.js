
document.addEventListener('click', (event) => {
  const btn = event.target.closest('[data-filter]');
  if (!btn) return;
  const group = btn.closest('.filterbar');
  const filter = btn.dataset.filter;
  group.querySelectorAll('button').forEach(b => b.classList.toggle('active', b === btn));
  document.querySelectorAll('[data-case]').forEach(card => {
    const show = filter === 'all' || card.dataset.kind.includes(filter);
    card.style.display = show ? '' : 'none';
  });
});
