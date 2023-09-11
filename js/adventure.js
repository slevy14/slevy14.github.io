var currentRoom = "start";
var commands = ["go [direction]", "take [object]", "examine [room]/[item]", "talk to [character]", "inventory", "help"];
var inventory = [];

function changeRoom(dir) {
    if (rooms[currentRoom].directions[dir] !== undefined) {
        currentRoom = rooms[currentRoom].directions[dir];
        $('#game-text').append("<p>" + rooms[currentRoom].description + "</p>");
    } else {
        $('#game-text').append("<p>You can't do that.</p>");
    }

}

function talkTo(npc) {
    if (rooms[currentRoom].npcs[npc] !== undefined) {
        $('#game-text').append("<p>" + rooms[currentRoom].npcs[npc] + "</p>");
    } else {
        $('#game-text').append("<p>You can't do that.</p>");
    }
}

function takeItem(item) {
    if (rooms[currentRoom].items[item] !== undefined) {
        if (inventory.includes(item)) {
            $('#game-text').append("<p>You already have that item!</p>");
            return;
        }
        inventory.push(item)
        $('#game-text').append("<p>You picked up the " + rooms[currentRoom].items[item].name + "</p>");
    } else {
        $('#game-text').append("<p>You can't do that.</p>");
    }
}

function showHelp() {
    $('#game-text').append("<p>Here are the possible commands: </p>");
    $('#game-text').append("<p><ul>");
    for (var i = 0; i < commands.length; i++) {
        $('#game-text').append("<li>" + commands[i] + "</li>");
    }
    $('#game-text').append("</ul></p>");
}

function showInventory() {
    if (inventory.length === 0) {
        $('#game-text').append("<p>You are not carrying anything</p>");
        return;
    }
    $('#game-text').append("<p>Here is your current inventory: </p>");
    $('#game-text').append("<p><ul>");
    for (var i = 0; i < inventory.length; i++) {
        $('#game-text').append("<li>" + inventory[i] + "</li>");
    }
    $('#game-text').append("</ul></p>");
}

function playerInput(input) {
    $('#game-text').append("<p>> " + input + "</p>")
    var command = input.split(" ")[0];
    switch(command) {
        case "go":
            var dir = input.split(" ")[1];
            changeRoom(dir);
            break;
        case "talk":
            if ((input.split(" ")[1] === "to")||(input.split(" ")[1] === "with")) {
                var npc = input.split(" ")[2];
                talkTo(npc);
            }
            break;
        case "take":
            var item = input.split(" ")[1];
            takeItem(item);
            break;
        case "help":
            showHelp();
            break;
        case "inventory":
            showInventory();
            break;
        default:
            $('#game-text').append("<p>Invalid Command</p>");
    }
}

$(document).ready(function(){
    $('#game-text').append("<p>" + rooms.start.description + "</p>");

    $(document).keypress(function(key){
        if (key.which === 13 && $('#user-input').is(":focus")) {  // ENTER is pressed
            var value = $('#user-input').val().toLowerCase();

            playerInput(value);

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