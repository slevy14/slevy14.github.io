var rooms = {
    // START PATH
    "start" : {
        "description" : "You awake in an ominous forest. Just like, ominous vibes. NOT chill. You're surrounded by trees on all sides, except for dark path <b>forwards</b>.",
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
                "examination" : "it\'s a mushroom."
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
            "crystal" : "You get closer to the crystal. As you take each step forwards, it begins to spin faster and faster, glowing brighter and brighter. After being temporarily stunned by the light, you reopen your eyes to a glowing blue expanse, nothing as far as the eye can see. A voice speaks to you, the same as before, but now coming from all around you.<br><br>\"hey,\" it says \"glad someone finally found me. i'm sammy, the guy who's website you're on. a wizard trapped me here years ago for eating his mango. it was his fault for leaving it out in the first place, but that's beside the point.\" <br><br> The voices surrounding you begin to converge to a single point, and the light manifests into the rough outline of someone you think you've met before. \"anyways, he said the only way that i could be freed was by someone who truly knew me. obviously, not a lot of people come wandering into an ominous forest, so it's up to you to break the curse. i need you to find the four relics of my life that were scattered throughout the ominous forest and bring them back here as an offering to the ruined runes of runelius. good luck!\"<br><br>With the final words, the light around you shrinks back to a point, and you find yourself back at the ruined runes.<br><br>The way you came from appears to have been closed off by the trees, but four other paths seem to have opened up. One to each direction: <b>north, south, east, west</b>. Ominously enough, the same number of paths as there are relics. Something to think about." 
        }
    },

    // LABORATORY PATH
    "laboratory" : {
        "description" : "Following the path to the north, you come across a large building. It seems out of place in an ominous forest, but hey, that makes it more ominous. Through large windows you can see into the recently polished entryway, as well as a peek into some of the <i>projects</i> inside. The door is open, you could easily go <b>through</b>. You can always also go <b>back</b>, if you'd like.",
        "directions"  : {
            "back"  : "rune-ruins",
            "through" : "lab-entrance"
        },
        "items" : {

        },
        "npcs" : {
            
        }
    },
    "lab-entrance" : {
        "description" : "Stepping through the doorway, the flourescent lights take you by surprise. As your eyes adjust, you notice a figure in a labcoat tinkering with an apparently damaged cluster of wires. A <b>scientist</b>, as it would seem.",
        "directions"  : {
            "left"  : "arcade",
            "right" : "experiments",
            "back" : "laboratory"
        },
        "items" : {

        },
        "npcs" : {
            "scientist" : "You tap the scientist on the shoulder. Startled, he falls back into the cluster of wires. In the most cliche fashion, his skeleton is made visible by the electric shock. After an uncomfortable moment, a now spiky-haired scientist stands back up.<br><br>\"What a rush! I haven't felt a shock like that in ages!\" The shocked man shakes your hand, and you feel a jolt pass between your fingers. \"Incredible! I'll have to write this down for later. Were you sent here by that crystal? It's a shame what happened to him. Interesting data, though. Hypothesis: stealing Runelius's mango will get you turned into a crystal.\"<br><br>\"In any case, welcome to the laboratory! One of Sammy's relics can be found here, along with many of his projects. While you're here, you should check them out. Through that door to the <b>left</b> is the Arcade, where you can find some games he's made, and to the <b>right</b> is the Experimentation Wing, where you can find some of his other projects. Now if you'll excuse me, I have some top secret research to conduct. Oh, and if you come across a raccoon, tell them I <i>know</i> they cheated in catan last week and it <i>will</i> get ugly if they don't admit it. So long!\"<br><br>Hurriedly, the scientist returns to his pile of wires."
        }
    },
    "arcade" : {
        "description" : "under construction! go <b>back</b>",
        "directions"  : {
            "back"  : "lab-entrance",
        },
        "items" : {

        },
        "npcs" : {
            
        }
    },
    "experiments" : {
        "description" : "under construction! go <b>back</b>",
        "directions"  : {
            "back"  : "lab-entrance",
        },
        "items" : {

        },
        "npcs" : {
            
        }
    },

    // CABIN PATH
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

    // THEATER PATH
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

    // BRIDGE PATH
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