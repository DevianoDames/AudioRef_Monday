// collecr all of the album covers into a variable
const albumCovers= document.querySelectorAll("#album-art img"), theAudioEl = document.querySelector('audio'),
playButton = document.querySelector('#playButton'),
pauseButton = document.querySelector('#pauseButton'),
rewindButton = document.querySelector('#rewindButton');

// load the new audio source
function loadAudio() {
    let currentSrc = `audio/${this.dataset.trackref}.mp3`;
   
    // set the new audio source
    theAudioEl.src = currentSrc;
    
    //load the new audio source
    theAudioEl.load();

    // tell the audio element to play
 playAudio();
       
}
// tell the audio element to play 
function playAudio() { theAudioEl.play(); }

function restartAudio () { theAudioEl.currentTime = 0; }
function pauseAudio() { theAudioEl.pause (); }
// add event handling to the alubum covers ( listen for a click event)
albumCovers.forEach(cover => cover.addEventListener('click', loadAudio))




// add event handling for the custom controls
playButton.addEventListener('click', playAudio);
rewindButton.addEventListener('click', restartAudio);
pauseButton.addEventListener('click', pauseAudio);

volSlider.addEventListener('change',setVolume);