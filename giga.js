document.getElementById('adBtn').onclick = () => {
  window.adexReward = {
    zoneId: 'adex_abc123',   // <-- paste your Adexium zone here
    callback: adFinished     // fired after rewarded view
  };
  const s = document.createElement('script');
  s.src = 'https://cdn.adexium.io/rewarded.js';
  document.head.appendChild(s);
};