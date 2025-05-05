// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
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

  /*
  hornImage.src = f""; /*this should be the variable for the selected form*//*
  document.images[0]; 
  document.getElementById("horn-select");
  */
}