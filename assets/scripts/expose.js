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
  const hornSelect = document.getElementById("horn-select"); 
  const hornImageTop = document.getElementById("expose"); 
  const hornImage = hornImageTop.querySelector('img'); 

  const hornAudio = document.querySelector("audio"); 
  
  hornSelect.addEventListener('change', () => {
    const selectedValue = hornSelect.value; 

    if (selectedValue == 'air-horn') {
      hornAudio.src = 'assets/audio/air-horn.mp3';
      hornImage.src = 'assets/images/air-horn.svg'; 
    }
    if (selectedValue == 'car-horn') {
      hornAudio.src = 'assets/audio/car-horn.mp3'; 
      hornImage.src = 'assets/images/car-horn.svg'; 
    }
    if (selectedValue == 'party-horn') {
      hornAudio.src = 'assets/audio/party-horn.mp3'; 
      hornImage.src = 'assets/images/party-horn.svg'; 
    }
  })

  //Play Button Functionality
  const play = document.querySelector('button');
  const sound = document.querySelector('audio');
  
  play.addEventListener('click', playAudio);

  function playAudio(){
    sound.play();
  }

  /*
  hornImage.src = f""; /*this should be the variable for the selected form*//*
  document.images[0]; 
  document.getElementById("horn-select");
  */
}