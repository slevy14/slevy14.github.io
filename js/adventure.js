var currentRoom = "start";
var commands = ["go [direction]", "take [item]", "examine [item]", "talk to [character]", "inventory", "help", "look", "where"];
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
        inventory.push(rooms[currentRoom].items[item])
        $('#game-text').append("<p>You picked up the " + rooms[currentRoom].items[item].name + "</p>");
    } else {
        $('#game-text').append("<p>You can't do that.</p>");
    }
}

function examineItem(item) {
    if (inventory.includes(item)) {
        $('#game-text').append("<p>You examine the " + inventory[item].name + ". " + inventory[item].examination + "</p>");
    } else if (rooms[currentRoom].items[item] !== undefined) {
        $('#game-text').append("<p>You examine the " + rooms[currentRoom].items[item].name + ": " + rooms[currentRoom].items[item].examination + "</p>");
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

function listDirections() {
    $('#game-text').append("<p>Here are the possible directions from your current location (try to do this only if you really need help!): </p>");
    
    var moves = [];
    for (const [key, value] of Object.entries(rooms[currentRoom].directions)) {
        moves.push(key);
    }

    $('#game-text').append("<p><ul>");
    for (var i = 0; i < moves.length; i++) {
        $('#game-text').append("<li>" + moves[i] + "</li>");
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
        $('#game-text').append("<li>" + inventory[i].name + "</li>");
    }
    $('#game-text').append("</ul></p>");
}

function playerInput(input) {
    $('#game-text').append("<p>> " + input + "</p>")
    var command = input.split(" ")[0];
    switch(command) {
        case "go":
            var dir = input.split(" ")[1];
            if (dir === undefined) {
                $('#game-text').append("<p>Go where?</p>");
                break;
            }
            changeRoom(dir);
            break;
        case "talk":
            if ((input.split(" ")[1] === "to")||(input.split(" ")[1] === "with")) {
                var npc = input.split(" ")[2];
                if (npc === undefined) {
                    $('#game-text').append("<p>Talk to whom?</p>");
                    break;
                }
                talkTo(npc);
            } else {
                $('#game-text').append("<p>Talk to whom?</p>");
            }
            break;
        case "take":
            var item = input.split(" ")[1];
            if (item === undefined) {
                $('#game-text').append("<p>Take what?</p>");
                break;
            }
            takeItem(item);
            break;
        case "examine":
            var item = input.split(" ")[1];
            if (item === undefined) {
                $('#game-text').append("<p>Examine what?</p>");
                break;
            }
            examineItem(item);
            break;
        case "look":
            $('#game-text').append("<p>" + rooms[currentRoom].description + "</p>");
            break;
        case "help":
            showHelp();
            break;
        case "where":
            listDirections();
            break;
        case "inventory":
            showInventory();
            break;
        default:
            $('#game-text').append("<p>Invalid Command</p>");
    }
}

$(document).ready(function(){
    showHelp();
    $('#game-text').append("<p>" + rooms.start.description + "</p>");

    $(document).keypress(function(key){
        if (key.which === 13 && $('#user-input').is(":focus")) {  // ENTER is pressed
            var value = $('#user-input').val().toLowerCase();

            playerInput(value);

            document.getElementById('user-input').value = "";
            window.scrollTo(0, document.body.scrollHeight);

        }
    })



})