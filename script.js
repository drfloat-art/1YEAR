function revealMessage() {
  document.getElementById('message').classList.remove('hidden');
  document.getElementById('collage').classList.remove('hidden');
  document.getElementById('pixelScene').classList.remove('hidden');

  document.getElementById('message').classList.add('fade-in');
  document.getElementById('collage').classList.add('fade-in');
  document.getElementById('pixelScene').classList.add('fade-in');

  const song = document.getElementById('song');
  if (song.paused) {
    song.play();
  }
}
