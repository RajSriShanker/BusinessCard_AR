document.addEventListener("DOMContentLoaded", function() {
    const targetMarker = document.querySelector('#marker-target')
    const playButton = document.querySelector('#playbutton-object');
    const videoObject = document.querySelector('#arvideo');
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

     // detect target found
     targetMarker.addEventListener("targetFound", event => {
      linkedinObject.setAttribute('animation','property: position; to: 1.5 0.6 0');
      twitterObject.setAttribute('animation','property: position; to: 1.5 0 0');
      githubObject.setAttribute('animation','property: position; to: 1.5 -0.6 0');
      instagramObject.setAttribute('animation','property: position; to: 1.5 -1.2 0');
      rajimageObject.setAttribute('animation','property: position; to: 0 1 0')
    });

      // detect target lost
      targetMarker.addEventListener("targetLost", event => {
        linkedinObject.setAttribute('animation','property: position; to: 0 0 0');
        twitterObject.setAttribute('animation','property: position; to: 0 0 0');
        githubObject.setAttribute('animation','property: position; to: 0 0 0');
        instagramObject.setAttribute('animation','property: position; to: 0 0 0');
        rajimageObject.setAttribute('animation','property: position; to: 0 0 0')
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

  });

