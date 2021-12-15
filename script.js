document.addEventListener("DOMContentLoaded", function() {
    const targetMarker = document.querySelector('#marker-target')
    const playButton = document.querySelector('#playbutton-object');
    const videoObject = document.querySelector('#arvideo');
    const videoHolder = document.querySelector('#arvideo-object');
    const linkedinObject = document.querySelector('#linkedin-object')
    const twitterObject = document.querySelector('#twitter-object')
    const githubObject = document.querySelector('#github-object')
    const instagramObject = document.querySelector('#instagram-object')
    const rajimageObject = document.querySelector('#rajimage-object')

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

    if(videoObject.pause)
    {
      playButton.setAttribute('visible',true);
    }
    else
    {
      playButton.setAttribute('visible',false);
    }

     // detect target found
     targetMarker.addEventListener("targetFound", event => {
      linkedinObject.setAttribute('animation','property: position; to: 1.5 0.6 0');
      linkedinObject.setAttribute('animation__opacity','property: material.opacity; to: 1');
      twitterObject.setAttribute('animation','property: position; to: 1.5 0 0');
      twitterObject.setAttribute('animation__opacity','property: material.opacity; to: 1');
      githubObject.setAttribute('animation','property: position; to: 1.5 -0.6 0');
      githubObject.setAttribute('animation__opacity','property: material.opacity; to: 1');
      instagramObject.setAttribute('animation','property: position; to: 1.5 -1.2 0');
      instagramObject.setAttribute('animation__opacity','property: material.opacity; to: 1');



      setTimeout(() => {
        rajimageObject.setAttribute("visible", true);
        rajimageObject.setAttribute('animation__opacity','property: opacity; to: 1');
        rajimageObject.setAttribute('animation','property: position; to: 0 0.5 0')
      }, 600);

      videoHolder.setAttribute('animation','property: position; to: 0 -1 0');
      playButton.setAttribute('animation','property: position; to: 0 -1 0.1');

    });

      // detect target lost
      targetMarker.addEventListener("targetLost", event => {
        playButton.setAttribute('visible',true);
        videoObject.pause();
      });

      linkedinObject.addEventListener('click', function(){
        window.location.href = 'https://www.linkedin.com/in/raj-sri-shanker-867b379b/'
      });

      twitterObject.addEventListener('click', function(){
        window.location.href = 'https://twitter.com/RajSriShanker'
      });

      githubObject.addEventListener('click', function(){
        window.location.href = 'https://github.com/RajSriShanker'
      });

      instagramObject.addEventListener('click', function(){
        window.location.href = 'https://www.instagram.com/rajonthestreet/?hl=en'
      });

      rajimageObject.addEventListener('click', function(){
        window.location.href = 'https://rajsrishanker.com/'
      });

  });

