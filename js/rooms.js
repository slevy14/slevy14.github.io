var rooms = {
    "start" : {
        "description" : "You are on a beach. You see a wooden shack to the <b>north</b> and a cliff to the <b>south</b>.",
        "directions"  : {
            "north" : "shack-outside",
            "south" : "cliff"        
        }
    },
    "shack-outside" : {
        "description" : "You approach the weathered wooden shack. Some of the wood has begun to rot, but it seems functional. The rusty doorknob has a keyhole, but it seems to be <b>locked</b> The rest of the beach is to the <b>south</b>.",
        "directions"  : {
            "south" : "start"
        }
    },
    "cliff" : {
        "description" : "You arrive at a towering rocky cliff, with seemingly no way to reach the top. To the <b>north</b> is the rest of the beach, and to the <b>west</b> is the ocean",
        "directions"  : {
            "north" : "start",
            "west"  : "ocean"
        }
    },
    "ocean" : {
        "description" : "You stare out at the ocean. It <b>stares</b> back at you. To the <b>east</b> are the cliffs, and to the <b>north</b> is the rest of the beach.",
        "directions"  : {
            "east"  : "cliff",
            "north" : "start",
        }
    }
}