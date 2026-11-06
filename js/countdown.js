// Counts down to 11:00 a.m. local time on November 11, 2026.
const TARGET = new Date(2026, 10, 11, 11, 0, 0); // month is 0-based

export function initCountdown(containerId = 'countdown-display') {
  const container = document.getElementById(containerId);
  if (!container) return;

  const fields = {
    days: container.querySelector('[data-unit="days"]'),
    hours: container.querySelector('[data-unit="hours"]'),
    minutes: container.querySelector('[data-unit="minutes"]'),
    seconds: container.querySelector('[data-unit="seconds"]'),
  };

  function tick() {
    const diff = Math.max(0, TARGET - new Date());
    const s = Math.floor(diff / 1000);
    fields.days.textContent = Math.floor(s / 86400);
    fields.hours.textContent = String(Math.floor((s % 86400) / 3600)).padStart(2, '0');
    fields.minutes.textContent = String(Math.floor((s % 3600) / 60)).padStart(2, '0');
    fields.seconds.textContent = String(s % 60).padStart(2, '0');
  }

  tick();
  setInterval(tick, 1000);
}
