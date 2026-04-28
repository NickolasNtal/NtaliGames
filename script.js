function toggleCard(id) {
    const card = document.getElementById(id);
    card.classList.toggle('open');
  }
(function initCountdown() {
  const RELEASE = new Date('2026-08-11T00:00:00');

  function update() {
    const now = new Date();
    const diff = RELEASE - now;
    const badge = document.getElementById('ng-countdown-badge');
    if (!badge) return;

    if (diff <= 0) {
      badge.textContent = 'Out now!';
      badge.classList.add('ng-badge--live');
      return;
    }

    const totalDays = Math.floor(diff / (1000 * 60 * 60 * 24));
    const weeks = Math.floor(totalDays / 7);
    const days  = totalDays % 7;
    const hrs   = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const mins  = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const secs  = Math.floor((diff % (1000 * 60)) / 1000);

    const pad = n => String(n).padStart(2, '0');

    if (weeks > 0) {
      badge.textContent = weeks + 'w ' + days + 'd ' + pad(hrs) + ':' + pad(mins) + ':' + pad(secs);
    } else if (totalDays > 0) {
      badge.textContent = days + 'd ' + pad(hrs) + ':' + pad(mins) + ':' + pad(secs);
    } else {
      badge.textContent = pad(hrs) + ':' + pad(mins) + ':' + pad(secs);
    }
  }

  update();
  setInterval(update, 1000);
})();
