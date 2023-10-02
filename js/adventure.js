var currentRoom = "start";
var roomsList = [];
var runeRuins = "rune-ruins";
var commands = ["go [direction]", "take [item]", "examine [item]", "talk to [character]", "inventory", "help", "look", "where"];
var inventory = {};

function generateRoomList() {
    for (const [key, value] of Object.entries(rooms)) {
        roomsList.push(key);
    }
    // for (var i = 0; i < roomsList.length; i++) {
    //     $('#game-text').append("<li>" + roomsList[i] + "</li>");
    // }
}

function changeRoom(dir) {
    if (rooms[currentRoom].directions[dir] !== undefined) {
        currentRoom = rooms[currentRoom].directions[dir];
        $('#game-text').append("<p>" + rooms[currentRoom].description + "</p>");
    } else {
        $('#game-text').append("<p>You can't do that</p>");
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
        if (hasItem(item)) {
            $('#game-text').append("<p>You already have that item!</p>");
            return;
        }
        inventory[item] = rooms[currentRoom].items[item];
        $('#game-text').append("<p>You picked up the " + rooms[currentRoom].items[item].name + "</p>");
    } else {
        $('#game-text').append("<p>You can't do that.</p>");
    }
}

function DEBUG_GET_ALL_ITEMS() {
    inventory["cube"] = rooms["win-quiz"].items["cube"];
    inventory["keyboard"] = rooms["arcade"].items["keyboard"];
    inventory["pin"] = rooms["itys"].items["pin"];
    inventory["tome"] = rooms["on-the-bridge"].items["tome"];
}

function examineItem(item) {
    // $('#game-text').append("<p>inventory contains  " + item + "? " + inventory.some(pickedUpItem => pickedUpItem.name == item) + "</p>");
    if (hasItem(item)) {
        $('#game-text').append("<p>You examine the " + inventory[item].name + ". " + inventory[item].examination + "</p>");
    } else if (rooms[currentRoom].items[item] !== undefined) {
        $('#game-text').append("<p>You examine the " + rooms[currentRoom].items[item].name + ": " + rooms[currentRoom].items[item].examination + "</p>");
    } else {
        $('#game-text').append("<p>You can't do that.</p>");
    }
}

function hasItem(item) {
    for (const [key, value] of Object.entries(inventory)) {
        if (key === item) {
            return true;
        }
        console.log(key);
    }
    return false;
}

function showHelp() {
    $('#game-text').append("<p>Here are the possible commands: </p>");
    $('#game-text').append("<p><ul>");
    for (var i = 0; i < commands.length; i++) {
        $('#game-text').append("<li>" + commands[i] + "</li>");
    }
    if (currentRoom === runeRuins) {
        $('#game-text').append("<li>" + "offer relics" + "</li>");
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
    if (Object.keys(inventory).length === 0) {
        $('#game-text').append("<p>You are not carrying anything</p>");
        return;
    }
    $('#game-text').append("<p>Here is your current inventory: </p>");
    $('#game-text').append("<p><ul>");
    for (const [key, value] of Object.entries(inventory)) {
        $('#game-text').append("<li>" + inventory[key].name + "</li>");
    }
    $('#game-text').append("</ul></p>");
}

function offerRelics() {
    if (currentRoom === runeRuins && hasItem("keyboard") && hasItem("cube") && hasItem("pin") && hasItem("tome")) {
        currentRoom = "ending";
        $('#game-text').append("<p>" + rooms[currentRoom].description + "</p>");
    } else if (currentRoom !== runeRuins) {
        $('#game-text').append("<p>You can't do that here!</p>");
    } else {
        $('#game-text').append("<p>You haven't collected all of the relics yet!</p>");
    }
}

function playerInput(input) {
    $('#game-text').append("<p>> " + input + "</p>")
    var command = input.split(" ")[0];
    switch(command) {
        case "go":
            var dir = input.split(" ")[1];
            if (dir === "to" || dir === "with") {
                dir = input.split(" ")[2];
            }
            if (dir === undefined) {
                $('#game-text').append("<p>Go where?</p>");
                break;
            }
            changeRoom(dir);
            break;
        case "talk":
            if ((input.split(" ")[1] === "to")||(input.split(" ")[1] === "with")) {
                var npc = input.split(" ")[2];
                if (npc === "the") {
                    npc = input.split(" ")[3];
                }
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
        case "offer":
            if (input.split(" ")[1] !== "relics") {
                $('#game-text').append("<p>Did you mean \"offer relics\" ?</p>");
            } else if (input.split(" ")[1] === "relics") {
                offerRelics();
            }
            break;
        default:
            $('#game-text').append("<p>Invalid Command.</p>");
    }
}

$(document).ready(function(){
    showHelp();
    generateRoomList();
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