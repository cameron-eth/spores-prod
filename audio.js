const audio = new Audio('soph.m4a');
const playPauseBtn = document.getElementById('playPauseBtn');
const seekSlider = document.getElementById('seekSlider');
const currentTimeElement = document.getElementById('currentTime');
const durationElement = document.getElementById('duration');
const nowPlayingElement = document.getElementById('nowPlaying');


// Update the seek slider's max value and the duration text when the audio file is loaded
audio.addEventListener('loadedmetadata', () => {
  seekSlider.max = audio.duration;
  const durationMinutes = Math.floor(audio.duration / 60);
  const durationSeconds = Math.floor(audio.duration % 60);
  durationElement.textContent = `${durationMinutes}:${durationSeconds.toString().padStart(2, '0')}`;
});

// Update the current time and seek slider value during playback
audio.addEventListener('timeupdate', () => {
  seekSlider.value = audio.currentTime;
  const currentMinutes = Math.floor(audio.currentTime / 60);
  const currentSeconds = Math.floor(audio.currentTime % 60);
  currentTimeElement.textContent = `${currentMinutes}:${currentSeconds.toString().padStart(2, '0')}`;
});

// Play or pause the audio when the button is clicked
playPauseBtn.addEventListener('click', () => {
    if (audio.paused) {
      audio.play();
      playPauseBtn.textContent = 'Pause';
      nowPlayingElement.textContent = 'Stargaze Sophia Frame'; // Update now playing message
    } else {
      audio.pause();
      playPauseBtn.textContent = 'Play';
      nowPlayingElement.textContent = ''; // Update now playing message
    }
  });

// Seek the audio when the slider value changes
seekSlider.addEventListener('input', () => {
  audio.currentTime = seekSlider.value;
});

