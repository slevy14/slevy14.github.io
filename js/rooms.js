var rooms = {
    "start" : {
        "description" : "You awake in an ominous forest. Just like, ominous vibes. NOT chill. You're surrounded by trees on all sides, except for dark path <b>forwards</b>",
        "directions"  : {
            "forwards" : "dark-path",
            "forward" : "dark-path"        
        },
        "npcs" : {
            
        },
        "items" : {
            
        }
    },
    "dark-path" : {
        "description" : "As you walk along the dark path, you notice a faint glow in the distance. <b>Forward</b> still seems to be the only way to go. There is a <b>mushroom</b> on the ground.",
        "directions"  : {
            "forwards" : "rune-ruins",
            "forward" : "rune-ruins"
        },
        "items" : {
            "mushroom" : {
                "name" : "mushroom",
                "examination" : "it\'s a mushroom"
            }
        },
        "npcs" : {
            
        }
    },
    "rune-ruins" : {
        "description" : "You approach a clearing in the forest. At its center sits a ruined stone structure; at its heart is a <b>crystal</b> emmitting a shimmering blue halo and illuminating the four stone pillars that surround it. A voice enters your thoughts, suggesting that you <b>talk</b> to the <b>crystal</b>. How ominous.",
        "directions"  : {
            "north" : "laboratory",
            "east" : "cabin",
            "south" : "woodland-theater",
            "west"  : "bridge"
        },
        "items" : {
            
        },
        "npcs" : {
            "crystal" : "You get closer to the crystal. Step by step forwards, it begins to spin faster and faster, glowing brighter and brighter. After being temporarily stunned by the light, you reopen your eyes to a glowing blue expanse, nothing as far as the eye can see. A voice speaks to you, the same as before, but now coming from all around you. \"hey,\" it says \"glad someone finally found me. i'm sammy, the guy who's website you're on. a wizard trapped me here years ago for eating his mango. it was his fault for leaving it out in the first place, but that's beside the point.\" The voices surrounding you begin to converge to a single point, and the light manifests into the rough outline of someone you think you've met before. \"anyways, he said the only way that i could be freed was by someone who truly knew me. obviously, not a lot of people come wandering into an ominous forest, so it's up to you to break the curse. i need you to find the four relics of my life that were scattered throughout the ominous forest and bring them back here as an offering to the ruined runes of runelius. good luck!\" With the final words, the light around you shrinks back to a point, and you find yourself back at the ruined runes. The way you came from appears to have been closed off by the trees, but four other paths seem to have opened up. One to each direction: <b>north, south, east, west</b>. Ominously enough, the same number of paths as there are relics. Something to think about." 
        }
    },
    "laboratory" : {
        "description" : "laboratory. go <b>back</b>",
        "directions"  : {
            "back"  : "rune-ruins",
        },
        "items" : {

        },
        "npcs" : {
            
        }
    },
    "cabin" : {
        "description" : "cabin. go <b>back</b>",
        "directions"  : {
            "back"  : "rune-ruins",
        },
        "items" : {

        },
        "npcs" : {
            
        }
    },
    "woodland-theater" : {
        "description" : "woodland theater. go <b>back</b>",
        "directions"  : {
            "back"  : "rune-ruins",
        },
        "items" : {

        },
        "npcs" : {
            
        }
    },
    "bridge" : {
        "description" : "bridge. go <b>back</b>",
        "directions"  : {
            "back"  : "rune-ruins",
        },
        "items" : {

        },
        "npcs" : {
            
        }
    }
}




// var old_rooms = {
//     "start" : {
//         "description" : "You are on a beach. You see a wooden shack to the <b>north</b> and a cliff to the <b>south</b>.",
//         "directions"  : {
//             "north" : "shack-outside",
//             "south" : "cliff"        
//         }
//     },
//     "shack-outside" : {
//         "description" : "You approach the weathered wooden shack. Some of the wood has begun to rot, but it seems functional. The rusty doorknob has a keyhole, but it seems to be <b>locked</b> The rest of the beach is to the <b>south</b>.",
//         "directions"  : {
//             "south" : "start"
//         }
//     },
//     "cliff" : {
//         "description" : "You arrive at a towering rocky cliff, with seemingly no way to reach the top. To the <b>north</b> is the rest of the beach, and to the <b>west</b> is the ocean",
//         "directions"  : {
//             "north" : "start",
//             "west"  : "ocean"
//         }
//     },
//     "ocean" : {
//         "description" : "You stare out at the ocean. It <b>stares</b> back at you. To the <b>east</b> are the cliffs, and to the <b>north</b> is the rest of the beach.",
//         "directions"  : {
//             "east"  : "cliff",
//             "north" : "start",
//         }
//     }
// }