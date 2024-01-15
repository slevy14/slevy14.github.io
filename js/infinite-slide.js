var audio = [];
// Array of files you'd like played
audio.playlist = [
    "/audio/cha_cha_slide_clips/aw_yeah.mp3",
    "/audio/cha_cha_slide_clips/aw_yeh.mp3",
    "/audio/cha_cha_slide_clips/awwww_yeah.mp3",
    "/audio/cha_cha_slide_clips/basic_steps.mp3",
    "/audio/cha_cha_slide_clips/cha_cha_again.mp3",
    "/audio/cha_cha_slide_clips/cha_cha_now_yall.mp3",
    "/audio/cha_cha_slide_clips/cha_cha_real_smooth.mp3",
    "/audio/cha_cha_slide_clips/charlie_brown.mp3",
    "/audio/cha_cha_slide_clips/check_it_out.mp3",
    "/audio/cha_cha_slide_clips/clap_clap_your_hands.mp3",
    "/audio/cha_cha_slide_clips/cmon.mp3",
    "/audio/cha_cha_slide_clips/cmon_yall.mp3",
    "/audio/cha_cha_slide_clips/criss_cross.mp3",
    "/audio/cha_cha_slide_clips/everybody_clap_your_hands.mp3",
    "/audio/cha_cha_slide_clips/five_hops_this_time.mp3",
    "/audio/cha_cha_slide_clips/freeze.mp3",
    "/audio/cha_cha_slide_clips/funky.mp3",
    "/audio/cha_cha_slide_clips/get_funky_with_it.mp3",
    "/audio/cha_cha_slide_clips/go_to_work.mp3",
    "/audio/cha_cha_slide_clips/hands_on_your_knees.mp3",
    "/audio/cha_cha_slide_clips/hop_it_out.mp3",
    "/audio/cha_cha_slide_clips/how_low_can_you_go.mp3",
    "/audio/cha_cha_slide_clips/im_outta_here.mp3",
    "/audio/cha_cha_slide_clips/left_foot_again.mp3",
    "/audio/cha_cha_slide_clips/left_foot_now.mp3",
    "/audio/cha_cha_slide_clips/left_foot_stomp.mp3",
    "/audio/cha_cha_slide_clips/left_foot_two_stomp.mp3",
    "/audio/cha_cha_slide_clips/mmhmm.mp3",
    "/audio/cha_cha_slide_clips/now_its_time_to_get_funky.mp3",
    "/audio/cha_cha_slide_clips/one_hop.mp3",
    "/audio/cha_cha_slide_clips/one_hop_this_time.mp3",
    "/audio/cha_cha_slide_clips/peace.mp3",
    "/audio/cha_cha_slide_clips/record_scratch_reverse.mp3",
    "/audio/cha_cha_slide_clips/right_foot_again.mp3",
    "/audio/cha_cha_slide_clips/right_foot_now.mp3",
    "/audio/cha_cha_slide_clips/right_foot_stomp.mp3",
    "/audio/cha_cha_slide_clips/right_foot_two_stomp.mp3",
    "/audio/cha_cha_slide_clips/slide_to_the_left.mp3",
    "/audio/cha_cha_slide_clips/slide_to_the_right.mp3",
    "/audio/cha_cha_slide_clips/take_it_back_now_yall.mp3",
    "/audio/cha_cha_slide_clips/to_the_left.mp3",
    "/audio/cha_cha_slide_clips/to_the_left_2.mp3",
    "/audio/cha_cha_slide_clips/to_the_left_3.mp3",
    "/audio/cha_cha_slide_clips/to_the_right.mp3",
    "/audio/cha_cha_slide_clips/turn_it_out.mp3",
    "/audio/cha_cha_slide_clips/two_hops_this_time.mp3",
    "/audio/cha_cha_slide_clips/two_hops_two_hops.mp3",
    "/audio/cha_cha_slide_clips/were_gonna_get_funky.mp3",
    "/audio/cha_cha_slide_clips/yeah_do_that_stuff.mp3",
];
 
function playAudio(){
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
    var randomInt = Math.floor(Math.random() * 49);
    return randomInt;
}
 
// Start
var playButton = document.getElementById('is-button')
playButton.addEventListener('click', function(){
    playAudio();
});