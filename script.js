document.addEventListener("DOMContentLoaded", function() {
    const sceneEl = document.querySelector('a-scene');
    const arSystem = sceneEl.systems["mindar-image-system"];
    const playButton = document.querySelector('#playbutton-object');
    const videoObject = document.querySelector('#arvideo');

    playButton.addEventListener('click', function () {
      if (videoObject.paused == true) {
        videoObject.play();
        } else {
        videoObject.pause();    }
    }, false);

    //Play Button
    playButton.addEventListener("click", event =>{
      if(playButton.object3D.visible == true)
      {
        playButton.setAttribute('visible',false);

      }
      else
      {
        playButton.setAttribute('visible',true);
      }
    },false);

  });