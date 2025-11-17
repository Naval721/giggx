document.getElementById('adBtn').onclick = () => {
  // Giga.pub rewarded ad
  window.gigaReward = {
    zoneId: 'giga_abc123',   // ← your ZONE_ID
    callback: adFinished     // runs after user closes ad
  };
  const s = document.createElement('script');
  s.src = 'https://cdn.giga.pub/rewarded.js';
  document.head.appendChild(s);
};