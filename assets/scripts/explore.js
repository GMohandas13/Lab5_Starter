// explore.js
window.addEventListener('DOMContentLoaded', init);

function init() {
  const voiceSelect = document.getElementById('voice-select');

  function addVoices() {
    const voices = speechSynthesis.getVoices();
    if (!voices.length) return; 

    voices.forEach((voice, i) => {
      const opt = document.createElement('option');
      opt.value = i;
      opt.textContent = `${voice.name} (${voice.lang})`;
      voiceSelect.appendChild(opt);
    });
  }

  addVoices();
  speechSynthesis.addEventListener('voiceschanged', addVoices);
}
