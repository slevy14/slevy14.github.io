var rooms = {
    "room0" : "<p>You are on a beach. You see a wooden shack to the <b>north</b> and a cliff to the <b>south</b>.</p>"
}

$(document).ready(function(){
    $('#game-text').append(rooms["room0"]);

    $(document).keypress(function(key){
        if (key.which === 13 && $('#user-input').is(":focus")) {  // ENTER is pressed
            var value = $('#user-input').val();
            alert(value);

        }
    })



})