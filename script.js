

document.getElementById('audioInput').addEventListener('change', function(e) {
    const file = e.target.files[0];
    const audioPlayer = document.getElementById('audioPlayer');
    audioPlayer.src = URL.createObjectURL(file);
    audioPlayer.style.display = 'block';
});