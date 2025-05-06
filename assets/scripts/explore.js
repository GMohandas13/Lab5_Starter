// explore.js
window.addEventListener('DOMContentLoaded', init);

function init() {
  const voiceSelect = document.getElementById('voice-select');
  const textToSpeak = document.getElementById('text-to-speak');
  const button = document.querySelector('button');
  const face = document.querySelector('#explore img');

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

  function textToSpeech() {
    let utterance = new SpeechSynthesisUtterance(textToSpeak.value);
    const voiceChoices = speechSynthesis.getVoices();
    const voiceSelection = voiceSelect.value;

    if (voiceSelection !== 'select'){
      utterance.voice = voiceChoices[voiceSelection];
    }

    utterance.addEventListener('start', function () {
      face.src = 'assets/images/smiling-open.png';
    });

    utterance.addEventListener('end', function () {
      face.src = 'assets/images/smiling.png';
    });

    speechSynthesis.speak(utterance);
  }
  button.addEventListener('click', textToSpeech);
}
