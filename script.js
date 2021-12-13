window.addEventListener('click', function () {
    var video = document.querySelector('#arvideo');
    if (video.paused == true) {
      video.play();
      } else {
      video.pause();
    }
  }, false);
