function getWorld()
{
    return {
        rooms : [
            {
                "Name" : "Living room",
                "Description": "Living room is a big noisy room. There are 3 people discussing on the couch.",
                "East" : "Kitchen",
                "West" : "Bedroom",
                "South" : "Lobby",
                "DoorWest" : "blue key"
            },
            {
                "Name" : "Kitchen",
                "West" : "Living room",
                "Objects" : ["blue key", "red key"]
            },
            {
                "Name" : "Bedroom",
                "East" : "Living room",
                "DoorEast" : "red key",
                "Objects" : ["house keys"]
            },
            {
                "Name" : "Lobby",
                "Description": "Lobby is a well lit room big windows and a door that leads to Outside.",
                "North" : "Living room",
                "South" : "Outside",
                "DoorSouth" : "house keys",
                "East" : "Basement"
            },
            {
                "Name" : "Basement",
            },
            {
                "Name" : "Outside",
                "GameWin" : true
            }
        ]
    };
}
