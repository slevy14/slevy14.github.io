var rooms = {
    // START PATH
    "start" : {
        "description" : "You awake in an ominous forest. Just like, ominous vibes. NOT chill. You're surrounded by trees on all sides, except for dark path <b>forward</b>.",
        "directions"  : {
            "forward" : "dark-path",    
        },
        "npcs" : {
            
        },
        "items" : {
            
        }
    },
    "dark-path" : {
        "description" : "As you walk along the dark path, you notice a faint glow in the distance. <b>Forward</b> still seems to be the only way to go. There is a <b>mushroom</b> on the ground.",
        "directions"  : {
            "forward" : "rune-ruins",
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
            "crystal" : "You get closer to the crystal. As you take each step forward, it begins to spin faster and faster, glowing brighter and brighter. After being temporarily stunned by the light, you reopen your eyes to a glowing blue expanse, nothing as far as the eye can see. A voice speaks to you, the same as before, but now coming from all around you.<br><br>\"hey,\" it says \"glad someone finally found me. i'm sammy, the guy who's website you're on. a wizard trapped me here years ago for eating his mango. it was his fault for leaving it out in the first place, but that's beside the point.\" <br><br> The voices surrounding you begin to converge to a single point, and the light manifests into the rough outline of someone you think you've met before. \"anyways, he said the only way that i could be freed was by someone who truly knew me. obviously, not a lot of people come wandering into an ominous forest, so it's up to you to break the curse. i need you to find the four relics of my life that were scattered throughout the ominous forest and bring them back here as an offering to the ruined runes of runelius. good luck!\"<br><br>With the final words, the light around you shrinks back to a point, and you find yourself back at the ruined runes.<br><br>The way you came from appears to have been closed off by the trees, but four other paths seem to have opened up. One to each direction: <b>north, south, east, west</b>. Ominously enough, the same number of paths as there are relics. Something to think about." 
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
        "description" : "Stepping through the doorway, the fluorescent lights take you by surprise. As your eyes adjust, you notice a figure in a labcoat tinkering with an apparently damaged cluster of wires. A <b>scientist</b>, as it would seem.",
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
        "description" : "You walk down the hallway to the left. The sounds of lasers, pinball machines, and the beep-boops of classic arcade machines flood your ears. Laughing children run past you from game to game as their annoyed parents try to keep up. A few games catch your eye, along with strange figures standing nearby:<br><br>An action-platformer with a <b>frog</b> leaning against the machine.<br>A text-based adventure (not this one, but how meta!) currently being played by a <b>kid</b> dressed as Harry Potter.<br>A roguelike with a <b>snake</b> wrapped around the joystick.<br>An out-of-order MMO being worked on by a creature that can only be described as looking something like <b>bigfoot</b>.<br><br>An overly-enthusiastic <b>employee</b> can be seen standing at a prize desk. You can also go <b>back</b> to the entrance.",
        "directions"  : {
            "back"  : "lab-entrance",
        },
        "items" : {
            "keyboard" : {
                "name" : "Keyboard of Legend (keyboard)",
                "examination" : "A <b>relic</b> recieved from visiting the lab. Go back if you want to play some games!"
            }

        },
        "npcs" : {
            "employee" : "\"HIYA THERE!\" shouts the overly-enthusiastic employee. \"Welcome to the arcade! We have lots of games for you to play, just talk to the people by the cabinets. You can go also <b>back</b> to the entrance if you want to visit the experimentation wing, but we'll miss ya! Oh, and you can get the relic, the <b>Keyboard</b> of Legend, here from me too!",
            "frog" : "You approach the frog. \"How's it going,\" he starts, \"the name's Claude. Despite my appearence, I'm actually a traveling musician. At least, I was, until my instruments were stolen. Come with me on a quest around the world to recover my stolen instruments in the demo for <a href=\"https://leafguy.itch.io/one-frog-band\" target=\"_blank\" rel=\"noopener noreferrer\">One Frog Band</a>, a game created by Sammy Levy, Max Cheng, Bryanna Hernandez, and Nick Novak! The game was made in Unity 2023 in a game design class, with a full Game Design Document alongside it.\"",
            "kid" : "\"Abra Kadabra!\" yells the kid as he turns around. \"At least, I think that's a spell. Anyways, <a href=\"https://slevy14.github.io/twine/youngwizards.html\" target=\"_blank\" rel=\"noopener noreferrer\">Young Wizards</a> is a game created by Sammy in the Twine engine that explores the experience of being a child on a playground. Short but sweet!\"",
            "snake" : "\"Howdy, pardner!\" the snake hisses as you approach, tipping her cowboy hat with her tail. \"I just finished a run of <a href=\"https://leafguy.itch.io/custom-snake-2019\" target=\"_blank\" rel=\"noopener noreferrer\">Custom Snake</a>, a game that Sammy created in high school for an AP Computer Science class. It's an implementation of the classic Snake as a roguelike. Score big, get upgrades, get bigger scores, get bigger upgrades, and so on! Check it out!\"",
            "bigfoot" : "Yep, that's bigfoot. He approaches you with a stack of papers. \"Sorry, machine's out of order. <a href=\"https://slevy14.github.io/Inn_Conspicuous_GDD.pdf\" target=\"_blank\" rel=\"noopener noreferrer\">Inn Conspicuous</a> is an MMO created by Sammy and some friends in a software engineering course. While the game was never built beyond very early prototypes, the Game Design Document was largely completed. Give it a read if you want some behind-the-scenes info!",
        }
    },
    "experiments" : {
        "description" : "You walk down the hallway to the right. Stepping into even brighter fluorescent light, you see strange contraptions all around you. Various machines whir and click at seemingly random intervals. A <b>gnome</b> with safety goggles on presses a button, which causes something to blow up. You can also go <b>back</b> to the entrance.",
        "directions"  : {
            "back"  : "lab-entrance",
        },
        "items" : {

        },
        "npcs" : {
            "gnome" : "\"Ohoho, welcome to the experimentation wing!\" exclaims the gnome, excitedly shaking both of your hands at the same time. \"Sammy's big project here was the <a href=\"https://slevy14.github.io/mac250-screenshots.html\" target=\"_blank\" rel =\"noopener noreferrer\">MAC 250 AR Experience</a>, a mobile app built in unity that used Augmented Reality and Map Data to showcase digital art installations around his college campus. Click on the link for screenshots!\" The gnome scampers away, finding another button to press, causing another explosion.",
        }
    },

    // CABIN PATH
    "cabin" : {
        "description" : "You venture to the east. Through a gap in the trees, you notice a log cabin with smoke coming out of its chimney. A lantern casts a faint glow on the front porch through the window. If you go <b>forward</b>, you can investigate this ominous structure. You can always turn around and go <b>back</b>",
        "directions"  : {
            "back"  : "rune-ruins",
            "forward" : "cabin-porch"
        },
        "items" : {

        },
        "npcs" : {
            
        }
    },
    "cabin-porch" : {
        "description" : "A comforting voice invites you into the cabin. Stepping onto the porch, you see a rustic looking table set with two cups of tea. A lumberjack waves to you and gestures to a chair opposite him. You can go <b>to table</b>, or turn around and go <b>back</b>",
        "directions"  : {
            "back"  : "cabin",
            "to table" : "table",
        },
        "items" : {

        },
        "npcs" : {
            
        }
    },
    "table" : {
        "description" : "The lumberjack greets you with a warm smile. You take a sip of the tea, experiencing a flavor palette unfamiliar to you. \"It's a custom blend,\" he starts, \"Sammy found it recently at a <a href=\"https://www.racertea.com/\" target=\"_blank\" rel=\"noopener noreferrer\"local tea shop.</a> Tastes like a banana nut muffin. Wild.\" The <b>lumberjack</b> takes a sip of his tea.",
        "directions"  : {
            "back"  : "cabin-porch",
        },
        "items" : {

        },
        "npcs" : {
            "lumberjack" : "You introduce yourself to the lumberjack. \"Oh, I know who you are. Another relic seeker. Yep, got one here too. I'm an old friend of Sammy's. In fact, I know everything about him.\" His gaze turns to a photo hanging on the wall of Sammy with some friends in middle school. \"Good times. Y'know, he used to wear that goofy hat all the time. Glad he finally came around on that one, he has much cooler hats now.\"<br><br>The lumberjack takes another sip of his tea, burning his mouth just a little bit. \"Well, let's start with what you probably already know. Sammy is a Computer Science major at Occidental College in LA. He's also minoring in Education and Math, and is interested in pursuing game design and/or CS education. If you want to learn more about his game design endeavors, you should head over to the lab when you're done here.\"",
        }
    },

    // THEATER PATH
    "woodland-theater" : {
        "description" : "woodland theater under construction! go <b>back</b>",
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
        "description" : "bridgeunder construction! go <b>back</b>",
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