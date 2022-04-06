document.addEventListener("DOMContentLoaded", function() {
    const targetMarker = document.querySelector('#marker-target')
    const faceimage = document.querySelector('#faceimage-object')
    const nametext = document.querySelector('#nametext-object')
    const linkedinObject = document.querySelector('#linkedin-object')
    const twitterObject = document.querySelector('#twitter-object')
    const githubObject = document.querySelector('#github-object')
    const instagramObject = document.querySelector('#instagram-object')
    const gltfObject = document.querySelector('#gltf-object')
    const particleObject = document.querySelector('#particle-object')


     // detect target found
     targetMarker.addEventListener("targetFound", event => {
      faceimage.setAttribute('animation__scale','property: scale;from:2 2 2; to: 1 1 1')
      faceimage.setAttribute('animation__position','property: position;from:0 0 0;to:-1 1.2 0;delay:2000;dur:1000');
      faceimage.setAttribute('animation__rotation','property: rotation; to: 0 360 0 ; loop: true;delay:6000; dur:2000');

      nametext.setAttribute('animation__opacity','property: material.opacity;from:0;to:1;delay:4000');

      linkedinObject.setAttribute('animation__opacity','property: material.opacity; to: 1');
      twitterObject.setAttribute('animation__opacity','property: material.opacity; to: 1');
      githubObject.setAttribute('animation__opacity','property: material.opacity; to: 1');
      instagramObject.setAttribute('animation__opacity','property: material.opacity; to: 1');

      gltfObject.setAttribute('animation__scale','property: position; to: -0.1 -0.65 0; dur: 5000; easing: easeOutCubic; loop: false; delay:6000');
    });

      // detect target lost
      targetMarker.addEventListener("targetLost", event => {
      particleObject.setAttribute('animation__visibleoff','property: visible; to: false')
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

      faceimage.addEventListener('click', function(){
        window.location.href = 'https://rajsrishanker.com/'
      });

      gltfObject.addEventListener('click', function(){
        particleObject.setAttribute('animation__visibleon','property: visible; to: true')
      });

  });

