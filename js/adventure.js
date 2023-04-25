var currentRoom = "start";

function changeRoom(dir) {
    $('#game-text').append("<p>> " + dir + "</p>")
    if (rooms[currentRoom].directions[dir] !== undefined) {
        currentRoom = rooms[currentRoom].directions[dir];
        $('#game-text').append("<p>" + rooms[currentRoom].description + "</p>");
    } else {
        $('#game-text').append("<p>You can't do that.</p>");
    }

}

$(document).ready(function(){
    $('#game-text').append("<p>" + rooms.start.description + "</p>");

    $(document).keypress(function(key){
        if (key.which === 13 && $('#user-input').is(":focus")) {  // ENTER is pressed
            var value = $('#user-input').val().toLowerCase();

            changeRoom(value);

            document.getElementById('user-input').value = "";
            window.scrollTo(0, document.body.scrollHeight);

            // switch(value) {
            //     case "north":
            //         changeRoom("north")
            //         break;
            //     case "south":
            //         changeRoom("south");
            //         break;
            //     default: alert("error");
            // }

        }
    })



})