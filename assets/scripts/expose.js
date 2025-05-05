// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  //volume section 
  const volumeLevel = document.getElementById("volume");
  const volumeImg = document.querySelector('#volume-controls img');
  const audio = document.querySelector('audio');

  volumeLevel.addEventListener('input', changeLevel);

  function changeLevel(event) {
    const value = Number(volumeLevel.value);

    audio.volume = value / 100;

    if (value === 0){
      volumeImg.src = 'assets/icons/volume-level-0.svg';
    }
    else if (value < 34) {
      volumeImg.src = 'assets/icons/volume-level-1.svg';
    }
    else if (value < 67) {
      volumeImg.src = 'assets/icons/volume-level-2.svg';
    }
    else {
      volumeImg.src = 'assets/icons/volume-level-3.svg';
    }
  }
}