document.addEventListener("DOMContentLoaded", function() {
    const sceneEl = document.querySelector('a-scene');
    const arSystem = sceneEl.systems["mindar-image-system"];
    const playButton = document.querySelector('#playbutton-object');
    const videoObject = document.querySelector('#arvideo');

    //Video Function
    playButton.addEventListener('click', function () {
      if (videoObject.paused == true) {
        videoObject.play();
        playButton.setAttribute('visible',false);
        } else {
        videoObject.pause();    
        playButton.setAttribute('visible',true);
      }
    }, false);


    
  });