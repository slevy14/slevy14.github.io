var audio = [];
// Array of files you'd like played
audio.playlist = [
    "/audio/cha_cha_slide_clips/basic_steps.mp3",
    "/audio/cha_cha_slide_clips/clap_clap_your_hands.mp3",
    "/audio/cha_cha_slide_clips/cmon.mp3",
    "/audio/cha_cha_slide_clips/freeze.mp3",
    "/audio/cha_cha_slide_clips/one_hop_this_time.mp3",
];
 
function playAudio(){
    // Default playlistId to 0 if not supplied 
    playlistId = 0;
    // If SoundManager object exists, get rid of it...
    if (audio.nowPlaying){
        audio.nowPlaying.destruct();
        // ...and reset array key if end reached
        if(playlistId == audio.playlist.length){
            playlistId = 0;
        }
    }
    // Standard Sound Manager play sound function...
    soundManager.onready(function() {
        audio.nowPlaying = soundManager.createSound({
            id: 'testing',
            url: audio.playlist[playlistId],
            autoLoad: true,
            autoPlay: true,
            volume: 50,
            // ...with a recursive callback when play completes
            onfinish: function(){
                playAudio(pickNextAudio());
            }
        })
    });
}

function pickNextAudio() {
    var randomInt = Math.floor(Math.random() * 5);
    return randomInt;
}
 
// Start
var playButton = document.getElementById('is-button')
playButton.addEventListener('click', function(){
    playAudio();
});